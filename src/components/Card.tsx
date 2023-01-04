import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArticleIcon from "@mui/icons-material/Article";
import Modal from "./Modal";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";

interface CardProps {
  title: string;
  description?: string;
  img?: any;
  propertyStats: string;
  route: string;
}

export default function MediaCard({
  title,
  description,
  img,
  propertyStats,
  route,
}: CardProps) {
  return (
    <Card sx={{ maxWidth: 400, padding: "5px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          img
            ? img
            : "https://mui.com/static/images/cards/contemplative-reptile.jpg"
        }
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}{" "}
          <Chip
            label={propertyStats}
            color={
              propertyStats === "For Rent"
                ? "secondary"
                : propertyStats === "For Sale"
                ? "primary"
                : undefined
            }
          ></Chip>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description ? (
            description
          ) : (
            <strong>No description available</strong>
          )}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="large" startIcon={<ArticleIcon />}>
          <Link href={`/properties/${route}`} color="inherit" underline="none">
            Details
          </Link>
        </Button>
        <Modal isBookNow={true} modalTitle={title} modalTxt={description} />
      </CardActions>
    </Card>
  );
}
