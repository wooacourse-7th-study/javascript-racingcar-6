import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 매 시도마다 실행 결과를 출력합니다.
 * playersMap의 key(차 이름)가 전진한 만큼 (value) '-'를 출력합니다.
 * @param {Map} playersMap
 */
export default function printResult(playersMap) {
  playersMap.forEach((val, key) => {
    let length = "";
    for (let i = 0; i < val; i++) length += "-";
    MissionUtils.Console.print(`${key} : ${length}`);
  });
  MissionUtils.Console.print("");
}
