import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, ADVANCE_NUMBER } from "../constants/index.js";

export const advanceCars = (carsInfo) => {
  const keys = Object.keys(carsInfo);
  keys.forEach((key) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= ADVANCE_NUMBER) {
      carsInfo[key] += 1;
    }
  });
};
