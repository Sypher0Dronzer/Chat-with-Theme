import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { useAuthStore } from "../zustand/useAuthStore";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { user } = useAuthStore();

	useEffect(() => {
		if (user?.success) {
			// const socket = io("https://chat-app-xi6k.onrender.com", {
				const socket = io("http://localhost:5000", {
				query: {
					userId: user.user._id,
				},
			});
			setSocket(socket);

			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});
			
			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [user]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};