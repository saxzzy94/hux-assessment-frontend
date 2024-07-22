import React, { FC, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
interface Props {
	children: React.ReactNode;
}
const PrivateWrapper: FC<Props> = ({ children }) => {
	const router = useRouter();
	const path = usePathname();
	const { user } = useAuth();

	useEffect(() => {
		if (!user) router.push(`/login?path=${path}`);
	}, []);

	return user ? <>{children}</> : null;
};

export default React.memo(PrivateWrapper);
