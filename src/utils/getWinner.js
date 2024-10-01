export const getWinner = carsInfo => {
	let maxLength = 0
	let winnerArr = []

	for (const [carName, carCount] of carsInfo) {
		if (carCount > maxLength) {
			maxLength = carCount
		}
		if (carCount == maxLength) {
			winnerArr.push(carName)
		}
	}
	return winnerArr.join(', ')
}
