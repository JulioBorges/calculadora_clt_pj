import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { getNewCalculatedData } from '../constants/calculatedData';
import { AppContext } from '../contexts/AppContext';
import { calcularDasPJ, calcularDecimoTerceiro, calcularDescontoInss, calcularFerias, calcularFgtsClt, calcularImpostoDeRenda } from '../services/TaxCalculatorService';

function CltSalary() {
  const { baseSalary, setBaseSalary, setAlreadyCalculated, setCalculatedData } = useContext(AppContext);

  const handleBaseSalaryChange = (e) => {
    setBaseSalary(e.target.value);
    setAlreadyCalculated(false);
  };
  
  const calculateUserTax = (_calculatedData, _baseSalary) => {
    const inss = calcularDescontoInss(_baseSalary);
    const irrf = calcularImpostoDeRenda(_baseSalary, inss * -1);
    
    _calculatedData.cltDetails.userTax.inss = inss;
    _calculatedData.cltDetails.userTax.irrf = irrf;
    _calculatedData.cltDetails.userTax.percent = (inss + irrf) / _baseSalary;

    return _calculatedData;
  };

  const calculateBossTax = (_calculatedData, _baseSalary) => {
    const decimoTerceiro = calcularDecimoTerceiro(_baseSalary);
    const ferias = calcularFerias(_baseSalary);
    const fgtsClt = calcularFgtsClt(_baseSalary, ferias, decimoTerceiro);

    _calculatedData.cltDetails.bossTax.thirteenSalary = decimoTerceiro;
    _calculatedData.cltDetails.bossTax.vacancy = ferias;
    _calculatedData.cltDetails.bossTax.fgts = fgtsClt;
    _calculatedData.cltDetails.bossTax.percent = (decimoTerceiro + ferias + fgtsClt) / _baseSalary;
    
    return _calculatedData;
  };

  const calculateOptionOne = (_calculatedData, _baseSalary) => {
    const percent = _calculatedData.cltDetails.bossTax.percent * -1;
    const salarioPJ = _baseSalary * (1 + percent);
    _calculatedData.option1.pjSalary = salarioPJ;
    _calculatedData.option1.percent = percent;
    _calculatedData.option1.tax.das = calcularDasPJ(salarioPJ);

    return _calculatedData;
  };

  const handleClickCalculate = () => {
    try {
      let calculatedData = getNewCalculatedData();
      const salario = Number(baseSalary);
      
      calculatedData = calculateUserTax(calculatedData, salario)
      calculatedData = calculateBossTax(calculatedData, salario);
      calculatedData = calculateOptionOne(calculatedData, salario);

      setCalculatedData(calculatedData);
      setAlreadyCalculated(true);
    }catch (error) {
      console.error('Erro ao calcular!', error);
      setAlreadyCalculated(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Calculadora CLT x PJ
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Esta calculadora, visa dar uma visão geral sobre a diferença salarial entre um salário CLT
          e um salário PJ.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" paragraph>
          Você só precisa informar um valor: seu Salário Bruto CLT no campo abaixo
          Se você não estiver empregado como CLT, digite a proposta que recebeu ou um salário de referência.
          Isso vai embasar os cálculos e comparações.
        </Typography>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="salary-input">Salário Base</InputLabel>
            <Input
              id="salary-input"
              type="number"
              value={baseSalary}
              startAdornment={<InputAdornment position="start">R$</InputAdornment>}
              onChange={handleBaseSalaryChange} />
          </FormControl>
          <Button variant="contained" onClick={handleClickCalculate}>Calcular</Button>
        </Stack>

      </Container>
    </Box>
  );
}

export default CltSalary;