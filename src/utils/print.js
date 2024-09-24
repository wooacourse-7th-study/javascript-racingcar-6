import { MissionUtils } from "@woowacourse/mission-utils";

export const resultPrint = (getCarsInfo) => {
  const entries = Object.entries(getCarsInfo());
  const result = entries.map(([carName, advanceCount], idx) => {
    const [_, name] = carName.split("-");
    const dash = "-".repeat(advanceCount);

    // 마지막이라면 개행 추가
    if (idx === entries.length - 1) {
      return `${name} : ${dash}\n`;
    }

    return `${name} : ${dash}`;
  });

  MissionUtils.Console.print(result.join("\n"));
};
