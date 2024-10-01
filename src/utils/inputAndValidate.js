import { MissionUtils } from '@woowacourse/mission-utils'

export const inputCarsNameAndValidate = async () => {
	const userInputCarName = await MissionUtils.Console.readLineAsync('')

	const carsSplit = userInputCarName.split(',')

	// 입력이 빈값을 넣을때 && 자동차 이름 5글자 이상
	carsSplit.forEach(el => {
		if (el.length > 5) {
			throw new Error('[ERROR]')
		}
		if (car.trim().length === 0) {
			throw new Error('[ERROR]')
		}
	})

	// 자동차 이름 중복 확인
	const set = new Set(carsSplit)
	if (carsSplit.length !== set.size) {
		throw new Error('[ERROR]')
	}

	return carsSplit
}

export const inputTryCountAndValidate = async () => {
	const userInputTryCount = await MissionUtils.Console.readLineAsync('')
	//빈값이 들어오는지
	if (userInputTryCount.trim() === '') {
		throw new Error('[ERROR]')
	}

	//숫자인지
	if (isNaN(userInputTryCount)) {
		throw new Error('[ERROR]')
	}

	//시도횟수 0이상 입력 가능
	if (userInputTryCount <= 0) {
		throw new Error('[ERROR]')
	}
	return userInputTryCount
}
