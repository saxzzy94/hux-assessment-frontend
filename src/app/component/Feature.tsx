import React from "react";
import Title from "./Title";
import Text from "./Text";

type Props = {};

const Feature = (props: Props) => {
	return (
		<section className="mt-20 w-full py-12 bg-gray-100">
			<div className="container mx-auto px-6 max-w-6xl  p-4 sm:px-6 mt-8">
				<Title>Features</Title>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 border-l-2">
						<h3 className="text-xl font-semibold text-blue-600 mb-4">
							Easy Contact Management
						</h3>
						<Text className="text-gray-600">
							Quickly add, edit, and delete contacts with a simple interface.
						</Text>
					</div>
					<div className="p-6 border-l-2">
						<h3 className="text-xl font-semibold text-blue-600 mb-4">
							Secure Storage
						</h3>
						<Text className="text-gray-600">
							Your contacts are securely stored and accessible only to you.
						</Text>
					</div>
					<div className="p-6 border-l-2">
						<h3 className="text-xl font-semibold text-blue-600 mb-4">
							Accessible Anywhere
						</h3>
						<Text className="text-gray-600">
							Access your contacts from any device, anywhere, anytime.
						</Text>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
