import { ConversationMessage } from "@/types/conversation";
import { MOCK_CONVERSATION } from "@/utils/mocks/conversations_mock";


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getConversation(): Promise<ConversationMessage[]> {
  await sleep(300);
  return MOCK_CONVERSATION;
}
