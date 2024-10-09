import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNewUsers } from "../zustand/useNewUsers";

const useGetConversations = () => {
  const {conversations,setConversations,loading}= useNewUsers()

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        if(!data.success){
            setConversations(data);
        }
        else{
            toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
      }
    };

    getConversations();
  }, []);

  return { loading, conversations,setConversations };
};
export default useGetConversations;
