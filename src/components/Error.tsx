import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import NavBar from "./NavBar";

export interface ErrorProps {
  errorCode: number;
}

export default function Error(props: ErrorProps) {
  const { errorCode } = props;
  return (
    <div>
      <NavBar isHomeOwner={false} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">{errorCode}</Typography>
              <Typography variant="h6">
                {errorCode === 404
                  ? "The page you’re looking for doesn’t exist."
                  : "An error occured, we will get to it as soon as possible."}
              </Typography>
              <Button variant="contained">
                <Link color="inherit" underline="none" href="/">
                  Back Home
                </Link>
              </Button>
            </Grid>
            <Grid xs={6}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
