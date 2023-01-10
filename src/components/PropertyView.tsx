import NavBar from "./NavBar";
import PropertyCarousel from "./PropertyCarousel";
import Typography from "@mui/material/Typography";
import { PropertyList } from "../global/data";
import PropertyTabs from "./PropertyTabs";
import PropertyOverview from "./PropertyOverview";
import Carousel from "./Carousel";

interface PropertyViewProps {
  id: number;
}

function PropertyView({ id }: PropertyViewProps) {
  return (
    <div>
      <NavBar isHomeOwner={false} />
      <Carousel
        mainTxt={null}
        title={PropertyList[id].title}
        status={PropertyList[id].status}
        noViewBtn
      />
      <Typography variant="h3" gutterBottom sx={{ padding: "7px" }}>
        {PropertyList[id].title}
      </Typography>
      <PropertyOverview title={PropertyList[id].title} />
      <PropertyTabs property={PropertyList[id].title} />
    </div>
  );
}

export default PropertyView;
