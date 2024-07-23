"use client";
import React, { useCallback, useRef } from "react";
import PrivateWrapper from "../../component/PrivateWrapper";
import Title from "../../component/Title";
import Button from "../../component/Button";
import Input from "../../component/TextInput";
import { useContacts } from "../../../context/ContactContext";
import { useRouter } from "next/navigation";
import BackButton from "../../component/BackButton";

type Props = {};

const AddContactPage: React.FC<Props> = () => {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const { addContact } = useContacts();

	const handleAddNewContact = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('i got here')
		const firstName = firstNameRef.current?.value;
		const lastName = lastNameRef.current?.value;
		const phoneNumber = phoneRef.current?.value;
		if (firstName && lastName && phoneNumber) {
			addContact({ firstName, lastName, phoneNumber }).then(() =>
				router.push("/contacts")
			);
		}
	};

	return (
		<PrivateWrapper>
			<div className="flex flex-col px-8 gap-8 w-full">
				<BackButton />
				<div className="m-auto">
					<div className="flex justify-between">
						<Title>Add a new contact</Title>
					</div>
					<form onSubmit={handleAddNewContact}>
						<Input
							label="First Name"
							reference={firstNameRef}
							name="firstName"
							type="text"
							placeholder="Enter first name"
							className="w-full"
						/>
						<Input
							label="Last Name"
							reference={lastNameRef}
							name="lastName"
							type="text"
							placeholder="Enter last name"
							className="w-full"
						/>
						<Input
							reference={phoneRef}
							label="Phone Number"
							name="phoneNumber"
							type="text"
							placeholder="Enter phone number"
							className="w-full"
						/>
						<Button
							className="bg-blue-900 text-white w-full mt-4"
							type="submit"
						>
							Create Contact
						</Button>
					</form>
				</div>
			</div>
		</PrivateWrapper>
	);
};

export default AddContactPage;
