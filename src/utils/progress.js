import { MissionUtils } from "@woowacourse/mission-utils";
import { RULES } from "../constants/messages.js";

const progress = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    RULES.RANDOM_MIN_NUMBER,
    RULES.RANDOM_MAX_NUMBER
  );
  if (randomNumber >= RULES.MIN_PROGRESS_STEPS) {
    return true;
  }
  return false;
};

export default progress;
