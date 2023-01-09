import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { PropertyCarouselItems, PropertyCarouselItemsType } from "../global/data";
import "./PropertyCarousel.css";
import { DefaultSettingsT, SettingsT } from "./CarouselSettings";

const SecondExample = () => {
  const [settings] = useState<SettingsT>(DefaultSettingsT);

  return (
    <div style={{ marginTop: "50px", color: "#494949", justifyContent: "center" }}>
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
      // style={{
      //   backgroundColor: item.color,
      // }}
      elevation={10}
    >
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
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
