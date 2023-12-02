import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from "./Copyright";

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', bottom: 0 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Calculadora CLT x PJ
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Desenvolvido por Julio Borges
      </Typography>
      <Copyright />
    </Box>
  );
}

export default Footer;