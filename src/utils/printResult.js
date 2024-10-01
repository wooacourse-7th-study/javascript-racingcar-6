import { MissionUtils } from '@woowacourse/mission-utils'

export const printResult = carsInfo => {
	for (const [carName, carCount] of carsInfo) {
		MissionUtils.Console.print(`${carName} : ${'-'.repeat(carCount)}`)
	}

	MissionUtils.Console.print('\n')
}
