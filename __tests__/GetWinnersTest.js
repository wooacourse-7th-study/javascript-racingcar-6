import getWinners from "../src/utils/getWinners";

describe("우승자 구별 함수", () => {
  test("우승자가 한 명일 경우", () => {
    const raceResults = { so: 99, eun: 98, jung: 20 };
    expect(getWinners(raceResults)).toBe("so");
  });

  test("우승자가 여러 명일 경우", () => {
    const raceResults = { so: 99, eun: 99, jung: 20 };
    expect(getWinners(raceResults)).toBe("so, eun");
  });

  test("우승자가 없을 경우 (모든 값이 0일 때)", () => {
    const raceResults = { so: 0, eun: 0, jung: 0 };
    expect(getWinners(raceResults)).toBe("so, eun, jung");
  });
});
