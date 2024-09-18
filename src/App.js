import { MissionUtils } from "@woowacourse/mission-utils";
import { EXECUTION_MESSAGE } from "./constants/index.js";
import { carNameInput, racingCountInput, advanceCars, resultPrint } from "./utils/index.js";

class App {
  async play() {
    try {
      const carNames = await carNameInput();
      const racingCount = await racingCountInput();
      const carsInfo = carNames.reduce((acc, cur, idx) => {
        acc[`${idx}-${cur}`] = 0;
        return acc;
      }, {});

      MissionUtils.Console.print(EXECUTION_MESSAGE);
      for (let i = 0; i < racingCount; i++) {
        advanceCars(carsInfo);
        resultPrint(carsInfo);
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
