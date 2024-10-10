import toast from "react-hot-toast";
import { create } from "zustand";

export const useNewUsers = create((set) => ({
  conversations: null,
  loading: false,

  // Fetch conversations
  getConversations: async () => {
    set( ({ loading: true })); // Start loading
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if (!data.success) {
        set({conversations:data})
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      set( ({  loading: false })); // Stop loading
    }
  },
  setConversations: (newUserData) => {
    set((state) => ({
      conversations: [...state.conversations, newUserData], // Append new user to conversations
    }));
  },
}));
