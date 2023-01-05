import { DefaultSettingsT, SettingsT } from "./CarouselSettings";
import Carousel from "react-material-ui-carousel";
import "./Carousel.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Link,
} from "@mui/material";
import { useState } from "react";
import { CarouselItems, CarouselItemsType } from "../global/data";

const Example = () => {
  const [settings] = useState<SettingsT>(DefaultSettingsT);

  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <Typography variant="h4">Popular Properties</Typography>
      <br />
      <Carousel className="Example" {...settings}>
        {CarouselItems.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
              route={item.route}
            />
          );
        })}
      </Carousel>
      <br />
    </div>
  );
};

interface BannerProps {
  item: CarouselItemsType;
  contentPosition: "left" | "right" | "middle";
  length?: number;
  route: string;
}

const Banner = (props: BannerProps) => {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems: number = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          <Link color="inherit" underline="none" href={`/properties/${props.route}`}>View Now</Link>
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={4} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
};

export default Example;
