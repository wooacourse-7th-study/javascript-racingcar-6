import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_RULE } from "../constants/index.js";

export const advanceCars = (getCarsInfo, incrementFn) => {
  const carNames = Object.keys(getCarsInfo());

  carNames.forEach((carName) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      GAME_RULE.MIN_RANDOM_NUMBER,
      GAME_RULE.MAX_RANDOM_NUMBER
    );

    if (randomNumber >= GAME_RULE.ADVANCE_NUMBER) {
      incrementFn(carName);
    }
  });
};
