import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ItemSalaryDiff() {
  return (
    <Grid item key='first-option' xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Diferença salarial
          </Typography>
          <Typography>
            Aqui, você verifica a diferença entre o salário líquido de CLT e de PJ.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemSalaryDiff;