import { api } from "./api";
import { Client } from "@/types/client";

export async function getClient(clientId = 1): Promise<Client> {
  const res = await api.get<Client>(`/clients/${clientId}.json`);
  return res.data;
}
