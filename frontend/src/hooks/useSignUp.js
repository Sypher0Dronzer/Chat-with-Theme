import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../zustand/useAuthStore";

const useSignup = () => {
	const [loading, setLoading] = useState(false);

	const {loginUser}= useAuthStore()

	const signup = async ({ email, username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ email, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, username, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			loginUser(data)
			toast.success('User signed in!')
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ email, username, password, confirmPassword, gender }) {
	if (!email || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}