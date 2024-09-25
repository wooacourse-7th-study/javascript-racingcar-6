import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/constants/messages.js";
class App {
  async play() {
    MissionUtils.Console.print(MESSAGES.START);
  }
}

export default App;
