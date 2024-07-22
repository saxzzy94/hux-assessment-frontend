"use client";
import Link from "next/link";
import Title from "../../component/Title";
import { FormEvent, useCallback, useEffect, useRef } from "react";
import AuthForm from "../component/authForm";
import { useAuth } from "../../../context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const Login = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const { user, login } = useAuth();
	const path = useSearchParams().get("path");
	const router = useRouter();

	const handleSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();
		const email = emailRef?.current?.value;
		const password = passwordRef?.current?.value;
		if (email && password) {
			login(email, password);
		}
	}, []);

	useEffect(() => {
		if (!user) return;
		router.push(`${path ? path : "/contacts"}`);
	}, [user, path]);

	return (
		<div className="mx-auto max-w-2xl p-4 md:p-8 bg-white rounded-lg">
			<div className="flex flex-col p-2 md:p-4">
				<Title>Login</Title>
				<AuthForm
					emailRef={emailRef}
					passwordRef={passwordRef}
					onSubmit={handleSubmit}
					btnText={"Login"}
				/>
				<div className="text-gray-600 text-center mt-6">
					Don't have an account?{" "}
					<Link
						href="/signup"
						className="text-blue-900 hover:underline transition duration-150 ease-in-out"
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
