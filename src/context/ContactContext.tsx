"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import apiCall, { HTTPVerbs } from "../helper/apicall";
import { toast } from "react-toastify";

interface APIResponse {
	success: boolean;
	message: string;
	data: any;
}
interface Contact {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	[x: string]: string;
}

interface ContactContextType {
	contacts: Contact[];
	addContact: (contact: Omit<Contact, "id">) => Promise<void>;
	updateContact: (id: string, contact: Partial<Contact>) => Promise<void>;
	deleteContact: (id: string) => Promise<void>;
	refreshContacts: () => Promise<void>;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const { user } = useAuth();

	const fetchContacts = async () => {
		if (!user) return;

		const response = await apiCall<APIResponse>("/contacts");
		if (response.success) {
			setContacts(response.data);
		}
	};

	useEffect(() => {
		fetchContacts();
	}, [user]);

	const addContact = async (contact: Omit<Contact, "id">) => {
		const response = await apiCall<APIResponse>("/contacts", HTTPVerbs.POST, {
			...contact,
		});
		if (response.success) {
			await fetchContacts();
			toast.success(response.message);
		} else {
			toast.error(response.message);
		}
	};

	const updateContact = async (id: string, contact: Partial<Contact>) => {
		const response = await apiCall(`/contacts/${id}`, HTTPVerbs.PATCH, {
			...contact,
		});
		if (response.success) {
			await fetchContacts();
			toast.success(response.message);
		} else {
			toast.error(response.message);
		}
	};

	const deleteContact = async (id: string) => {
		const response = await apiCall(`/contacts/${id}`, HTTPVerbs.DELETE);
		if (response.success) {
			await fetchContacts();
			toast.success(response.message);
		} else {
			toast.error(response.message);
		}
	};

	const refreshContacts = fetchContacts;

	return (
		<ContactContext.Provider
			value={{
				contacts,
				addContact,
				updateContact,
				deleteContact,
				refreshContacts,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export const useContacts = () => {
	const context = useContext(ContactContext);
	if (context === undefined) {
		throw new Error("useContacts must be used within a ContactProvider");
	}
	return context;
};
