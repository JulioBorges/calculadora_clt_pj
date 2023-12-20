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
          <Typography gutterBottom variant='h6' component='h3'>
            Comparação de salários
          </Typography>

          <Typography gutterBottom marginBottom='.5rem' fontSize='small'>
            Veja a diferença entre os salários-base entre a opção PJ ou CLT
          </Typography>

          <Typography fontSize='large' fontWeight='bold' color='darkslategray'>
            Salário Bruto PJ:
          </Typography>

          <Typography gutterBottom fontSize='large' fontWeight='bold' color='royalblue'>
            {formatCurrency(salaryDiff.pjSalary)}
          </Typography>

          <Typography
            color='orangered'
            fontSize='small'
            fontWeight='bold'
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <span>DAS: {formatCurrency(salaryDiff.tax.das)}</span>
            <span>INSS: {formatCurrency(salaryDiff.tax.inss)}</span>
            <span>IRRF: {formatCurrency(salaryDiff.tax.irrf)}</span>
          </Typography>

          <Typography fontSize='medium' color='orangered' fontWeight='bold'>
            Total de impostos:
          </Typography>

          <Typography gutterBottom marginBottom='.5rem' fontSize='medium' color='orangered' fontWeight='bold'>
            {formatCurrency(salaryDiff.tax.totalTax)} [{formatPercent(salaryDiff.tax.percent)}]
          </Typography>

          <Typography fontWeight='bold' fontSize='large' color='darkslategray'>
            Salário Líquido PJ:
          </Typography>

          <Typography fontWeight='bold' fontSize='large' color='royalblue'>
            {formatCurrency(salaryDiff.pjLiquidSalary)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemSalaryDiff;
