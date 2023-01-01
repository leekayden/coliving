import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import PropertyModal from "./PropertyModal";
import Typography from "@mui/material/Typography";
import { PropertyList } from "../global/data";
import { Currency } from "../global/definitions";

interface PropertyOverviewProps {
  title: string;
}

export default function PropertyOverview({ title }: PropertyOverviewProps) {
  const filteredList = PropertyList.find((item) => item.title === title);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Currency}$<strong>{filteredList?.price}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {filteredList?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {filteredList?.extraDetails.map((item) => (
            <p>*{item}</p>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <PropertyModal title={title} />
      </CardActions>
    </Card>
  );
}
