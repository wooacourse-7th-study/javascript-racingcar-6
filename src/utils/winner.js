export const winner = resultArr => {
	let maxLength = 0
	let winnerArr = []
	for (const car of resultArr) {
		if (car[1] > maxLength) {
			maxLength = car[1]
		}
	}
	for (const car of resultArr) {
		if (car[1] == maxLength) {
			winnerArr.push(car[0])
		}
	}
	return winnerArr.join(', ')
}
