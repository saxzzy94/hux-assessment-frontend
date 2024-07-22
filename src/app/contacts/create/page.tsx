"use client";
import React, { useCallback, useRef } from "react";
import PrivateWrapper from "../../component/PrivateWrapper";
import Title from "../../component/Title";
import Button from "../../component/Button";
import Input from "../../component/TextInput";
import { useContacts } from "../../../context/ContactContext";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const { addContact } = useContacts();

	const handleAddNewContact = useCallback(() => {
		const firstName = firstNameRef.current?.value;
		const lastName = lastNameRef.current?.value;
		const phoneNumber = phoneRef.current?.value;
		if (firstName && lastName && phoneNumber) {
			addContact({ firstName, lastName, phoneNumber }).then(() =>
				router.push("/contacts")
			);
		}
	}, []);

	return (
		<PrivateWrapper>
			<div className="flex flex-col px-8 gap-8 w-full">
				<div className="m-auto">
					<div className="flex justify-between">
						<Title>Add a new contact</Title>
					</div>
					<form onSubmit={handleAddNewContact}>
						<Input
							reference={firstNameRef}
							name="firstNaame"
							type="text"
							placeholder="Enter first name"
							className="w-full"
						/>
						<Input
							reference={lastNameRef}
							name="lastName"
							type="text"
							placeholder="Enter last Name"
							className="w-full"
						/>
						<Input
							reference={phoneRef}
							label="Phone Number"
							name="Phone_number"
							type="text"
							placeholder="Enter phone number"
						/>

						<Button className="bg-blue-900 text-white w-full">
							Create Contact
						</Button>
					</form>
				</div>
			</div>
		</PrivateWrapper>
	);
};

export default page;
