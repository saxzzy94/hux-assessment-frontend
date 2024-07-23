import React, { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
interface Props {
	children: React.ReactNode;
}
const PrivateWrapper: FC<Props> = ({ children }) => {
	const router = useRouter();
	const path = usePathname();
	const { user, loading } = useAuth();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient && !loading && !user) {
			router.push(`/login?path=${path}`);
		}
	}, [isClient, loading, user, router, path]);
	return user ? <>{children}</> : null;
};

export default React.memo(PrivateWrapper);
