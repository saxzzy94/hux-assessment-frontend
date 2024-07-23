import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="w-full py-6 bg-white ">
			<div className="container mx-auto text-center text-gray-600">
				&copy; {new Date().getFullYear()} Contacts App. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
