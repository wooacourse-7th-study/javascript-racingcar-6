import { ERROR_MESSAGES } from "../constants/message.js";

export function isPlayerInputValid(input) {
  const players = input.split(",").map((v) => v.trim());

  for (let player of players) {
    if (player.length > 5) throw new Error(ERROR_MESSAGES.LIMIT);
  }

  return players;
}

export function isTrialInputValid(input) {
  if (isNaN(input)) throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  return Number(input);
}
