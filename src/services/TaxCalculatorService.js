import { parseCurrency } from "./Utils";

export const salarioMinimo = 1320;
export const inssPatronalAliquota = 11 / 100;
export const inssPatronalPisoContribuicao = salarioMinimo * inssPatronalAliquota;
export const descontoPadraoRt = 528.0;
export const fgtsContribuicao = 8 / 100;
export const fatorR = 28 / 100;
export const SnAnexo3_Faixa1Teto = 180000 / 12;
export const SnAnexo3_Faixa2Teto = 360000 / 12;
export const SnAnexo3_Faixa3Teto = 720000 / 12;
export const SnAnexo3_Faixa4Teto = 1800000 / 12;
export const SnAnexo3_Faixa5Teto = 3600000 / 12;
export const SnAnexo3_Faixa6Teto = 4800000 / 12;

export const SnAnexo3_Faixa1Aliquota = 6 / 100;
export const SnAnexo3_Faixa2Aliquota = 11.2 / 100;
export const SnAnexo3_Faixa3Aliquota = 13.5 / 100;
export const SnAnexo3_Faixa4Aliquota = 16.0 / 100;
export const SnAnexo3_Faixa5Aliquota = 21.0 / 100;
export const SnAnexo3_Faixa6Aliquota = 33.0 / 100;

export const SnAnexo3_Faixa1Parcela = 0 / 12;
export const SnAnexo3_Faixa2Parcela = 9360 / 12;
export const SnAnexo3_Faixa3Parcela = 17640 / 12;
export const SnAnexo3_Faixa4Parcela = 35640 / 12;
export const SnAnexo3_Faixa5Parcela = 125640 / 12;
export const SnAnexo3_Faixa6Parcela = 648000 / 12;

export const irrfBaseCalculoClt = (SalarioBaseClt, InssCltValor) => {
  return Math.min(SalarioBaseClt + InssCltValor, SalarioBaseClt - descontoPadraoRt);
};

export function calcularImpostoDeRenda(SalarioBaseClt, InssCltValor) {
  // Faixa                          Alíquota
  // Até R$ 2.112,00	              Isento
  // De R$ 2.112,01 a R$ 2.826,65   7,5%
  // De R$ 2.826,66 a R$ 3.751,05   15%
  // De R$ 3.751,06 a R$ 4.664,68   22,5%
  // Acima de R$ 4.664,68           27,5%
  const inssDeducted = SalarioBaseClt - InssCltValor;

  let tiers = [0, 2112, 2826.66, 3751.06, 4664.68, inssDeducted];
  let percentages = [0, 7.5, 15, 22.5, 27.5];

  let irpf = 0.0;
  let balance = inssDeducted;
  for (let i = 0; i < percentages.length; i++) {
    let tierRange = tiers[i + 1] - tiers[i];
    let tributable = Math.min(tierRange, balance);
    let tribute = tributable * percentages[i] * 0.01;
    balance -= tributable;
    irpf += tribute;
  }
  return parseCurrency(irpf);
}

export function calcularDescontoInss(salario) {
  // Salário de contribuição	            Alíquota para recolhimento ao INSS 2023
  // Até R$ 1.320,00	                    7,5%
  // De R$ 1.320,01 até R$ 2.571,29	    9%
  // De R$ 2.571,30 até R$ 3.856,94	    12%
  // De R$ 3.856,95 até R$ 7.507,49	    14%
  let tiers = [0, 1320, 2571.29, 3856.94, 7507.49];
  let percentages = [7.5, 9, 12, 14];

  let inss = 0.0;
  let balance = salario;

  for (let i = 0; i < percentages.length; i++) {
    let tierRange = tiers[i + 1] - tiers[i];
    let tributable = Math.min(tierRange, balance);
    let tribute = tributable * percentages[i] * 0.01;
    balance -= tributable;
    inss += tribute;
  }
  return parseCurrency(inss);
}

export function calcularDecimoTerceiro(salario) {
  return salario / 12;
}

export function calcularFerias(salario) {
  return salario / 3 / 12;
}

export function calcularFgtsClt(salario, ferias, decimoterceiro) {
  return (salario + ferias + decimoterceiro) * fgtsContribuicao;
}

export const calcularDasPJ = (salarioPj) => {
  const salario = Number(salarioPj);
  if (salario <= SnAnexo3_Faixa1Teto) {
    return salario * SnAnexo3_Faixa1Aliquota - SnAnexo3_Faixa1Parcela;
  } else if (salario <= SnAnexo3_Faixa2Teto) {
    return salario * SnAnexo3_Faixa2Aliquota - SnAnexo3_Faixa2Parcela;
  } else if (salario <= SnAnexo3_Faixa3Teto) {
    return salario * SnAnexo3_Faixa3Aliquota - SnAnexo3_Faixa3Parcela;
  } else if (salario <= SnAnexo3_Faixa4Teto) {
    return salario * SnAnexo3_Faixa4Aliquota - SnAnexo3_Faixa4Parcela;
  } else if (salario <= SnAnexo3_Faixa5Teto) {
    return salario * SnAnexo3_Faixa5Aliquota - SnAnexo3_Faixa5Parcela;
  }

  return salario * SnAnexo3_Faixa6Aliquota - SnAnexo3_Faixa6Parcela;
};

export const calcularInssPJ = (salario) => {
  const prolaborePJ = calcularProLabore(salario);
  return calcularInss(prolaborePJ);
};

export const IrrfBaseCalculoPj = (proLaborePj, inssPj) => {
  const descInss = proLaborePj - inssPj;
  const descPadrao = proLaborePj - descontoPadraoRt;
  let resultado = Math.min(descInss, descPadrao);
  return resultado;
};

const IrrfFaixa1Teto = 2112.0;
const IrrfFaixa2Teto = 2826.65;
const IrrfFaixa3Teto = 3751.05;
const IrrfFaixa4Teto = 4664.68;
const IrrfFaixa1Aliquota = 0.0;
const IrrfFaixa2Aliquota = 7.5 / 100;
const IrrfFaixa3Aliquota = 15 / 100;
const IrrfFaixa4Aliquota = 22.5 / 100;
const IrrfFaixa5Aliquota = 27.5 / 100;
const IrrfFaixa1Parcela = 0.0;
const IrrfFaixa2Parcela = IrrfFaixa1Teto * IrrfFaixa2Aliquota - IrrfFaixa1Teto * IrrfFaixa1Aliquota + IrrfFaixa1Parcela;
const IrrfFaixa3Parcela = IrrfFaixa2Teto * IrrfFaixa3Aliquota - IrrfFaixa2Teto * IrrfFaixa2Aliquota + IrrfFaixa2Parcela;
const IrrfFaixa4Parcela = IrrfFaixa3Teto * IrrfFaixa4Aliquota - IrrfFaixa3Teto * IrrfFaixa3Aliquota + IrrfFaixa3Parcela;
const IrrfFaixa5Parcela = IrrfFaixa4Teto * IrrfFaixa5Aliquota - IrrfFaixa4Teto * IrrfFaixa4Aliquota + IrrfFaixa4Parcela;

export const calcularProLabore = (salarioPj) =>
  salarioPj * fatorR <= salarioMinimo ? salarioMinimo : salarioPj * fatorR;

export const calcularIrrfPj = (salario, inss) => {
  let prolaborePj = calcularProLabore(salario);
  let irrfBaseCalculo = IrrfBaseCalculoPj(prolaborePj, inss);

  let resultado = 0;
  resultado =
    irrfBaseCalculo <= IrrfFaixa1Teto
      ? irrfBaseCalculo * IrrfFaixa1Aliquota - IrrfFaixa1Parcela
      : irrfBaseCalculo <= IrrfFaixa2Teto
      ? irrfBaseCalculo * IrrfFaixa2Aliquota - IrrfFaixa2Parcela
      : irrfBaseCalculo <= IrrfFaixa3Teto
      ? irrfBaseCalculo * IrrfFaixa3Aliquota - IrrfFaixa3Parcela
      : irrfBaseCalculo <= IrrfFaixa4Teto
      ? irrfBaseCalculo * IrrfFaixa4Aliquota - IrrfFaixa4Parcela
      : irrfBaseCalculo * IrrfFaixa5Aliquota - IrrfFaixa5Parcela;

  return resultado;
};

/*
Tabela INSS CLT			
Valor Teto  Alíquota  Parcela a Deduzir   Teto
1.320,00	  7,50%     0,00
2.571,29	  9,00%	    19,80
3.856,94	  12,00%    96,94
7.507,49	  14,00%    174,08	            876,97
*/
export const InssFaixa1Teto = 1320.0;
export const InssFaixa2Teto = 2571.29;
export const InssFaixa3Teto = 3856.94;
export const InssFaixa4Teto = 7507.49;

export const InssFaixa1Aliquota = 7.5 / 100;
export const InssFaixa2Aliquota = 9.0 / 100;
export const InssFaixa3Aliquota = 12.0 / 100;
export const InssFaixa4Aliquota = 14.0 / 100;
export const FgtsContribuicao = 8 / 100;

export const SalarioMinimo = 1320.0;
export const FatorR = 28 / 100;
export const InssPatronalAliquota = 11 / 100;
export const InssPatronalPisoContribuicao = 145.2;
export const DescontoPadraoRt = 528.0;

function calcularContribuicaoInss(
  inssFaixaAnteriorTeto,
  inssFaixaAnteriorAliquota,
  inssFaixaAtualAliquota,
  inssFaixaAnteriorParcela
) {
  const value =
    inssFaixaAnteriorTeto * inssFaixaAtualAliquota -
    inssFaixaAnteriorTeto * inssFaixaAnteriorAliquota +
    inssFaixaAnteriorParcela;
  return Number(value);
}

export const InssFaixa1Parcela = 0;
export const InssFaixa2Parcela = calcularContribuicaoInss(
  InssFaixa1Teto,
  InssFaixa1Aliquota,
  InssFaixa2Aliquota,
  InssFaixa1Parcela
);
export const InssFaixa3Parcela = calcularContribuicaoInss(
  InssFaixa2Teto,
  InssFaixa2Aliquota,
  InssFaixa3Aliquota,
  InssFaixa2Parcela
);
export const InssFaixa4Parcela = calcularContribuicaoInss(
  InssFaixa3Teto,
  InssFaixa3Aliquota,
  InssFaixa4Aliquota,
  InssFaixa3Parcela
);
export const InssTetoContribuicao = InssFaixa4Teto * InssFaixa4Aliquota - InssFaixa4Parcela;

export const calcularInss = (proLaborePj) =>
  proLaborePj * InssPatronalAliquota > InssTetoContribuicao ? InssTetoContribuicao : proLaborePj * InssPatronalAliquota;
