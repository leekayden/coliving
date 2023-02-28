import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CreateProperty from "./CreateProperty";
import HomeownerCard from "./HomeownerCard";
import { PropertyList, isHomeownerAccount } from "../global/data";
import Error from "./Error";
import { forbiddenErrorMsg } from "../global/definitions";

function Homeowner() {
  let ownerId = 0;
  const filteredList = PropertyList.filter((item) => item.ownerId === ownerId);
  return (
    <div>
      <NavBar isHomeOwner={isHomeownerAccount} />
      <Typography variant="h3" gutterBottom sx={{ padding: "7px" }}>
        <Divider textAlign="left">My Properties</Divider>
        <CreateProperty />
      </Typography>
      {filteredList?.map((indentifier: any) => (
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 345, padding: "7px" }}>
              <CardActionArea>
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
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

function Guest() {
  return (
    <div>
      <NavBar isHomeOwner={isHomeownerAccount} />
      <Error errorCode={403} message={forbiddenErrorMsg} />
    </div>
  );
}

interface HomeownerViewProps {
  isHomeownerAccountArg?: boolean;
}

function HomeownerView({ isHomeownerAccountArg }: HomeownerViewProps) {
  if (isHomeownerAccount || isHomeownerAccountArg === true) {
    return <Homeowner />;
  } else {
    return <Guest />;
  }
}

export default HomeownerView;
