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
          <Typography gutterBottom variant='h5' component='h2'>
            {title}:
          </Typography>

          <Typography gutterBottom variant='h7' component='h4' alignContent='flex-start'>
            {description}
          </Typography>

          <Typography gutterBottom variant='h7' component='h4'>
            Sal. Bruto PJ:{" "}
            <span style={colorBlue}>
              {formatCurrency(pjOption.pjSalary)} [{formatPercent(pjOption.percent)}]
            </span>
          </Typography>

          <Container sx={{ display: "inline-flex", flexDirection: "row" }}>
            <Typography align='right'>DAS:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(pjOption.tax.das)}
            </Typography>
          </Container>

          <Container sx={{ display: "inline-flex", flexDirection: "row" }}>
            <Typography align='right'>INSS:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(pjOption.tax.inss)}
            </Typography>
          </Container>

          <Container sx={{ display: "inline-flex", flexDirection: "row", paddingTop: "5px" }}>
            <Typography align='right'>IRRF:</Typography>
            <Typography align='left' color='red' sx={{ paddingLeft: 2 }}>
              {formatCurrency(pjOption.tax.irrf)}
            </Typography>
          </Container>

          <br />

          <Container sx={{ display: "inline-flex", flexDirection: "row", paddingTop: "5px" }}>
            <Typography align='right'>
              <span style={colorRed}>
                <strong>
                  Total impostos: {formatCurrency(pjOption.tax.totalTax)} [{formatPercent(pjOption.tax.percent)}]
                </strong>
              </span>
            </Typography>
          </Container>

          <br />

          <Typography gutterBottom variant='h6' component='h4'>
            Sal. Líquido PJ: <span style={colorBlue}>{formatCurrency(pjOption.pjLiquidSalary)}</span>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemPjDetails;
