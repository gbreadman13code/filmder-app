export const formateTime = (mins: number) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins - hours * 60;

  return `${hours} ч. ${minutes} м.`;
};
