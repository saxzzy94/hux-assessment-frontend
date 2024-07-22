"use client";
import Link from "next/link";
import Title from "../../component/Title";
import { FormEvent, useCallback, useRef } from "react";
import AuthForm from "../component/authForm";
import { useAuth } from "../../../context/AuthContext";

type Props = {};

const Signup = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const { signup } = useAuth();

	const handleSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();
		const email = emailRef?.current?.value;
		const password = passwordRef?.current?.value;
		if (email && password) {
			signup(email, password)
		}
	}, []);

	return (
		<div className="mx-auto max-w-2xl p-4 md:p-8 bg-white rounded-lg">
			<div className="flex flex-col p-2 md:p-4">
				<Title>Sign up</Title>
				<AuthForm
          emailRef={emailRef}
          passwordRef={passwordRef}
          onSubmit={handleSubmit} btnText={"Signup"}				/>
				<div className="text-gray-600 text-center mt-6">
					Already have an account?{" "}
					<Link
						href="/login"
						className="text-blue-900 hover:underline transition duration-150 ease-in-out"
					>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
