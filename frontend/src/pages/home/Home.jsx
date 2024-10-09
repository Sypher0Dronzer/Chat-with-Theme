import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-screen overflow-hidden w-screen '>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;