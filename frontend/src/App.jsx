import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./zustand/useAuthStore";
import { useEffect } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  const {user,authCheck,isLoading}=useAuthStore()
  useEffect(()=>{
    authCheck()
  },[])
  if(isLoading) return (
    <div className="h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg text-white"></span>
    </div>
  )
  return (
    <div className=" h-screen bg-base-100 flex items-center justify-center">
      <Routes>
        <Route index element={!user?.success? <Navigate to="/login"/>: <Home/>} />
        <Route path="/login" element={user?.success? <Navigate to="/"/>: <Login/>} />
        <Route path="/signup" element={user?.success? <Navigate to="/"/>: <SignUp/>} />
      </Routes>
      <Toaster />
      { <ThemeSwitcher position='dropdown-left dropdown-down' visibility={`${user?.success?"hidden": 'hidden sm:inline-block'}`} />}      
    </div>
  );
};

export default App;
