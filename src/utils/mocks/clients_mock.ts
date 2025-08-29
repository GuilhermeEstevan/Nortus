import { Client } from "@/types/client";

export const MOCK_CLIENT: Client = {
  id: 101,
  name: "Ricardo Leite",
  products: [
    { name: "Seguro Automóvel", price: 185.9, status: "ativo" },
    { name: "Seguro Residencial", price: 89.9, status: "ativo" },
    { name: "Seguro Viagem", price: 230.0, status: "inativo" },
  ],
  profileTags: ["Família com filhos", "Profissional liberal", "Investidor"],
  capturedPhrases: [
    "Estava procurando um seguro de vida mais completo para minha família",
    "O valor do meu seguro auto está muito caro comparado com outras empresas",
  ],
  actions: Array.from({ length: 50 }, (_, i) => {
    const day = (i % 9) + 1; // 01..09
    const minute = (i % 60).toString().padStart(2, "0");
    return {
      description: `Ação número ${i}`,
      timestamp: `2025-06-${String(day).padStart(2, "0")}T14:${minute}:00Z`,
    };
  }),
  iaRecommendation: {
    plan: "Seguro de vida individual",
    value: 127.5,
    conversionProbability: 78,
    reasonWhy: [
      "Perfil compatível com produto",
      "Faixa de idade ideal",
      "Demonstra preocupação com a família",
    ],
  },
};
