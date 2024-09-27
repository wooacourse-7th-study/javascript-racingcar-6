import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";
import isPlayerInputValid from "./utils/validation.js";

class App {
  async play() {
    // 게임 시작
    const playerInput = await MissionUtils.Console.readLineAsync(MESSAGES.START_INPUT);
    const players = isPlayerInputValid(playerInput);
    if (!players) throw new Error("[ERROR]");
    const playersMap = new Map(players.map((player) => [player, 0]));
  }
}

export default App;
