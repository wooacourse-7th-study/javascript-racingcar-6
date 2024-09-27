import { MissionUtils } from "@woowacourse/mission-utils";

export default function printResult(playersMap) {
  playersMap.forEach((val, key) => {
    let length = "";
    for (let i = 0; i < val; i++) length += "-";
    MissionUtils.Console.print(`${key} : ${length}`);
  });
  MissionUtils.Console.print("");
}
