import { MissionUtils } from "@woowacourse/mission-utils";

export const resultPrint = (getCarsInfo) => {
  const entries = Object.entries(getCarsInfo());
  const result = entries.map(([carName, advanceCount]) => {
    const [_, name] = carName.split("-");
    const dash = "-".repeat(advanceCount);

    return `${name} : ${dash}`;
  });

  MissionUtils.Console.print(result.join("\n") + "\n");
};
