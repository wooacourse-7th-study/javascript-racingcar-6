export default function isPlayerInputValid(input) {
  const players = input.split(",").map((v) => v.trim());

  for (let player of players) {
    if (player.length > 5) return false;
  }

  return players;
}
