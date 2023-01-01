import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";

interface HomeownerCardProps {
  identifier: any;
}

export default function HomeownerCard({ identifier }: HomeownerCardProps) {
  return (
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
  );
}
