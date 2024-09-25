const getMaxDistance = (carsInfoEntries) => {
  let maxDistance = 0;

  carsInfoEntries.forEach(([_, distance]) => {
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  });

  return maxDistance;
};

export const getWinners = (getCarsInfo) => {
  const carsInfoEntries = Object.entries(getCarsInfo());
  const maxDistance = getMaxDistance(carsInfoEntries);
  const winners = carsInfoEntries
    .filter(([_, distance]) => distance === maxDistance)
    .map(([carNames]) => carNames.split("-")[1]);

  return winners.join(", ");
};
