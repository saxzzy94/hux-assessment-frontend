"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Pencil, Trash2, ArrowLeft } from "lucide-react";
import { useContacts } from "../../../context/ContactContext";
import { useAuth } from "../../../context/AuthContext";
import BackButton from "../../component/BackButton";
import Modal from "../../component/Modal";
import Text from "../../component/Text";
import Button from "../../component/Button";

interface ContactPageProps {
	params: { id: string };
}

interface Contact {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	[x: string]: string;
}

export default function ContactPage({ params }: ContactPageProps) {
	const { id } = params;
	const router = useRouter();
	const { user } = useAuth();
	const { contacts, deleteContact } = useContacts();
	const [contact, setContact] = useState<Contact | null>(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const foundContact = contacts.find((c) => c.id === id);
		setContact(foundContact || null);
	}, [id, contacts]);

	const handleDelete = async () => {
        console.log('delete')
		await deleteContact(id);
		setOpen(false);
		router.push("/contacts");
	};

	return (
		<div className="max-w-2xl mx-auto mt-8">
			<BackButton />
			<div className="bg-white shadow-md rounded-lg p-6">
				<div className="flex justify-between items-start mb-6">
					<h1 className="text-3xl font-bold">
						{contact?.firstName} {contact?.lastName}
					</h1>
					<div className="flex space-x-2">
						<Link
							href={`/contacts/${id}/edit`}
							className="text-blue-500 hover:text-blue-700"
						>
							<Pencil size={24} />
						</Link>
						<button
							onClick={() => setOpen(!open)}
							className="text-red-500 hover:text-red-700"
						>
							<Trash2 size={24} />
						</button>
					</div>
				</div>
				<div className="space-y-4">
					<div>
						<h2 className="text-xl font-semibold mb-2">Contact Information</h2>
						<p className="text-gray-700">
							<strong>Phone:</strong> {contact?.phoneNumber}
						</p>
					</div>
				</div>
			</div>
			<Modal title={""} modalOpen={open} setModalOpen={setOpen}>
				<div className="flex flex-col gap-8">
					<Text className="text-xl">
						Are you sure you want to delete this contact?
					</Text>
					<div className="flex gap-2 justify-end">
						<Button
							className="bg-red-900 text-white"
							onClick={() => handleDelete()}
						>
							Yes
						</Button>
						<Button className="bg-black text-white">No</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
}
