import axios from "axios";

export async function fakeLogin() {
  const res = await axios.get("https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/auth/login.json");
if (res.status !== 200) { 
    console.error(`Erro ao fazer login: Status ${res.status}, Mensagem: ${res.statusText}`);
    throw new Error(`Erro ao fazer login: ${res.statusText || res.status}`);
  }
  return res.data;
}
