import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CreateProperty from "./CreateProperty";
import { PropertyList, isLandlordAccount, ownerId } from "../global/data";
import Error from "./Error";
import { forbiddenErrorMsg } from "../global/definitions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Homeowner() {
  const filteredList = PropertyList.filter((item) => item.ownerId === ownerId);
  const goToProperty = (identifier: any) => {
    window.location.href = `/${identifier}`
  }
  return (
    <div>
      <NavBar isLandlord={isLandlordAccount} />
      <Typography variant="h3" gutterBottom sx={{ padding: "7px" }}>
        <Divider textAlign="center">My Properties</Divider>
        <CreateProperty />
      </Typography>
      <Container sx={{ py: 8, border: 5, borderColor: 'primary.main', borderRadius: 10 }} maxWidth="md">
        <Grid container spacing={4}>
          {filteredList?.map((identifier: any) => (
            <Grid item key={identifier.title} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, padding: "7px" }}>
                <CardActionArea onClick={() => console.log("hello")}>
                  <CardMedia component="img" height="140" image="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {identifier.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {identifier.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    disableElevation
                    color="primary"
                    variant="contained"
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>))}
        </Grid>
      </Container>
    </div>
  );
}

function Guest() {
  return (
    <div>
      <NavBar isLandlord={isLandlordAccount} />
      <Error errorCode={403} message={forbiddenErrorMsg} />
    </div>
  );
}

interface HomeownerViewProps {
  isLandlordAccountArg?: boolean;
}

export default function HomeownerView({ isLandlordAccountArg }: HomeownerViewProps) {
  if (isLandlordAccount || isLandlordAccountArg === true) {
    return <Homeowner />;
  } else {
    return <Guest />;
  }
}
