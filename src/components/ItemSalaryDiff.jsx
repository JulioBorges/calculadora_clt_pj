import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { colorBlue, colorRed } from "../constants/styles";
import { formatCurrency, formatPercent } from "../services/Utils";

function ItemSalaryDiff({ salaryDiff }) {
  return (
    <Grid item key='salary-diff' xs={12} sm={6} md={3}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant='h5' component='h2'>
            Comparação de salários
          </Typography>

          <Typography gutterBottom alignContent='flex-start' fontSize='small'>
            Veja a diferença entre os salários-base entre a opção PJ ou CLT
          </Typography>

          <Typography variant='h7' component='h4'>
            Salário Bruto PJ:
          </Typography>

          <Typography gutterBottom variant='h7' component='h4'>
            <span style={colorBlue}>
              {formatCurrency(salaryDiff.pjSalary)} [{formatPercent(salaryDiff.percent)}]
            </span>
          </Typography>

          <Typography align='center' color='red' fontSize='small' fontWeight='bold'>
            DAS: {formatCurrency(salaryDiff.tax.das)}
          </Typography>

          <Typography align='center' color='red' fontSize='small' fontWeight='bold'>
            INSS: {formatCurrency(salaryDiff.tax.inss)}
          </Typography>

          <Typography gutterBottom align='center' color='red' fontSize='small' fontWeight='bold'>
            IRRF: {formatCurrency(salaryDiff.tax.irrf)}
          </Typography>

          <Typography align='center' fontSize='medium' color='red' fontWeight='bold'>
            Total impostos:
          </Typography>

          <Typography gutterBottom align='center' fontSize='medium'>
            <strong style={colorRed}>
              {formatCurrency(salaryDiff.tax.totalTax)} [{formatPercent(salaryDiff.tax.percent)}]
            </strong>
          </Typography>

          <Typography align='center' fontWeight='bold'>
            Salário Líquido PJ:
          </Typography>

          <Typography align='center' fontWeight='bold' color='red'>
            {formatCurrency(salaryDiff.tax.totalTax)} [{formatPercent(salaryDiff.tax.percent)}]
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemSalaryDiff;
