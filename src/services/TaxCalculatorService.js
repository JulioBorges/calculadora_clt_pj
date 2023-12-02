import { parseCurrency } from './Utils';

export const salarioMinimo = 1320;
export const inssPatronalAliquota = 11 / 100;
export const inssPatronalPisoContribuicao = salarioMinimo * inssPatronalAliquota;
export const descontoPadraoRt = 528;
export const fgtsContribuicao = 8 / 100;
export const fatorR = 28 / 100;

export const irrfBaseCalculoClt = (SalarioBaseClt, InssCltValor, DescontoPadraoRt) => {
    return Math.min(SalarioBaseClt + InssCltValor, SalarioBaseClt - DescontoPadraoRt);
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
  return parseCurrency(irpf * -1);
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
  return parseCurrency(inss * -1);
}

export function calcularDecimoTerceiro(salario) {
  return salario / -12;
}

export function calcularFerias(salario) {
  return salario / 3 / -12;
}

export function calcularFgtsClt(salario, ferias, decimoterceiro) {
  return (salario + (ferias * -1) + (decimoterceiro * -1)) * - fgtsContribuicao;
}