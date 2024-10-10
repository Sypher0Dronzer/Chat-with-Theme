import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../zustand/useAuthStore";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { logoutUser } = useAuthStore();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if(data.success){
        logoutUser()
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
