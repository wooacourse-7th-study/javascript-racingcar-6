import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, ADVANCE_NUMBER } from "../constants/index.js";

export const advanceCars = (getCarsInfo, incrementFn) => {
  const carNames = Object.keys(getCarsInfo());

  carNames.forEach((carName) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= ADVANCE_NUMBER) {
      incrementFn(carName);
    }
  });
};
