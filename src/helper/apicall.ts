import axios from "axios";
import { toast } from "react-toastify";

export const API_BASE_URL = "http://localhost:5000";

export enum HTTPVerbs {
	POST = "POST",
	PATCH = "PATCH",
	PUT = "PUT",
	GET = "GET",
	DELETE = "DELETE",
}

const getToken = () => {
	const token = localStorage.getItem("token");
	return token
};

const clearUserFromStorage = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
};

async function apiCall<T>(
	path: string,
	method: HTTPVerbs = HTTPVerbs.GET,
	body?: any
) {
	const cleanPath = path.replace(/^\/+/, "");
	const headers: HeadersInit = {
		Authorization: `${getToken()}`,
	};
	const fetchData: any = {
		method,
		url: `${API_BASE_URL}/api/${cleanPath}`,
		headers,
	};

	if (body) {
		fetchData.data = body;
		fetchData.headers = { ...headers, "Content-Type": "application/json" };
	}

	let response;
	try {
		response = await axios(fetchData);
	} catch (error: any) {
		if (error.response && error.response.status === 401) {
			console.log("Unauthorized");
			clearUserFromStorage();
			window.location.href = `/login?path=${window.location.pathname}`;
		}
		return error.response?.data;
	}

	return response.data as Promise<T>;
}

export default apiCall;
