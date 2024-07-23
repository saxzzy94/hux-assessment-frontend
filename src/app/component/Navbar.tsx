"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";

const Navbar: React.FC = () => {
	const { user, logout } = useAuth();

	return (
		<nav className="text-white p-4 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold text-black">
					Contact App
				</Link>
				<div>
					{user ? (
						<>
							<Link
								href="/contacts"
								className="mr-6 text-black hover:text-blue-400 hover:underline"
							>
								Contacts
							</Link>
							<Button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
								Logout
							</Button>
						</>
					) : (
						<>
							<Link
								href="/login"
								className="mr-6 text-black hover:text-blue-400 hover:underline"
							>
								Login
							</Link>
							<Link href="/signup" className="bg-blue-900 px-4 py-2 rounded">
								Sign up
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
