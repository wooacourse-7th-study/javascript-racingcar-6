import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES, ERROR_MESSAGES } from "../constants/message.js";

/**
 * 자동차 이름을 입력받습니다.
 * @returns {string[]}
 */
export async function playerInput() {
  const input = await MissionUtils.Console.readLineAsync(MESSAGES.START_INPUT);
  const players = input.split(",").map((v) => v.trim());

  for (let player of players) {
    if (player.length > 5) throw new Error(ERROR_MESSAGES.CAR_LENGTH_LIMIT);
    if (player.trim() === "") throw new Error(ERROR_MESSAGES.NO_BLANK);
  }

  return players;
}

/**
 * 시도할 횟수를 입력받습니다.
 * @returns {number}
 */
export async function trialInput() {
  const input = await MissionUtils.Console.readLineAsync(MESSAGES.TRY_INPUT);

  if (isNaN(input)) throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  if (input.trim() === "") throw new Error(ERROR_MESSAGES.NO_BLANK);
  if (input < 1) throw new Error(ERROR_MESSAGES.NO_UNDER_1);

  return Number(input);
}
