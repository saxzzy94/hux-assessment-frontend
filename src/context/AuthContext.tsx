"use client";
import {
	createContext,
	useState,
	useContext,
	useEffect,
	FC,
	ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import apiCall, { HTTPVerbs } from "../helper/apicall";
import { toast } from "react-toastify";

interface AuthContextType {
	user: any | null;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	signup: (email: string, password: string) => Promise<void>;
}
interface APIResponse {
	success: boolean;
	message: string;
	data: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<any | null>(null);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			console.log(`token: ${token}`);
			(async () => await loadUser())();
		}
	}, []);

	const login = async (email: string, password: string) => {
		const res = await apiCall<APIResponse>("/login", HTTPVerbs.POST, {
			email,
			password,
		});
		await loadUser();
		if (res.success) {
			localStorage.setItem("token", res.data.token);
			toast.success(res.message);
		} else {
			toast.error(res.message);
		}
	};
	const loadUser = async () => {
		const res = await apiCall<APIResponse>("/user");
		console.log(res);
		if (res.success) {
			setUser(res.data.user);
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("token");
		router.push("/");
	};

	const signup = async (email: string, password: string) => {
		const res = await apiCall<APIResponse>("/signup", HTTPVerbs.POST, {
			email,
			password,
		});
		if (res.success) {
			toast.success(res.message);
		} else {
			toast.error(res.message);
		}
	};
	return (
		<AuthContext.Provider value={{ user, login, logout, signup }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};