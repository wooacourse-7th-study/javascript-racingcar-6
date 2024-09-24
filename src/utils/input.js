import { MissionUtils } from "@woowacourse/mission-utils";
import {
  START_MESSAGE,
  MAX_NAME_LENGTH,
  FIVE_LENGTH_OVER_MESSAGE,
  NUMBER_MESSAGE,
  COUNT_MESSAGE,
} from "../constants/index.js";

export const carNameInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(START_MESSAGE);
    const carNames = userInput.split(",");
    const isOverFiveLength = carNames.some((name) => name.length > MAX_NAME_LENGTH);

    // 5글자 이상 체크
    if (isOverFiveLength) {
      throw new Error(FIVE_LENGTH_OVER_MESSAGE);
    }

    return carNames;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const racingCountInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(COUNT_MESSAGE);

    // 숫자와 공백 체크
    if (isNaN(userInput) || userInput.includes(" ")) {
      throw new Error(NUMBER_MESSAGE);
    }

    return userInput;
  } catch (error) {
    throw new Error(error.message);
  }
};
