const getWinners = (RACE) => {
  const RACE_ARRAY = Object.entries(RACE);
  const maxValue = Math.max(...RACE_ARRAY.map(([key, value]) => value));
  const winners = RACE_ARRAY.filter(([key, value]) => value === maxValue).map(
    ([key, value]) => key
  );
  return winners.join(", ");
};

export default getWinners;
