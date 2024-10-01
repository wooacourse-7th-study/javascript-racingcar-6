import { MissionUtils } from '@woowacourse/mission-utils'

export const isOverFour = () => {
	const randomNum = MissionUtils.Random.pickNumberInRange(0, 9)
	if (randomNum >= 4) return true
	return false
}
