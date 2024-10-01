import { MissionUtils } from '@woowacourse/mission-utils'
import { MESSAGE } from './constants/message.js'
import {
	inputCarsNameAndValidate,
	inputTryCountAndValidate,
	printResult,
	racingResult,
	getWinner,
} from './utils/index.js'

class App {
	async play() {
		//자동차 이름 입력
		const carsNameSplit = await inputCarsNameAndValidate()
		const carsInfo = new Map(carsNameSplit.map(carName => [carName, 0]))

		//시도할 횟수 입력
		const tryCount = await inputTryCountAndValidate()

		//레이싱 결과 출력
		MissionUtils.Console.print(MESSAGE.RESULT)

		for (let i = 0; i < tryCount; i++) {
			racingResult(carsInfo)
			printResult(carsInfo)
		}
		const printWinner = getWinner(carsInfo)
		MissionUtils.Console.print(`${MESSAGE.END}${printWinner}`)
	}
}

const app = new App()
app.play()

export default App
