// 기본 출력 메시지
export const MESSAGES = {
  START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  ANSWER_COUNT: "시도할 횟수는 몇 회인가요?",
  RESULT: "실행 결과",
  WINNER: "최종 우승자 : ",
  PROGRESS_BAR: "-",
};

// 규칙
export const RULES = {
  CAR_MAX_LENGTH: 5,
  RANDOM_MIN_NUMBER: 0,
  RANDOM_MAX_NUMBER: 9,
};

//유효성 검사 메시지
export const ERROR_MESSAGES = {
  CAR_ERROR_MESSAGES: {
    TOO_LONG: "[ERROR] 자동차 이름이 너무 깁니다. 5자 이하로 입력해주세요.",
    BLANK: "[ERROR] 입력하지 않았습니다.",
    DUPLICAT: "[ERROR] 자동차 이름이 중복됩니다. 중복되지 않게 입력해주세요.",
    NO_NAME:
      "[ERROR] 중간에 이름이 없는 자동차가 있습니다. 이름을 모두 입력해주세요.",
  },
  COUNT_ERROR_MESSAGES: {
    ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
    NOT_NEGATIVE: "[ERROR] 1이상의 수만 입력 가능합니다.",
  },
};
