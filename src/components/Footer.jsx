import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", bottom: 0 }} component='footer'>
      <Typography variant='h7' align='center' gutterBottom>
        Calculadora CLT x PJ
      </Typography>

      <Typography align='center' fontSize='small' gutterBottom>
        Contribua com este projeto no{" "}
        <Link href='https://github.com/JulioBorges/calculadora_clt_pj'>
          Github <GitHubIcon fontSize='small' />
        </Link>
      </Typography>

      <Typography variant='subtitle1' align='center' component='p'>
        Desenvolvido por Julio Borges
      </Typography>

      <Copyright />

      <Typography variant='subtitle1' align='center' component='p'>
        Se esta calculadora te ajudou de alguma forma, considere me pagar uma coca-cola geladinha
      </Typography>
      <Box
        component='img'
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 120, md: 75 },
          maxWidth: { xs: 120, md: 75 },
        }}
        alt='QR Pix - coca cola.'
        src='qrcode-pix.png'
      />
    </Box>
  );
}

export default Footer;
