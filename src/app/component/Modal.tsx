import { X } from "lucide-react";
import React, { FC, useEffect, useState } from "react";

type Props = {
	title: string;
	children: React.ReactNode;
	modalOpen: boolean;
	setModalOpen: (value: boolean) => void;
};

const Modal: FC<Props> = ({ title, children, modalOpen, setModalOpen }) => {
	const [hidden, setHidden] = useState("hidden");
	useEffect(() => {
		setHidden(modalOpen ? "" : "hidden");
	}, [modalOpen]);

	const handleClose = () => {
		setHidden("hidden");
		setModalOpen(false);
	};
	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] bg-gray-100/[.5] max-h-full ${hidden}`}
		>
			<div className="mx-auto mt-20 w-auto max-w-2xl max-h-full min-h-full">
				<div className="relative bg-white rounded-lg shadow">
					<div className="flex items-start justify-between p-4 border-b rounded-t">
						<h3 className="text-xl font-semibold text-gray-900">{title}</h3>
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md p-1.5 ml-auto inline-flex items-center"
							data-modal-hide="defaultModal"
							onClick={handleClose}
						>
							<X />
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<div className="px-6 py-8 flex flex-col">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
