import apiClient from "./client";

export interface Feedback {
    _id: string;
    id?: string;
    name: string;
    rating: number;
    feedback: string;
    date?: string;
    createdAt?: string;
}

export interface GetFeedbacksParams {
    page?: number;
    limit?: number;
}

export interface GetFeedbacksResponse {
    data: Feedback[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export const getFeedbacks = async (params: GetFeedbacksParams): Promise<GetFeedbacksResponse> => {
    const response = await apiClient.get<GetFeedbacksResponse>("/api/feedbacks", { params });
    // If the backend returns just an array, we'll wrap it. But usually paginated APIs return an object.
    // Based on the user's request, I'll assume it's structured for pagination.
    return response.data;
};

export interface CreateFeedbackDto {
    name: string;
    rating: number;
    feedback: string;
}

export const createFeedback = async (data: CreateFeedbackDto) => {
    const response = await apiClient.post("/api/feedbacks", data);
    return response.data;
};
