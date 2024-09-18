import { MissionUtils } from "@woowacourse/mission-utils";
import { EXECUTION_MESSAGE, WINNER_MESSAGE } from "./constants/index.js";
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

      MissionUtils.Console.print(EXECUTION_MESSAGE);
      for (let i = 0; i < racingCount; i++) {
        advanceCars(getCarsInfo, increment);
        resultPrint(getCarsInfo);
      }

      const winners = getWinners(getCarsInfo);
      MissionUtils.Console.print(WINNER_MESSAGE + winners);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
