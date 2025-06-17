export function getRelativeTimeFromNow(timestamp: string | Date): string {
  const now = new Date();
  const time = new Date(timestamp);
  const diffMs = now.getTime() - time.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) return "agora mesmo";
  if (minutes < 60) return `${minutes} min atrás`;
  if (hours < 24) return `${hours} hora${hours > 1 ? "s" : ""} atrás`;
  return `${days} dia${days > 1 ? "s" : ""} atrás`;
}
