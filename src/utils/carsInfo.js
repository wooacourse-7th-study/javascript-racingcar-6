export const carsInfoController = (carNames) => {
  const carsInfo = carNames.reduce((acc, cur, idx) => {
    acc[`${idx}-${cur}`] = 0;
    return acc;
  }, {});

  const getCarsInfo = () => ({ ...carsInfo });

  const advanceCar = (carName) => {
    carsInfo[carName]++;
  };

  return { getCarsInfo, advanceCar };
};
