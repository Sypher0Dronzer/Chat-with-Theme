import { useEffect } from "react";
import {  useSocketContext } from "../context/SocketContext";
import { useNewUsers } from "../zustand/useNewUsers";

const useListenNewUsers = () => {
    const { socket } = useSocketContext();
    const {conversations,setConversations}= useNewUsers()
    useEffect(() => {
        socket?.on("newUser", (newUserData) => {
          
          setConversations([...conversations, newUserData]);
        });
    
        return () => socket?.off("newMessage");
      }, [socket, setConversations,conversations]);

}

export default useListenNewUsers
