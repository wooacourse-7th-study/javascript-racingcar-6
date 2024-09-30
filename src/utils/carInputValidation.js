import { RULES } from "../constants/messages.js";
import { ERROR_MESSAGES } from "../constants/messages.js";

const carInputValidation = (CARS_NAMES) => {
  if (CARS_NAMES.trim() === "") {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.BLANK);
  }

  const CARS = CARS_NAMES.split(",");
  const set = new Set(CARS);

  if (CARS.length !== set.size) {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.DUPLICATE);
  }

  CARS.forEach((CAR) => {
    if (CAR.trim() === "") {
      throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.NO_NAME);
    }
    if (CAR.length > RULES.CAR_MAX_LENGTH) {
      throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.TOO_LONG);
    }
  });
};

export default carInputValidation;
