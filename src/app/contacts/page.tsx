"use client";
import React from "react";
import PrivateWrapper from "../component/PrivateWrapper";
import Table from "../component/Table";
import Title from "../component/Title";
import Text from "../component/Text";
import Button from "../component/Button";
import Link from "next/link";
import { useContacts } from "../../context/ContactContext";

type Props = {};

const page = (props: Props) => {
	const { contacts, deleteContact } = useContacts();
	console.log(contacts);
	return (
		<PrivateWrapper>
			<div className="flex flex-col px-8">
				<div className="flex justify-between">
					<Title>Contacts</Title>
					<Button className="bg-blue-900 text-white">
						<Link href="/contacts/create">Create Contact</Link>
					</Button>
				</div>
				<Text>Here is the list of all your contacts</Text>
				<Table
					headers={["First Name", "Last Name", "Phone Number"]}
					tableItems={contacts}
				/>
			</div>
		</PrivateWrapper>
	);
};

export default page;
