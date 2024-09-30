import countInputValidation from "../src/utils/countInputValidation.js";
import { ERROR_MESSAGES } from "../src/constants/messages.js";

//describer 관련 테스트 그룹화
describe("입력 횟수 검증 테스트", () => {
  let validator;

  test("숫자만 입력했을 경우", () => {
    const count = 20;
    expect(() => countInputValidation(count)).not.toThrow();
  });
  test("문자열을 입력했을 경우", () => {
    const count = "soeun";
    expect(() => countInputValidation(count)).toThrow(
      ERROR_MESSAGES.COUNT_ERROR_MESSAGES.ONLY_NUMBER
    );
  });
  test("음수를 입력했을 경우", () => {
    const count = -20;
    expect(() => countInputValidation(count)).toThrow(
      ERROR_MESSAGES.COUNT_ERROR_MESSAGES.NOT_NEGATIVE
    );
  });
  test("0을 입력했을 경우", () => {
    const count = 0;
    expect(() => countInputValidation(count)).toThrow(
      ERROR_MESSAGES.COUNT_ERROR_MESSAGES.NOT_NEGATIVE
    );
  });
});
