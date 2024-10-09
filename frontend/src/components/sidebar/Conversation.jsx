import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation, lastIndx,emoji}) => {
	const {selectedConversation,setSelectedConversation}=useConversation()
	const isSelected= conversation._id === selectedConversation?._id
	const {onlineUsers}=useSocketContext()
	const isOnline=onlineUsers.includes(conversation._id)
	return (
		
		<>
			<div className={`flex gap-2 items-center ${isSelected?'bg-primary text-primary-content':' hover:bg-base-300 hover:text-base-300-content'} rounded p-2 py-1 cursor-pointer`}
			onClick={()=>setSelectedConversation(conversation)}>
				<div className={`avatar ${isOnline? 'online': ''}`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic}
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold capitalize'>{conversation?.username?.length > 14 
    ? `${conversation.username.substring(0, 14)}...` 
    : conversation?.username}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIndx && <div className='divider my-0 py-0 h-1' />}
			
		</>
	);
};
export default Conversation;