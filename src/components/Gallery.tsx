import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Modal from "./Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { PropertyList } from "../global/data";
import NavBar from "./NavBar";
import { isHomeownerAccount } from "../global/data";

const theme = createTheme();

interface Property {
  id: number;
  ownerId: number;
  title: string;
  description: string;
  status: string;
  nationalities: string[];
  route: string;
  price: number;
  whatsappContact: string;
  extraDetails: string[];
  maxPax: number;
  roomFeatures: string[];
  apartmentFeatures: string[];
  commonFacilities: string[];
}

interface GalleryProps {
  data: Property[];
  showNav?: boolean;
}

export default function Gallery({ data, showNav }: GalleryProps) {
  const handleViewClick = (route: string) => {
    window.location.href = `/properties/${route}`;
  };
  const [selectedOption, setSelectedOption] = useState<{ title: string }>({
    title: "", // initial title
  });
  const handleOptionChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: { title: string } | null
  ) => {
    if (newValue) {
      setSelectedOption(newValue);
    }
  };
  const filteredData = selectedOption?.title
    ? data.filter((item) => item.title === selectedOption.title)
    : data;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showNav ? <NavBar isHomeOwner={isHomeownerAccount} /> : null}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            // pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Featured
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Here is a collection of our featured properties...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={PropertyList}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.title && option.description}
                renderInput={(params) => (
                  <TextField {...params} label="Search Properties" />
                )}
              /> */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={data}
                value={selectedOption}
                onChange={handleOptionChange}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Properties"
                    variant="filled"
                    helperText="Search By Property Name"
                  />
                )}
              />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {filteredData.map((data) => (
              <Grid item key={data.title} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    // image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    image={data.img ? data.img : "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
                    alt={data.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.title}
                    </Typography>
                    <Typography>
                      {data.description
                        ? data.description
                        : "No description available"}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      size="large"
                      variant="outlined"
                      onClick={() => handleViewClick(data.route)}
                    >
                      View
                    </Button>
                    <Modal
                      id={data.id}
                      isBookNow={true}
                      modalTitle={data.title}
                      modalTxt={data.description}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
