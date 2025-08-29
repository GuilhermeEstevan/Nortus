// import { api } from "./api";
import { KpisResponse, Offer, SegmentsResponse } from "@/types/dashboard";

import { MOCK_KPIS } from "@/utils/mocks/kpis_mock";
import { MOCK_OFFERS } from "@/utils/mocks/offers_mock";
import { MOCK_SEGMENTS } from "@/utils/mocks/segments_mock";


const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getKpis(): Promise<KpisResponse> {
  await sleep(300); 
  return MOCK_KPIS;
}

export async function getOffers(): Promise<Offer[]> {
  await sleep(300);
  return MOCK_OFFERS;
}

export async function getSegments(): Promise<SegmentsResponse> {
  await sleep(300);
  return MOCK_SEGMENTS;
}