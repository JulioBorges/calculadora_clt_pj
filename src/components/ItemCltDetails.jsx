import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { colorBlue, colorRed } from "../constants/styles";
import { formatCurrency, formatPercent } from "../services/Utils";

function ItemCltDetails({ cltDetails }) {
  return (
    <Grid item key='clt-details' xs={12} sm={6} md={3}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='h2'>
            Detalhamento CLT:
          </Typography>

          <Typography gutterBottom variant='h7' component='h5' alignContent='flex-start'>
            Seus impostos na CLT [<span style={colorRed}>{formatPercent(cltDetails.userTax.percent)}</span>]
          </Typography>

          <Container sx={{ display: "inline-flex", flexDirection: "row" }}>
            <Typography align='right'>INSS:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(cltDetails.userTax.inss)}
            </Typography>
          </Container>

          <Container sx={{ display: "inline-flex", flexDirection: "row" }}>
            <Typography align='right'>IRRF:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(cltDetails.userTax.irrf)}
            </Typography>
          </Container>

          <Typography gutterBottom variant='h7' component='h5' alignContent='flex-start'>
            Encargos do patrão na CLT [<span style={colorRed}>{formatPercent(cltDetails.bossTax.percent)}</span>]
          </Typography>

          <Container sx={{ display: "inline-flex", flexDirection: "row" }}>
            <Typography align='right'>13º Salário:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(cltDetails.bossTax.thirteenSalary)}
            </Typography>
          </Container>

          <Container sx={{ display: "inline-flex", flexDirection: "row" }}>
            <Typography align='right'>Férias:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(cltDetails.bossTax.vacancy)}
            </Typography>
          </Container>

          <Container sx={{ display: "inline-flex", flexDirection: "row" }}>
            <Typography align='right'>FGTS:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(cltDetails.bossTax.fgts)}
            </Typography>
          </Container>

          <Typography gutterBottom variant='h6' component='h4'>
            Sal. Líquido CLT: <span style={colorBlue}>{formatCurrency(cltDetails.cltLiquidSalary)}</span>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemCltDetails;
