import { ConversationMessage } from "@/types/conversation";

export const MOCK_CONVERSATION: ConversationMessage[] = Array.from(
  { length: 20 },
  (_, i) => ({
    from: i % 2 === 0 ? "Ricardo Leite" : "Assistente",
    message: `Mensagem de teste número ${i}`,
    timestamp: `2025-06-12T12:${String(20 + i).padStart(2, "0")}:00Z`,
  })
);
