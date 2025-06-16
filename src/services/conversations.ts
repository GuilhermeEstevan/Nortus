import { api } from "./api";
import { ConversationMessage } from "@/types/conversation";

export async function getConversation(clientId = 1): Promise<ConversationMessage[]> {
  const res = await api.get<ConversationMessage[]>(`/conversations/${clientId}.json`);
  return res.data;
}
