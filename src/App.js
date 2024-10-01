import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";
import { isPlayerInputValid, isTrialInputValid } from "./utils/validation.js";
import carsMove from "./utils/carsMove.js";
import printResult from "./utils/printResult.js";

class App {
  async play() {
    // 게임 시작
    const playerInput = await MissionUtils.Console.readLineAsync(MESSAGES.START_INPUT);
    const players = isPlayerInputValid(playerInput);
    const playersMap = new Map(players.map((player) => [player, 0]));

    const tryInput = await MissionUtils.Console.readLineAsync(MESSAGES.TRY_INPUT);
    const tryNum = isTrialInputValid(tryInput);

    // 게임 진행
    MissionUtils.Console.print(MESSAGES.RESULT);
    for (let i = 0; i < tryNum; i++) {
      carsMove(playersMap);
      printResult(playersMap);
    }

    // 게임 끝
    const maxLength = Math.max(...Array.from(playersMap.values()));
    const winner = [];
    playersMap.forEach((value, key) => {
      if (value === maxLength) winner.push(key);
    });
    MissionUtils.Console.print(MESSAGES.WINNER + winner.join(", "));
  }
}

export default App;
