import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";
import { isPlayerInputValid, isTrialInputValid } from "./utils/validation.js";
import move from "./utils/move.js";
import printResult from "./utils/printResult.js";

class App {
  async play() {
    // 게임 시작
    const playerInput = await MissionUtils.Console.readLineAsync(MESSAGES.START_INPUT);
    const players = isPlayerInputValid(playerInput);
    if (!players) throw new Error("[ERROR]");
    const playersMap = new Map(players.map((player) => [player, 0]));

    const tryInput = await MissionUtils.Console.readLineAsync(MESSAGES.TRY_INPUT);
    const tryNum = isTrialInputValid(tryInput);
    if (!tryNum) throw new Error("[ERROR]");

    // 게임 진행
    MissionUtils.Console.print(MESSAGES.RESULT);
    for (let i = 0; i < tryNum; i++) {
      move(playersMap);
      printResult(playersMap);
    }
  }
}

export default App;
