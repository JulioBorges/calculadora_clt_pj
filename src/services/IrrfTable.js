/*
Tabela IRPF		
Valor Teto	Alíquota	Parcela a Deduzir
2.112,00	  0,00%	    0,00
2.826,65	  7,50%	    158,40
3.751,05	  15,00%  	370,40
4.664,68	  22,50%	  651,73
            27,50%	  884,96
*/
function calcularImpostoDeRenda(irrfFaixaAnteriorTeto, irrfFaixaAnteriorAliquota,
  irrfFaixaAtualAliquota, irrfFaixaAnteriorParcela) {
  const value = Number((irrfFaixaAnteriorTeto * irrfFaixaAtualAliquota) - (irrfFaixaAnteriorTeto * irrfFaixaAnteriorAliquota) + irrfFaixaAnteriorParcela);
  return value;
}

export const IrrfFaixa1Teto = 2112.00;
export const IrrfFaixa2Teto = 2826.65;
export const IrrfFaixa3Teto = 3751.05;
export const IrrfFaixa4Teto = 4664.68;

export const IrrfFaixa1Aliquota = 0;
export const IrrfFaixa2Aliquota = (7.50 / 100);
export const IrrfFaixa3Aliquota = (15.00 / 100);
export const IrrfFaixa4Aliquota = (22.50 / 100);
export const IrrfFaixa5Aliquota = (27.50 / 100);

export const IrrfFaixa1Parcela = 0;
export const IrrfFaixa2Parcela = calcularImpostoDeRenda(IrrfFaixa1Teto, IrrfFaixa1Aliquota, IrrfFaixa2Aliquota, IrrfFaixa1Parcela);
export const IrrfFaixa3Parcela = calcularImpostoDeRenda(IrrfFaixa2Teto, IrrfFaixa2Aliquota, IrrfFaixa3Aliquota, IrrfFaixa2Parcela);
export const IrrfFaixa4Parcela = calcularImpostoDeRenda(IrrfFaixa3Teto, IrrfFaixa3Aliquota, IrrfFaixa4Aliquota, IrrfFaixa3Parcela);
export const IrrfFaixa5Parcela = calcularImpostoDeRenda(IrrfFaixa4Teto, IrrfFaixa4Aliquota, IrrfFaixa5Aliquota, IrrfFaixa4Parcela);