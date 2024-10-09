import { create } from "zustand";

export const useGetNewUsers = create((set) => {
  

  return {
    conversations: null,
    setConversations: async (newConversations) => {set({newConversations})
    },
  };
});
