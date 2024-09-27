export function isPlayerInputValid(input) {
  const players = input.split(",").map((v) => v.trim());

  for (let player of players) {
    if (player.length > 5) return false;
  }

  return players;
}

export function isTrialInputValid(input) {
  if (isNaN(input)) return false;
  return Number(input);
}
