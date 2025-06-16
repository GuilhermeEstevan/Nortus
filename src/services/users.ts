import { api } from "./api";
import { UserProfile } from "@/types/user";

export async function getUserProfile(userId = 1): Promise<UserProfile> {
  const res = await api.get<UserProfile>(`/users/${userId}.json`);
  return res.data;
}
