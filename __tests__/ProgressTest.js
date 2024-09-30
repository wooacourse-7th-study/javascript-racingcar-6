import progress from "../src/utils/progress.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { RULES } from "../src/constants/messages.js";

const mockRandomNumbers = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

describe("progress 함수 테스트", () => {
  beforeEach(() => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
  });

  test("randomNumber가 MIN_PROGRESS_STEPS 이상일 경우 true를 반환", () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(
      RULES.MIN_PROGRESS_STEPS
    );

    const result = progress();
    expect(result).toBe(true);
  });

  test("randomNumber가 MIN_PROGRESS_STEPS 미만일 경우 false를 반환", () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(
      RULES.MIN_PROGRESS_STEPS - 1
    );

    const result = progress();
    expect(result).toBe(false);
  });
});
