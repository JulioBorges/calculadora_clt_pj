/* Tabela Simples Nacional Anexo III		
Valor Teto (Base Mensal)    Alíquota    Parcela a Deduzir
15.000,00                   6,00%       0,00
30.000,00                   11,20%      780,00
60.000,00                   13,50%      1.470,00
150.000,00                  16,00%      2.970,00
300.000,00                  21,00%      10.470,00
400.000,00                  33,00%      54.000,00
*/

// 1/12 avos mensais para sua remuneração de férias;
// 1/12 avos mensais para sua remuneração de 13º salário;
// 8% sobre a remuneração que seria referente ao FGTS;
// Custos com o pagamento de impostos.

const porcaoferias = salario / 12;
const porcaoDecimoTerceiro = salario / 12;
const fgts = salario * (8/100);
const das = salario * (6/100); // 6% aproximadamente.

export const SnAnexo3_Faixa1Teto = 180000 / 12;
export const SnAnexo3_Faixa2Teto = 360000 / 12;
export const SnAnexo3_Faixa3Teto = 720000 / 12;
export const SnAnexo3_Faixa4Teto = 1800000 / 12;
export const SnAnexo3_Faixa5Teto = 3600000 / 12;
export const SnAnexo3_Faixa6Teto = 4800000 / 12;

export const SnAnexo3_Faixa1Aliquota = (6 / 100);
export const SnAnexo3_Faixa2Aliquota = (11.20 / 100);
export const SnAnexo3_Faixa3Aliquota = (13.50 / 100);
export const SnAnexo3_Faixa4Aliquota = (16.00 / 100);
export const SnAnexo3_Faixa5Aliquota = (21.00 / 100);
export const SnAnexo3_Faixa6Aliquota = (33.00 / 100);

export const SnAnexo3_Faixa1Parcela = 0 / 12;
export const SnAnexo3_Faixa2Parcela = 9360 / 12;
export const SnAnexo3_Faixa3Parcela = 17640 / 12;
export const SnAnexo3_Faixa4Parcela = 35640 / 12;
export const SnAnexo3_Faixa5Parcela = 125640 / 12;
export const SnAnexo3_Faixa6Parcela = 648000 / 12;