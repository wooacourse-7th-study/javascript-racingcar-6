import carInputValidation from "../src/utils/carInputValidation";
import { ERROR_MESSAGES } from "../src/constants/messages";

describe("자동차 이름 검증 테스트", () => {
  let validator;

  test("올바르게 입력했을 경우", () => {
    const cars = "so,eun,jung";
    expect(() => carInputValidation(cars)).not.toThrow();
  });

  test("공백을 입력했을 경우", () => {
    const cars = "   ";
    expect(() => carInputValidation(cars)).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.BLANK
    );
  });

  test("중복된 차가 존재할 경우", () => {
    const cars = "so,so,jung";
    expect(() => carInputValidation(cars)).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.DUPLICATE
    );
  });

  test("공백이 포함된 경우", () => {
    const cars = "so, , jung";
    expect(() => carInputValidation(cars)).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.NO_NAME
    );
  });

  test("자동차 이름을 길게 입력했을 경우", () => {
    const cars = "sososo,do,ss";
    expect(() => carInputValidation(cars)).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.TOO_LONG
    );
  });
});
