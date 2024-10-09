import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const { selectedConversation} = useConversation();
	return (
		<div className={`border-r border-slate-500 py-4 px-2 sm:flex flex-col bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 md:w-1/3 sm:max-w-[300px] ${selectedConversation? 'hidden':'w-screen flex'}`}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;