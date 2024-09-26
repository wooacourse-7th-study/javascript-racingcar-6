import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/constants/messages.js";
import carInputValidation from "./utils/carInputValidation.js";
import countInputValidation from "./utils/countInputValidation.js";
import progress from "./utils/progress.js";
import racePrint from "./utils/racePrint.js";
import winner from "./utils/winner.js";
class App {
  async play() {
    MissionUtils.Console.print(MESSAGES.START);
    const CARS_NAMES = await MissionUtils.Console.readLineAsync("");
    carInputValidation(CARS_NAMES);

    MissionUtils.Console.print(MESSAGES.ANSWER_COUNT);
    const COUNT = await MissionUtils.Console.readLineAsync("");
    countInputValidation(COUNT);

    //게임 진행
    MissionUtils.Console.print("\n" + MESSAGES.RESULT);
    const CARS = CARS_NAMES.split(",");

    const RACE = {};
    CARS.forEach((CAR) => {
      RACE[CAR.trim()] = 0;
    });

    //레이싱 결과 출력
    for (let i = 0; i < COUNT; i++) {
      Object.entries(RACE).forEach(([CAR, PROGRESS]) => {
        if (progress()) {
          RACE[CAR]++;
        }
      });

      racePrint(RACE);
    }
    MissionUtils.Console.print(MESSAGES.WINNER + winner(RACE));
  }
}

export default App;
