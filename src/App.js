import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/index.js";
import {
  carNameInput,
  racingCountInput,
  advanceCars,
  resultPrint,
  getWinners,
  carsInfoController,
} from "./utils/index.js";

class App {
  async play() {
    try {
      const carNames = await carNameInput();
      const racingCount = await racingCountInput();
      const { getCarsInfo, increment } = carsInfoController(carNames);

      MissionUtils.Console.print(MESSAGE.EXECUTION_RESULT);
      for (let i = 0; i < racingCount; i++) {
        advanceCars(getCarsInfo, increment);
        resultPrint(getCarsInfo);
      }

      const winners = getWinners(getCarsInfo);
      MissionUtils.Console.print(MESSAGE.WINNER + winners);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
