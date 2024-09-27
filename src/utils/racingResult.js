import { isOverFour } from './isOverFour.js'

export const racingResult = carsInfo => {
	for (const car of carsInfo) {
		const isOverFourBoolean = isOverFour()
		if (isOverFourBoolean) {
			carsInfo.set(car[0], (car[1] += 1))
		}
	}

	return carsInfo
}
