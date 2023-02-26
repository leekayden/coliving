import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { AppName, footerTitle, footerContent } from "../global/definitions";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", width: "100%", py: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        {footerTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {footerContent}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {`© Copyright `}
        {new Date().getFullYear()}{" "}
        <Link color="inherit" href="/">
          {AppName}
        </Link>
      </Typography>
    </Box>
  );
}
