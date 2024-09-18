import { MissionUtils } from "@woowacourse/mission-utils";

export const resultPrint = (carsInfoArray) => {
  const result = carsInfoArray.map(([key, value], idx) => {
    const [_, name] = key.split("-");
    const dash = "-".repeat(value);

    if (idx === carsInfoArray.length - 1) {
      return `${name} : ${dash}\n`;
    }

    return `${name} : ${dash}`;
  });

  MissionUtils.Console.print(result.join("\n"));
};
