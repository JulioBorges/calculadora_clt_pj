export const getNewCalculatedData = () => {
  return {
    cltDetails: {
      userTax: {
        inss: 0,
        irrf: 0,
        percent: 0
      },
      bossTax: {
        thirteenSalary: 0,
        vacancy: 0,
        fgts: 0,
        percent: 0
      },
      cltLiquidSalary: 0
    },
    option1: {
      pjSalary: 0,
      pjLiquidSalary: 0,
      tax: {
        das: 0,
        inss: 0,
        irrf: 0,
        totalTax: 0,
        percent: 0,
      },
      percent: 0
    },
    option2: {
      pjSalary: 0,
      pjLiquidSalary: 0,
      tax: {
        das: 0,
        inss: 0,
        irrf: 0,
        totalTax: 0,
        percent: 0
      },
      percent: 0
    },
    salaryDiff: {
      tax: {
        das: 0,
        inss: 0,
        irrf: 0
      },
      pjLiquidSalary: 0
    }
  };
}