import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import { PropertyCarouselItems, PropertyCarouselItemsType } from "../global/data";
import "./PropertyCarousel.css";
import { DefaultSettingsT, SettingsT } from "./CarouselSettings";

const SecondExample = () => {
  const [settings] = useState<SettingsT>(DefaultSettingsT);

  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <Carousel className="SecondExample" {...settings}>
        {PropertyCarouselItems.map((item, index) => {
          return <Project item={item} key={index} />;
        })}
      </Carousel>
      <br />
    </div>
  );
};

interface ProjectProps {
  item: PropertyCarouselItemsType;
}

function Project({ item }: ProjectProps) {
  return (
    <Paper
      className="Project"
      style={{
        backgroundColor: item.color,
      }}
      elevation={10}
    >
      <Typography variant="h5">{item.name}</Typography>
      <br />
      <Typography>{item.description}</Typography>

      <Button
        className="CheckButton"
        component="a"
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        Check it out!
      </Button>
    </Paper>
  );
}

export default SecondExample;
