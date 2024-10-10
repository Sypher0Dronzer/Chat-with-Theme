import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const { selectedConversation} = useConversation();
	return (
		<div className={`border-r border-primary py-4 px-2 sm:flex flex-col  md:w-1/3 sm:max-w-[300px] sm:min-w-[230px] ${selectedConversation? 'hidden':'w-screen flex'}`}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;