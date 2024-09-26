import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";

const racePrint = (RACE) => {
  Object.entries(RACE).forEach(([CAR, PROGRESS]) => {
    // pobi : -
    const RACEING = MESSAGES.PROGRESS_BAR.repeat(PROGRESS);
    MissionUtils.Console.print(`${CAR} : ${RACEING}`);
  });

  // 마지막 줄바꿈
  MissionUtils.Console.print("\n");
};
export default racePrint;
