import apiClient from "./client";

export interface CreateContactDto {
    name: string;
    email: string;
    phone: string;
    city: string;
}

export const createContact = async (data: CreateContactDto) => {
    const response = await apiClient.post("/api/contacts", data);
    return response.data;
};

export const sendEmail = async (data: CreateContactDto) => {
    const response = await apiClient.post("/api/send-email", data);
    return response.data;
};
