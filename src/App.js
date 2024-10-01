import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";
import { playerInput, trialInput } from "./utils/userInput.js";
import carsMove from "./utils/carsMove.js";
import printResult from "./utils/printResult.js";

class App {
  async play() {
    // 게임 시작
    const players = await playerInput();
    const playersMap = new Map(players.map((player) => [player, 0]));
    const tryNum = await trialInput();

    // 게임 진행
    MissionUtils.Console.print(MESSAGES.RESULT);
    for (let i = 0; i < tryNum; i++) {
      carsMove(playersMap);
      printResult(playersMap);
    }

    // 게임 끝
    const maxLength = Math.max(...Array.from(playersMap.values()));
    const winner = [];
    playersMap.forEach((count, player) => {
      if (count === maxLength) winner.push(player);
    });
    MissionUtils.Console.print(MESSAGES.WINNER + winner.join(", "));
  }
}

export default App;
