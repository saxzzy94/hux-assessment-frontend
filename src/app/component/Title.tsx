import { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => (
  <h1 className="text-2xl md:text-4xl font-bold mb-4">{children}</h1>
);

export default Title;
