import { isOverFour } from './isOverFour.js'
import { printResult } from './printResult.js'

export const racingResult = (carsNameSplit, tryCount) => {
	let carCount = new Map(carsNameSplit.map(carName => [carName, 0]))

	for (let i = 0; i < tryCount; i++) {
		for (const car of carCount) {
			const isOverFourBoolean = isOverFour()
			if (isOverFourBoolean) {
				carCount.set(car[0], (car[1] += 1))
			}
		}

		printResult(carCount)
	}

	return carCount
}
