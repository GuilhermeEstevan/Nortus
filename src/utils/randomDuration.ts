export function randomDuration(minMinutes = 1, maxMinutes = 20): string {
  const minutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}min e ${seconds}seg`;
}