// import {useTheme} from "../../zustand/useTheme";
import extractTime from "../../utills/extractTime";
import { useAuthStore } from "../../zustand/useAuthStore";
import useConversation from "../../zustand/useConversation";
// import { colorVariants } from "../../utills/colorVariants";
function Message({message}) {
	const {user}= useAuthStore();
	// const {theme}= useTheme()
	const {selectedConversation} = useConversation()
	const formattedTime= extractTime(message.createdAt)
	const fromMe=message?.senderId === user.user._id
	const chatClassName=fromMe? 'chat-end': 'chat-start'
	const profilePic=fromMe? user.user.profilePic: selectedConversation?.profilePic
	// const bubbleBgColor = fromMe 
	// ? colorVariants[`bubble-user-${theme}`]
	// : colorVariants[`bubble-friend-${theme}`];
	const bubbleBgColor = fromMe 
	? 'bg-secondary text-secondary-content'
	: 'bg-accent text-accent-content';

	const shakeClass= message.shouldShake? "shake" : ""
  return (
    <div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>	
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
  )
}

export default Message
