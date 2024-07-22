"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../context/AuthContext";
import { useContacts } from "../../../../context/ContactContext";
import BackButton from "../../../component/BackButton";
import Input from "../../../component/TextInput";
import Button from "../../../component/Button";

interface EditContactPageProps {
	params: { id: string };
}
interface Contact {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	[x: string]: string;
}
export default function EditContactPage({ params }: EditContactPageProps) {
	const { id } = params;
	const router = useRouter();
	const { user } = useAuth();
	const { contacts, updateContact } = useContacts();
	const [contact, setContact] = useState<Contact | null>(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	useEffect(() => {
		const foundContact = contacts.find((c) => c.id === id);
		if (foundContact) {
			setContact(foundContact);
			setFirstName(foundContact.firstName);
			setLastName(foundContact.lastName);
			setPhoneNumber(foundContact.phoneNumber);
		}
	}, [id, contacts]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await updateContact(id, { firstName, lastName, phoneNumber });
		router.push(`/contacts/${id}`);
	};

	return (
		<div className="max-w-2xl mx-auto mt-8">
			<BackButton />
			<div className="bg-white shadow-md rounded-lg p-6">
				<h1 className="text-3xl font-bold mb-6">Edit Contact</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="firstName"
							className="block text-sm font-medium text-gray-700"
						>
							First Name
						</label>
						<Input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							name={""}
						/>
					</div>
					<div>
						<label
							htmlFor="lastName"
							className="block text-sm font-medium text-gray-700"
						>
							Last Name
						</label>
						<Input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							name={""}
						/>
					</div>
					<div>
						<label
							htmlFor="phoneNumber"
							className="block text-sm font-medium text-gray-700"
						>
							Phone Number
						</label>
						<Input
							type="tel"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							name={""}
						/>
					</div>

					<Button className="bg-blue-900 text-white w-full max-w-md">
						Save Changes
					</Button>
				</form>
			</div>
		</div>
	);
}
