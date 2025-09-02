export function sortHeroes(arr) {
  return [...arr].sort((a, b) => b.health - a.health);
}