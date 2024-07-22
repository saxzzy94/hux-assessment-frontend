import { FC } from "react";

interface TextProps {
	children: React.ReactNode;
	className?: string;
}

const Text: FC<TextProps> = ({ children, className }) => (
	<p className={`text-sm md:text-md ${className || ""}`}>{children}</p>
);

export default Text;
