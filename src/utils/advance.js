import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } from "../constants/index.js";

export const advanceCars = (carsInfo) => {
  const keys = Object.keys(carsInfo);
  keys.forEach((key) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= 4) {
      carsInfo[key] += 1;
    }
  });
};
