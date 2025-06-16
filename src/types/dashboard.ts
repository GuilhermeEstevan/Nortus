export interface KpisResponse {
  arpu: number;
  conversion: number;
  retention: number;
  churn: number;
  arpuTrend: number[];
  conversionTrend: number[];
  labels: string[];
}

export interface Offer {
  name: string;
  conversion: number;
  revenue: number;
  feedback: number;
}

export interface Segment {
  label: string;
  value: number;
}

export interface SegmentsResponse {
  segments: Segment[];
}
