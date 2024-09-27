import { MissionUtils } from '@woowacourse/mission-utils'

export const printResult = carsInfo => {
	for (const car of carsInfo) {
		MissionUtils.Console.print(`${car[0]} : ${'-'.repeat(car[1])}`)
	}

	MissionUtils.Console.print('\n')
}
