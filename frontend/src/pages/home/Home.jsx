import { useEffect } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNewUsers } from "../../zustand/useNewUsers";

const Home = () => {
	const { getConversations} = useNewUsers();

	useEffect(()=>{
		getConversations()
	},[])
	return (
		<div className='flex h-screen overflow-hidden w-screen '>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;