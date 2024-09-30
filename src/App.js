import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";
import carInputValidation from "./utils/carInputValidation.js";
import countInputValidation from "./utils/countInputValidation.js";
import progress from "./utils/progress.js";
import raceResultPrint from "./utils/raceResultPrint.js";
import getWinners from "./utils/getWinners.js";
class App {
  async play() {
    const CARS_NAMES = await MissionUtils.Console.readLineAsync(MESSAGES.START);
    carInputValidation(CARS_NAMES);

    const RACINGTRYCOUNT = await MissionUtils.Console.readLineAsync(
      MESSAGES.ANSWER_COUNT
    );
    countInputValidation(RACINGTRYCOUNT);

    //게임 진행
    MissionUtils.Console.print("\n" + MESSAGES.RESULT);
    const CARS = CARS_NAMES.split(",");

    const RACE = {};
    CARS.forEach((CAR) => {
      RACE[CAR.trim()] = 0;
    });

    //레이싱 결과 출력
    for (let i = 0; i < RACINGTRYCOUNT; i++) {
      const raceEntries = Object.entries(RACE);
      raceEntries.forEach(([CAR, _]) => progress() && RACE[CAR]++);
      raceResultPrint(RACE);
    }
    MissionUtils.Console.print(MESSAGES.WINNER + getWinners(RACE));
  }
}

export default App;
