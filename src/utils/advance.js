import { MissionUtils } from "@woowacourse/mission-utils";

export const advanceCars = (carsInfo) => {
  const entires = Object.entries(carsInfo);
  const result = entires.map(([key, value]) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (randomNumber >= 4) {
      return [key, value + 1];
    }

    return [key, value];
  });

  return result;
};
