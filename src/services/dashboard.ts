import { api } from "./api";
import { KpisResponse, Offer, SegmentsResponse } from "@/types/dashboard";

export async function getKpis(): Promise<KpisResponse> {
  const res = await api.get<KpisResponse>("/dashboard/kpis.json");
  return res.data;
}

export async function getOffers(): Promise<Offer[]> {
  const res = await api.get<Offer[]>("/dashboard/offers.json");
  return res.data;
}

export async function getSegments(): Promise<SegmentsResponse> {
  const res = await api.get<SegmentsResponse>("/dashboard/segments.json");
  return res.data;
}
