import { MissionUtils } from "@woowacourse/mission-utils";
import { carNameInput } from "./utils/index.js";

class App {
  async play() {
    try {
      await carNameInput();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
