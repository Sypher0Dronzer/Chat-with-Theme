import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { IoMdArrowBack } from "react-icons/io";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(selectedConversation?._id)
  useEffect(()=>{
	//clean up function unmounts 
	return ()=>{setSelectedConversation(null)}
  },[setSelectedConversation])
  return (
    <div className={`sm:w-full ${!selectedConversation?"min-sm:hidden":"w-screen"} flex flex-col justify-center relative h-[100dvh]`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-primary text-primary-content px-4 py-2 mb-2 flex items-center gap-x-2 z-10">
            <button onClick={()=>{setSelectedConversation(null)}} className="sm:hidden"><IoMdArrowBack className="size-6 " /></button>
            <div className={`avatar ${isOnline? 'online' : ''}`}>
              <div className="w-10 rounded-full">
                <img src={selectedConversation.profilePic} />
              </div>
            </div>
            <div className="flex-column">

			  <p className="font-bold text-opacity-60 capitalize">{selectedConversation.username}</p>
        <p className={`font-medium text-sm ${isOnline? 'text-secondary-content' : ''}`}>{isOnline? 'online' : 'last seen recently'}</p>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="hidden sm:flex items-center justify-center h-full ">
      <div className="px-4 text-center sm:text-lg md:text-3xl  font-semibold flex flex-col items-center gap-2 text-base-100-content">
        <p>Welcome 👋 ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
