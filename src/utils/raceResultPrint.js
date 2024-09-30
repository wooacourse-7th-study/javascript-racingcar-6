import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";

const raceResultPrint = (RACE) => {
  Object.entries(RACE).forEach(([CAR, PROGRESS]) => {
    const RACING = MESSAGES.PROGRESS_BAR.repeat(PROGRESS);
    MissionUtils.Console.print(`${CAR} : ${RACING}`);
  });

  // 마지막 줄바꿈
  MissionUtils.Console.print("\n");
};
export default raceResultPrint;
