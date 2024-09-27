import { MissionUtils } from "@woowacourse/mission-utils";

export default function move(playersMap) {
  playersMap.forEach((val, key) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum < 4) return;
    playersMap.set(key, val + 1);
  });
}
