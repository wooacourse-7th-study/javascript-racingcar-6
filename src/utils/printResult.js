import { MissionUtils } from '@woowacourse/mission-utils'

export const printResult = carCount => {
	for (const car of carCount) {
		MissionUtils.Console.print(`${car[0]} : ${'-'.repeat(car[1])}`)
	}

	MissionUtils.Console.print('\n')
}
