import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import { CardActionArea } from "@mui/material";
import { ToolList } from "../global/data";
import ToolViewBar from "./ToolViewBar";

export default function Tools() {
  return (
    <div>
      <ToolViewBar />
      <Alert severity="warning">
        WARNING: Do not visit any other page other than the math tools page. If
        you visit other pages, we will leak your personal device information.
      </Alert>
      <br />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 8,
          border: 5,
          borderColor: "primary.main",
          borderRadius: 10,
        }}
        maxWidth="md"
      >
        <Grid container spacing={2} justifyContent="center">
          {ToolList.map((data) => (
            <Grid item xs={12} md={6} lg={4} key={data.title}>
              <Link
                color="inherit"
                underline="none"
                href={`/tools/${data.cat}/${data.route}`}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <CardActionArea
                    style={{ height: "100%", alignItems: "flex-start" }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        data.imgUrl
                          ? data.imgUrl
                          : "https://res.cloudinary.com/kayden/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1677907411/icon-image-not-found-free-vector_bdfcct.jpg"
                      }
                      alt={data.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.description
                          ? data.description
                          : "No description available"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
