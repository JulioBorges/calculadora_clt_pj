import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://julioborges.net/'>
        Julio Borges
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
