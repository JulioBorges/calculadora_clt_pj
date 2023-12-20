import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { colorBlue, colorRed } from "../constants/styles";
import { formatCurrency, formatPercent } from "../services/Utils";

function ItemPjDetails({ title, description, pjOption }) {
  return (
    <Grid item key='pj-details' xs={12} sm={6} md={3}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h6' component='h3'>
            {title}:
          </Typography>

          <Typography gutterBottom marginBottom='.5rem' fontSize='small'>
            {description}
          </Typography>

          <Typography fontSize='large' fontWeight='bold' color='darkslategray'>
            Salário Bruto PJ:
          </Typography>

          <Typography fontSize='medium' fontWeight='bold' color='royalblue'>
            {formatCurrency(pjOption.pjSalary)}
          </Typography>

          <Typography gutterBottom fontSize='medium' fontWeight='bold' color='royalblue'>
            [{formatPercent(pjOption.percent)}]
          </Typography>

          <Typography
            color='orangered'
            fontSize='small'
            fontWeight='bold'
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <span>DAS: {formatCurrency(pjOption.tax.das)}</span>
            <span>INSS: {formatCurrency(pjOption.tax.inss)}</span>
            <span>IRRF: {formatCurrency(pjOption.tax.irrf)}</span>
          </Typography>

          <Typography fontSize='medium' color='orangered' fontWeight='bold'>
            Total de impostos:
          </Typography>

          <Typography gutterBottom marginBottom='.5rem' fontSize='medium' color='orangered' fontWeight='bold'>
            {formatCurrency(pjOption.tax.totalTax)} [{formatPercent(pjOption.tax.percent)}]
          </Typography>

          <Typography fontWeight='bold' fontSize='large' color='darkslategray'>
            Salário Líquido PJ:
          </Typography>

          <Typography fontWeight='bold' fontSize='large' color='royalblue'>
            {formatCurrency(pjOption.pjLiquidSalary)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemPjDetails;
