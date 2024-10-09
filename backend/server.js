import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import "./config/passport.js";
import { ENV_VARS } from "./config/envVArs.js";
import path from "path";
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";


const mongoStore = MongoStore.create({
  mongoUrl: ENV_VARS.MONGO_URI, // Use the same database name
  collectionName: "sessions", // Optional: Customize session collection name
});

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: mongoStore, // Use MongoDB store
    cookie: {
      secure: false, // Set to `true` if using HTTPS
      httpOnly: false,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api/auth/", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(ENV_VARS.PORT, () => {
  console.log(`Server running on port ${ENV_VARS.PORT}`);
  connectDB();
});
