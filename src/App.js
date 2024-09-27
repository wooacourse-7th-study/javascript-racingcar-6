import { MissionUtils } from '@woowacourse/mission-utils'
import { MESSAGE } from './constants/message.js'
import {
	inputCarsNameAndValidate,
	inputTryCountAndValidate,
	racingResult,
	winner,
} from './utils/index.js'

class App {
	async play() {
		//자동차 이름 입력
		MissionUtils.Console.print(MESSAGE.START)
		const carsNameSplit = await inputCarsNameAndValidate()

		//시도할 횟수 입력
		MissionUtils.Console.print(MESSAGE.TRY_COUNT)
		const tryCount = await inputTryCountAndValidate()

		//레이싱 결과 출력
		MissionUtils.Console.print(MESSAGE.RESULT)
		const resultArr = racingResult(carsNameSplit, tryCount)
		const printWinner = winner(resultArr)
		MissionUtils.Console.print(`${MESSAGE.END}${printWinner}`)
	}
}

const app = new App()
app.play()

export default App
