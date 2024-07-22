import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

const Button: React.FC<{
	children: ReactNode;
	className?: string;
}> = ({ children, className }) => {
	return (
		<button
			className={`focus:ring-2 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md sm:text-lg px-5 py-2.5 text-center items-center mb-2 rounded-xl self-end ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
