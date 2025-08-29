// src/services/clients.ts
import { Client } from "@/types/client";
import { MOCK_CLIENT } from "@/utils/mocks/clients_mock";


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getClient(_clientId = 1): Promise<Client> {
  await sleep(300); 
  return MOCK_CLIENT;
}
