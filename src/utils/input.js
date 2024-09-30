import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_RULE, MESSAGE } from "../constants/index.js";

export const carNameInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.START);
    const carNames = userInput.split(",");

    // 자동차 이름 길이 체크 (1 ~ 5)
    const isInvalidCarNameLength = carNames.some(
      (name) => name.length > GAME_RULE.MAX_NAME_LENGTH || name.length === 0
    );

    if (isInvalidCarNameLength) {
      throw new Error(MESSAGE.FIVE_LENGTH_OVER);
    }

    return carNames;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const racingTryCountInput = async () => {
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
