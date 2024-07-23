"use client";
import { useState, useEffect, useCallback } from "react";
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

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			updateContact(id, { firstName, lastName, phoneNumber });
			router.push(`/contacts/${id}`);
		},
		[firstName, lastName, phoneNumber, updateContact, router]
	);

	return (
		<div className="max-w-2xl mx-auto mt-8">
			<BackButton />
			<div className="bg-white shadow-md rounded-lg p-6">
				<h1 className="text-3xl font-bold mb-6">Edit Contact</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<Input
						label="First Name"
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						name={""}
					/>

					<Input
						label="Last Name"
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						name={""}
					/>

					<Input
						label="Phone Number"
						type="tel"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						name={""}
					/>

					<Button
						className="bg-blue-900 text-white w-full max-w-md"
						type="submit"
					>
						Save Changes
					</Button>
				</form>
			</div>
		</div>
	);
}
