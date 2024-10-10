import { useState, useEffect, useRef } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import EmojiPicker from 'emoji-picker-react';
import { MdEmojiEmotions } from "react-icons/md";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { loading, sendMessage } = useSendMessage();

  // Refs for the emoji picker and input field
  const emojiPickerRef = useRef(null);
  const inputRef = useRef(null);

  // Corrected handleEmojiClick function
  const handleEmojiClick = (emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);  // Add selected emoji to the message
  };

  const handleSubmit = async (e) => {
    setShowEmojiPicker(false);
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  // useEffect to detect clicks outside of the emoji picker or input field
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current && 
        !emojiPickerRef.current.contains(event.target) && 
        !inputRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);  // Close the emoji picker if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect to focus the input field when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();  // Set focus to the input field
    }
  }, []);

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full flex gap-x-2 relative">
        
        {/* Input for the message */}
        <input
          ref={inputRef}
          type="text"
          className="border flex-1 text-sm rounded-lg block p-2.5 input input-bordered pr-10"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Emoji Picker Button */}
        <button
          type="button"
          className=" right-14 top-1/2 transform -translate-y-1/2 btn-sm btn-circle absolute"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <MdEmojiEmotions className="size-6" />
        </button>

        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div ref={emojiPickerRef} className="absolute bottom-12 sm:right-14">
            <EmojiPicker className="max-w-max" emojiStyle="twemoji"
    searchPlaceholder="Find emoji..." onEmojiClick={handleEmojiClick} />
          </div>
        )}
        
        {/* Send Button */}
        <button
          type="submit"
          className="btn btn-circle"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend className="size-5" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;