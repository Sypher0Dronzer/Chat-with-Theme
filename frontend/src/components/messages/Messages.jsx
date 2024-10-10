import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()

  // Create a ref to reference the end of the message list, renamed to lastMessageRef
  const lastMessageRef = useRef(null);

  // Function to scroll to the bottom of the message list
  const scrollToBottom = () => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Use useEffect to scroll to the bottom when messages change
  useEffect(() => {
    if (!loading) {
      scrollToBottom(); // Scroll only when loading is false
    }
  }, [messages, loading]);

  return (
    <div className='px-4 flex-1 overflow-auto scrollbar-hide'>
      {loading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {!loading && messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      }

      {/* Add an empty div to mark the end of the message list */}
      <div ref={lastMessageRef} />
    </div>
  );
};

export default Messages;
