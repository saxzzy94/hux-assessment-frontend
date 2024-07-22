import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const BackButton = (props: Props) => {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className="flex items-center text-blue-900 hover:underline mb-4"
		>
			<ArrowLeft className="mr-2" size={20} />
		</button>
	);
};

export default BackButton;
