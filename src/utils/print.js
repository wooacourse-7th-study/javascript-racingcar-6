import { MissionUtils } from "@woowacourse/mission-utils";

export const resultPrint = (carsInfo) => {
  const entries = Object.entries(carsInfo);
  const result = entries.map(([key, value], idx) => {
    const [_, name] = key.split("-");
    const dash = "-".repeat(value);

    if (idx === entries.length - 1) {
      return `${name} : ${dash}\n`;
    }

    return `${name} : ${dash}`;
  });

  MissionUtils.Console.print(result.join("\n"));
};
