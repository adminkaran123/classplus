export const formatCurreny = (num) => {
  return num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const getPercentage = (num1, num2) => {
  return (num2 / num1) * 100;
};
