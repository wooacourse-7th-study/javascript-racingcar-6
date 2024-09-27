import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 0 에서 9까지 숫자 중 무작위로 뽑아 4 이상일 경우 전진합니다.
 * 전진한 차(key)의 value는 +1이 됩니다.
 * @param {Map} playersMap
 */
export default function move(playersMap) {
  playersMap.forEach((val, key) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum < 4) return;
    playersMap.set(key, val + 1);
  });
}
