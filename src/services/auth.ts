export async function fakeLogin() {
  const res = await fetch("https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/auth/login.json");
  if (!res.ok) throw new Error("Erro ao fazer login");
  return res.json();
}
