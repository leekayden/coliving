import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  fName,
  lName,
  email,
  password,
  isLandlordAccount,
} from "../global/data";
import useUserLocation from "./useUserLocation";

const theme = createTheme();

export default function SignUp() {
  const { countryCode, countryName } = useUserLocation();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <SettingsOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Update Account Settings
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    defaultValue={fName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    defaultValue={lName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled={countryName || countryCode !== "undefined" ? true : true}
                    id="location"
                    label="Location"
                    name="location"
                    autoComplete="location"
                    helperText="Automatically Detected"
                    defaultValue={`${countryName && countryCode ? `${countryName} (${countryCode})` : 'Loading...'}`}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    defaultValue={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    defaultValue={password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled
                    name="account-type"
                    label="Account Type"
                    type="account-type"
                    id="account-type"
                    helperText="You cannot change this setting"
                    defaultValue={isLandlordAccount ? "Landlord" : "Tenant"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        value="allowExtraEmails"
                        color="primary"
                      />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update
              </Button>
            </Box>
          </Box>
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
