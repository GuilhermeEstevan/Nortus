export interface Client {
  id: number;
  name: string;
  products: Product[];
  profileTags: string[];
  capturedPhrases: string[];
  actions: ClientAction[];
  iaRecommendation: IARecommendation;
}

export interface Product {
  name: string;
  price: number;
  status: string;
  [key: string]: any; 
}

export interface ClientAction {
  description: string;
  timestamp: string;
}

export interface IARecommendation {
  plan: string;
  value: number;
  conversionProbability: number;
  reasonWhy: string[];
}
