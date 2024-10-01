import { MissionUtils } from '@woowacourse/mission-utils'
import {
	inputCarsNameAndValidate,
	inputTryCountAndValidate,
} from '../src/utils/inputAndValidate'
import { MESSAGE } from '../src/constants/message'

const mockInputs = input => {
	//jest.fn()은 가짜 함수를 만든다. MissionUtils.Console.readLineAsync를 모킹한다.
	MissionUtils.Console.readLineAsync = jest.fn()

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		return Promise.resolve(input)
	})
}

describe('사용자 입력을 테스트', () => {
	//자동차 이름 입력
	test('자동차 이름에 콤마를 통해 배열로 변경', async () => {
		//given
		const input = 'pobi,crong,rupee'
		const answer = ['pobi', 'crong', 'rupee']

		mockInputs(input)

		//when
		const carName = await inputCarsNameAndValidate()

		expect(carName).toStrictEqual(answer)
		expect(carName).not.toBe(answer)
	})
	test('자동차 이름 5글자 초과하는지 체크 후 예외처리', async () => {
		const input = 'pobi,totoro'
		mockInputs(input)

		await expect(inputCarsNameAndValidate()).rejects.toThrow(
			MESSAGE.ERROR.ISOVER_FIVE,
		)
	})
	test('자동차 이름이 빈값인지 체크 후 예외처리', async () => {
		const input = ''
		mockInputs(input)

		await expect(inputCarsNameAndValidate()).rejects.toThrow(
			MESSAGE.ERROR.NONE_VALUE,
		)
	})
	test('자동차 이름이 중복된 값이 있는지 체크 후 예외처리', async () => {
		const input = 'pobi,totor,pobi'
		mockInputs(input)

		await expect(inputCarsNameAndValidate()).rejects.toThrow(
			MESSAGE.ERROR.ISOVERLAP_CARNAME,
		)
	})
	//게임 시도 횟수 입력
	test('게임 시도 횟수 빈값인지 체크 후 예외처리', async () => {
		const input = ''
		mockInputs(input)

		await expect(inputTryCountAndValidate()).rejects.toThrow(
			MESSAGE.ERROR.NONE_VALUE,
		)
	})
	test('게임 시도 횟수가 숫자가 아닌것이 들오면 예외처리', async () => {
		const input = 'dd'
		mockInputs(input)

		await expect(inputTryCountAndValidate()).rejects.toThrow(
			MESSAGE.ERROR.ONLY_NUMBER,
		)
	})
	test('게임 시도 횟수 자연수가 아니면 예외처리', async () => {
		const input = '-1'
		mockInputs(input)

		await expect(inputTryCountAndValidate()).rejects.toThrow(
			MESSAGE.ERROR.ISUNDER_ONE,
		)
	})
})
