export const formatZAR = (amount: number): string =>
  'R' + amount.toLocaleString('en-ZA', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export const formatBTU = (btu: number): string =>
  btu.toLocaleString('en-US') + ' BTU';