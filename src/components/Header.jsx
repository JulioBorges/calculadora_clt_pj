import CalculateIcon from '@mui/icons-material/Calculate';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar position="fixed" >
      <Toolbar >
        <CalculateIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Calculadora CLT x PJ
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;