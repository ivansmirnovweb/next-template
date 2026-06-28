import { api } from "@/api/client";
import { Message } from "@/types/message";

export const getMessages = async () => api.get<Message[]>("/message");

export const postMessage = async (body: Pick<Message, "text">) =>
  api.post<Message>("/message", body);
