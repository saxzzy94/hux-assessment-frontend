import Link from "next/link";
import { FC } from "react";
import VideoThumb from "@/public/images/censhot.png";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";

const Hero: FC = () => {
	return (
		<section>
			<div className="max-w-6xl  px-4 sm:px-6 relative">
				<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
					<Title>Welcome to Contact Management App</Title>
					<Text className="text-xl text-gray-600 mb-8">
						This app allows you to manage your contacts easily. Sign up or log
						in to get started!
					</Text>
					<div className="max-w-lg mx-auto sm:max-w-none sm:flex sm:justify-center md:text-lg">
						<Button className="bg-blue-900 text-white">
							<Link href="/signup">Get started</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
