import { MissionUtils } from "@woowacourse/mission-utils";
import { carNameInput, racingCountInput } from "./utils/index.js";

class App {
  async play() {
    try {
      const carNames = await carNameInput();
      const racingCount = await racingCountInput();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
