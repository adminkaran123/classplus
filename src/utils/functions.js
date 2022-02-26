export const formatCurreny = num => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const getPercentage = (num1, num2) => {
  return (num2 / num1) * 100;
};
