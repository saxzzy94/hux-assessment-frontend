"use client";
import Hero from "./component/Hero";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Feature from "./component/Feature";
import Footer from "./component/Footer";

export default function Home() {
	const { user } = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (user) {
			router.push(`/contacts`);
		}
	}, [user]);
	return (
		<div>
			<Hero />
			<Feature />
			<Footer />
		</div>
	);
}
