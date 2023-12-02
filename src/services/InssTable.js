/*
Tabela INSS CLT			
Valor Teto  Alíquota  Parcela a Deduzir   Teto
1.320,00	  7,50%     0,00
2.571,29	  9,00%	    19,80
3.856,94	  12,00%    96,94
7.507,49	  14,00%    174,08	            876,97
*/
export const InssFaixa1Teto = 1320.00;
export const InssFaixa2Teto = 2571.29;
export const InssFaixa3Teto = 3856.94;
export const InssFaixa4Teto = 7507.49;

export const InssFaixa1Aliquota = (7.50 / 100);
export const InssFaixa2Aliquota = (9.00 / 100);
export const InssFaixa3Aliquota = (12.00 / 100);
export const InssFaixa4Aliquota = (14.00 / 100);

function calcularContribuicaoInss(inssFaixaAnteriorTeto, inssFaixaAnteriorAliquota, 
  inssFaixaAtualAliquota, inssFaixaAnteriorParcela) {
  const value = (inssFaixaAnteriorTeto * inssFaixaAtualAliquota) - (inssFaixaAnteriorTeto * inssFaixaAnteriorAliquota) + inssFaixaAnteriorParcela;
  return Number(value);
}

export const InssFaixa1Parcela = 0;
export const InssFaixa2Parcela = calcularContribuicaoInss(InssFaixa1Teto, InssFaixa1Aliquota, InssFaixa2Aliquota, InssFaixa1Parcela);
export const InssFaixa3Parcela = calcularContribuicaoInss(InssFaixa2Teto, InssFaixa2Aliquota, InssFaixa3Aliquota, InssFaixa2Parcela);
export const InssFaixa4Parcela = calcularContribuicaoInss(InssFaixa3Teto, InssFaixa3Aliquota, InssFaixa4Aliquota, InssFaixa3Parcela);
export const InssTetoContribuicao = InssFaixa4Teto * InssFaixa4Aliquota - InssFaixa4Parcela;