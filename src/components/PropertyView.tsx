import NavBar from "./NavBar";
import PropertyTabs from "./PropertyTabs";
import PropertyOverview from "./PropertyOverview";
import Carousel from "./Carousel";
import Grid from "@material-ui/core/Grid";
import { usePageEffect } from "./usePageEffect";
import { AppName } from "../global/definitions";
import { isHomeownerAccount } from "../global/data";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import PropertyModal from "./PropertyModal";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { PropertyList } from "../global/data";
import { Currency } from "../global/definitions";

interface PropertyViewProps {
  id: number;
}

function PropertyView({ id }: PropertyViewProps) {
  usePageEffect({ title: PropertyList[id].title });
  return (
    <div>
      <NavBar isHomeOwner={isHomeownerAccount} />
      <Carousel
        mainTxt={null}
        title={PropertyList[id].title}
        status={PropertyList[id].status}
        noViewBtn
      />
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={6}>
          <PropertyTabs property={PropertyList[id].title} />
        </Grid>
        {/* <PropertyOverview title={PropertyList[id].title} /> */}
        <Card sx={{ maxWidth: 400 }} elevation={0}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Currency}$<strong>{PropertyList[id].price}</strong>/yr
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {PropertyList[id].description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {PropertyList[id].extraDetails.map((item) => (
                <p>*{item}</p>
              ))}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              <WhatsAppIcon fontSize="small" /> WhatsApp Contact:{" "}
              {PropertyList[id].whatsappContact}
            </Typography>
          </CardContent>
          <CardActions>
            <PropertyModal title={PropertyList[id].title} />
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default PropertyView;
