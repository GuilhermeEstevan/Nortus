export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

export function formatCompactPrice(value: number): string {
  if (value >= 1000) {
    const compactValue = (value / 1000).toFixed(1).replace(".", ",");
    return `R$ ${compactValue}k`;
  }

  // Caso o valor seja menor que mil, retorna normalmente
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
