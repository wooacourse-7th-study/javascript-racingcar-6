import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

const mockInputs = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn(() => {
    const targetInput = inputs.shift();
    return Promise.resolve(targetInput);
  });
};

const getPrintLogSpy = () => {
  // 콘솔 객체의 print 메서드 감시하는 모의 함수 반환
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear(); // 초기화(이전 테스트 결과가 다음 테스트에 영향 X)
  return logSpy;
};

const mockRandomNumbers = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

// 1. 사용자 입력 예외 처리
describe("사용자 입력 예외 처리", () => {
  test("에러 메세지 [ERROR]로 시작하는지 체크", async () => {
    // given(준비)
    const inputs = ["aaaaaa,bb", "1"];
    const numbers = [4, 3];

    mockInputs(inputs);
    mockRandomNumbers(numbers);

    // when(실행)
    const app = new App();

    // then(검증)
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름 쉼표 기준으로 5자 이하인지 체크", async () => {
    // given(준비)
    const inputs = ["aaaaaa,bb", "1"];

    mockInputs(inputs);

    // when(실행)
    const app = new App();

    // then(검증)
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 할 횟수 숫자인지 체크", async () => {
    // given(준비)
    const inputs = ["aa,bb", "a"];

    mockInputs(inputs);

    // when(실행)
    const app = new App();

    // then(검증)
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 할 횟수에 공백이 포함되어있는지 체크", async () => {
    // given(준비)
    const inputs = ["aa,bb", "1 "];

    mockInputs(inputs);

    // when(실행)
    const app = new App();

    // then(검증)
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

// 2. 게임 실행(전진)
describe("전진 조건 체크", () => {
  test("전진 조건에 맞게 전진, 결과 출력", async () => {
    // given(준비)
    const inputs = ["a,b", "2"];
    const outputs = ["\n실행 결과", "a : \nb : -\n", "a : -\nb : -\n", "최종 우승자 : a, b"];
    const randoms = [3, 4, 9, 1];
    const logSpy = getPrintLogSpy();

    mockInputs(inputs);
    mockRandomNumbers([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

// 3. 우승자 출력(1명, 여러명)
describe("우승자 출력", () => {
  test("우승자 1명 출력", async () => {
    // given(준비)
    const inputs = ["a,b", "1"];
    const outputs = ["\n실행 결과", "a : \nb : -\n", "최종 우승자 : b"];
    const randoms = [3, 4];
    const logSpy = getPrintLogSpy();

    mockInputs(inputs);
    mockRandomNumbers([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
