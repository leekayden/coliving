import React from "react";
import NavBar from "./NavBar";
// import PropertyCarousel from "./PropertyCarousel";
// import Typography from "@mui/material/Typography";
import { PropertyList } from "../global/data";
import PropertyTabs from "./PropertyTabs";
import PropertyOverview from "./PropertyOverview";
import Carousel from "./Carousel";
import Grid from "@material-ui/core/Grid";
import { usePageEffect } from "./usePageEffect";
import { AppName } from "../global/definitions";

interface PropertyViewProps {
  id: number;
}

function PropertyView({ id }: PropertyViewProps) {
  usePageEffect({ title: PropertyList[id].title })
  return (
    <div>
      <NavBar isHomeOwner={false} />
      <Carousel
        mainTxt={null}
        title={PropertyList[id].title}
        status={PropertyList[id].status}
        noViewBtn
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <PropertyTabs property={PropertyList[id].title} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PropertyOverview title={PropertyList[id].title} />
        </Grid>
      </Grid>
    </div>
  );
}

export default PropertyView;
