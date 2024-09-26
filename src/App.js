import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";

class App {
  async play() {
    // 게임 시작
    const playerInput = await MissionUtils.Console.readLineAsync(MESSAGES.START_INPUT);
    const playersMap = new Map(playerInput.split(",").map((player) => [player, 0]));
  }
}

export default App;
