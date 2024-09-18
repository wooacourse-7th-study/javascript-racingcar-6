import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn(); // 모의 함수 생성(실제 구현을 지운다.)

  // 모의 함수에 새로운 구현 설정, 비동기 함수(프로미스 반환)로 설정
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift(); // 미리 정의된 입력 값을 순서대로 사용
    return Promise.resolve(input);
  });
};

// pickNumberInRange 호출될 때마다 배열의 값을 순서대로 반환
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn(); // 모의 함수 생성
  numbers.reduce((acc, number) => {
    // 모의 함수가 호출될 때마다 배열의 다음 값을 반환하도록 설정
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print"); // 특정 객체의 메서드를 감시하는 스파이 생성
  logSpy.mockClear(); // 스파이의 모든 정보 초기화
  return logSpy; // 생성하고 초기화한 스파이 반환
};

/*
 포비만 전진했는지 확인하는 테스트
 describe: 테스트 그룹 정의, 중첩 가능(계층적으로 구조화 가능)
 test: 개별 테스트 케이스 정의, 특정 기능이나 동작 검증
 expect: 실제 값과 예샹 값을 비교하는 함수(다양한 Matcher 함수와 사용)
 toBe: 원시 타입의 값이나 객체의 참조를 비교
 toEqual: 객체나 배열의 내용을 깊게 비교
 toBeNull: null인지 확인
 toBeTruthy/toBeFalsy: true/false로 평가되는지 확인
 toContain: 배열이나 문자열에 특정 요소나 문자열이 포함되어 있는지 확인
 toThrow: 함수가 에러(예외)를 던지는지 확인
 toHaveBeenCalledWith: 모의 함수가 특정 인자로 호출되었는지 확인
 stringContaining: 문자열이 특정 부분 문자열을 포함하는지 확인
*/
describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy(); // 스파이 생성

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      // 출력 값의 스파이가 output가 동일한지 체크
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  // test.each: 여러 입력 케이스에 대해 동일한 테스트 반복
  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]"); // 예외 처리가 되어있고 메세지가 [ERROR]로 시작하는지 확인
  });
});
