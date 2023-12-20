import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { colorBlue, colorRed } from "../constants/styles";
import { formatCurrency, formatPercent } from "../services/Utils";

function ItemCltDetails({ cltDetails }) {
  const totalUserTax = cltDetails.userTax.inss + cltDetails.userTax.irrf;
  const totalBossTax = cltDetails.bossTax.thirteenSalary + cltDetails.bossTax.vacancy + cltDetails.bossTax.fgts;

  return (
    <Grid item key='clt-details' xs={12} sm={6} md={3}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant='h6' component='h3'>
            Detalhamento CLT
          </Typography>

          <Typography alignContent='center' fontSize='small' fontWeight='bold' color='orangered'>
            Seus impostos na CLT
          </Typography>

          <Typography
            align='center'
            color='orangered'
            fontSize='small'
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <span>INSS: {formatCurrency(cltDetails.userTax.inss)}</span>
            <span>IRRF: {formatCurrency(cltDetails.userTax.irrf)}</span>
            <strong>
              Total: {formatCurrency(totalUserTax)} [{formatPercent(cltDetails.userTax.percent)}]
            </strong>
          </Typography>

          <Typography alignContent='center' fontSize='small' color='orangered' fontWeight='bold'>
            Encargos do patrão na CLT
          </Typography>

          <Typography
            align='center'
            color='orangered'
            fontSize='small'
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <span>13º Salário: {formatCurrency(cltDetails.bossTax.thirteenSalary)}</span>
            <span>Férias: {formatCurrency(cltDetails.bossTax.vacancy)}</span>
            <span>FGTS: {formatCurrency(cltDetails.bossTax.fgts)}</span>
            <strong>
              Total: {formatCurrency(totalBossTax)} [{formatPercent(cltDetails.bossTax.percent)}]
            </strong>
          </Typography>

          <Typography align='center' fontSize='large' fontWeight='bold' color='darkslategray'>
            Salário Líquido CLT
          </Typography>

          <Typography align='center' fontSize='large' fontWeight='bold' color='royalblue'>
            {formatCurrency(cltDetails.cltLiquidSalary)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemCltDetails;
