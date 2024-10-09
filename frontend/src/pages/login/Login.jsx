import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className="sm:min-w-96 mx-auto card bg-base-300 text-base-300-content">
      <div className="w-full p-6  ">
        <h1 className="sm:text-3xl text-2xl font-semibold text-center ">
          Login
          <span className="text-base-100-content font-bold sm:text-4xl text-3xl"> Sora</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full input 
						input-bordered h-10"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-primary mt-2 inline-block"
          >
            {"Don't "}have an account yet ?
          </Link>

          <div>
		  <button className='btn btn-primary text-primary-content btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
          </div>

          <div>
            <Link to='/signup'>
            <button className="btn btn-primary text-primary-content  btn-outline btn-block btn-sm mt-2 ">
              Sign Up
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
