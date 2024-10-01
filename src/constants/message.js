// 게임 기본 출력 메시지
export const MESSAGES = {
  START_INPUT: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n",
  TRY_INPUT: "시도할 횟수는 몇 회인가요? \n",
  RESULT: "실행 결과",
  WINNER: "최종 우승자 : ",
};

// 게임 내 에러 메시지
export const ERROR_MESSAGES = {
  CAR_LENGTH_LIMIT: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  NO_BLANK: "[ERROR] 빈 값은 입력할 수 없습니다.",
  NOT_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
  NO_UNDER_1: "[ERROR] 1 미만은 입력할 수 없습니다.",
};
