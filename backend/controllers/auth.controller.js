import passport from "passport";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { io } from "../socket/socket.js";

export async function logout(req, res) {
  try {
    // console.log(req.user);

    req.logout((err) => {
      if (err)
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      else
        res
          .status(200)
          .json({ success: true, message: "Logged out successfully" });
    });
  } catch (error) {
    // console.log("Error in logout controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
async function handleLogin(req, res) {
  return new Promise((resolve, reject) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return reject({ status: 500, message: "Internal server error" });
      }
      if (!user) {
        return reject({
          status: 400,
          message: info.message || "Invalid credentials",
        });
      }
      req.logIn(user, (err) => {
        if (err) {
          return reject({ status: 500, message: "Error logging in user" });
        }
        resolve({
          status: 200,
          user: { ...user._doc, password: "" },
        });
      });
    })(req, res);
  });
}

export async function signup(req, res) {
  try {
    const { username, email, password, confirmPassword, gender } = req.body;

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be atleast 6 characters long" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    if (!regex.test(email)) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      gender: gender,
      profilePic: gender == "Male" ? boyProfilepic : girlProfilepic,
    });

    io.emit("newUser", newUser);
    await newUser.save();
    // Use the extracted login logic
    try {
      const loginResult = await handleLogin(req, res);
      return res.status(loginResult.status).json({
        user: loginResult.user,
      });
    } catch (loginError) {
      return res.status(loginError.status).json({
        message: loginError.message,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server side error",
    });
  }
}

export async function login(req, res, next) {
  try {
    const loginResult = await handleLogin(req, res);
    return res.status(loginResult.status).json({
      success: true,
      user: loginResult.user,
    });
  } catch (loginError) {
    return res.status(loginError.status).json({
      success: false,
      message: loginError.message,
    });
  }
}

export async function authCheck(req, res) {
  if (req.isAuthenticated()) {
    res.status(200).json({ success: true, user: req.user });
  } else {
    res.status(400).json({ success: false });
  }
}
