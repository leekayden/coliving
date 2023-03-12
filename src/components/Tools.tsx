import NavBar from "./NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import { ToolList } from "../global/data";

export default function Tools() {
  return (
    <div>
      <NavBar />
      <br />
      <Container
        sx={{ py: 8, border: 5, borderColor: "primary.main", borderRadius: 10 }}
        maxWidth="md"
      >
        <Grid container>
          {ToolList.map((data) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={data.id}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                    //   image={data.imageUrl}
                      alt={data.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
