import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_RULE, MESSAGE } from "../constants/index.js";

export const carNameInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.START);
    const carNames = userInput.split(",");
    const isOverFiveLength = carNames.some((name) => name.length > GAME_RULE.MAX_NAME_LENGTH);

    // 5글자 이상 체크
    if (isOverFiveLength) {
      throw new Error(MESSAGE.FIVE_LENGTH_OVER);
    }

    return carNames;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const racingCountInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.COUNT);

    // 숫자와 공백 체크
    if (isNaN(userInput) || userInput.includes(" ")) {
      throw new Error(MESSAGE.ONLY_NUMBER);
    }

    return userInput;
  } catch (error) {
    throw new Error(error.message);
  }
};
