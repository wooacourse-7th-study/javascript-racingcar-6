import { ERROR_MESSAGES } from "../constants/messages.js";

const countInputValidation = (COUNT) => {
  if (isNaN(COUNT)) {
    throw new Error(ERROR_MESSAGES.COUNT_ERROR_MESSAGES.ONLY_NUMBER);
  }
  if (Number(COUNT) > 1) {
    throw new Error(ERROR_MESSAGES.COUNT_ERROR_MESSAGES.NOT_NEGATIVE);
  }
};

export default countInputValidation;
