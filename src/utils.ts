export const isValidNumberWithDot = (input: string) => {
  const regex = /^[0-9]*\.?[0-9]*$/;
  return regex.test(input);
};

export const isValidPositiveNumber = (input: string) => {
  const regex = /^[0-9]+$/;
  return regex.test(input);
};
