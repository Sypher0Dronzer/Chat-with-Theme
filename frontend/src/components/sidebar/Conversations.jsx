import { getRandomEmoji } from "../../utills/emojis";
import { useNewUsers } from "../../zustand/useNewUsers";
import Conversation from "./Conversation";

const Conversations = () => {	
	const { loading, conversations} = useNewUsers();
	return (
		<div className='py-2 flex flex-col overflow-auto scrollbar-hide'>
			{conversations?.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIndx={idx ===conversations?.length - 1}
				/>
				
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;
