import { MissionUtils } from "@woowacourse/mission-utils";
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

      for (let i = 0; i < racingCount; i++) {
        const carsInfoArray = advanceCars(carsInfo);
        resultPrint(carsInfoArray);
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
