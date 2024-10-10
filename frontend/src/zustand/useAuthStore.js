import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  authCheck: async () => {
    try {
      set({ isLoading: true });
      const res = await fetch("api/auth/authcheck");
      const data = await res.json();
      set({ user: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  logoutUser: ()=>{
    set({user:null})
  },
  loginUser:(data)=>{
    set({user:data})
  }
}));
