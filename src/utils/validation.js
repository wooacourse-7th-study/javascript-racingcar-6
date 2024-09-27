import { ERROR_MESSAGES } from "../constants/message.js";

/**
 * 자동차 이름을 입력했을 때 유효한지 검사합니다.
 * @param {string} input
 * @returns
 */
export function isPlayerInputValid(input) {
  const players = input.split(",").map((v) => v.trim());

  for (let player of players) {
    if (player.length > 5) throw new Error(ERROR_MESSAGES.LIMIT);
  }

  return players;
}

/**
 * 시도할 횟수를 입력할 때 유효한지 검사합니다.
 * @param {string} input
 * @returns
 */
export function isTrialInputValid(input) {
  if (isNaN(input)) throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  return Number(input);
}
