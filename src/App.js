import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/constants/messages.js";
import carInputValidation from "./utils/carInputValidation.js";
import countInputValidation from "./utils/countInputValidation.js";
class App {
  async play() {
    MissionUtils.Console.print(MESSAGES.START);
    const CARS_NAMES = await MissionUtils.Console.readLineAsync("");
    carInputValidation(CARS_NAMES);

    MissionUtils.Console.print(MESSAGES.ANSWER_COUNT);
    const COUNT = await MissionUtils.Console.readLineAsync("");
    countInputValidation(COUNT);
  }
}

export default App;
