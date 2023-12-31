const currencyFormat = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const percentFormat = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatCurrency = (value) => {
  return currencyFormat.format(value);
};

export const formatPercent = (value) => {
  return percentFormat.format(value);
};

export const parseCurrency = (value) => {
  return Number.parseFloat(Number.parseFloat(value).toFixed(2));
};
