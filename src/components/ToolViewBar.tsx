import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import { AppName } from "../global/definitions";

interface ToolViewBarProps {
  title?: string;
}

export default function ToolViewBar({ title }: ToolViewBarProps) {
  const handleClick = () => {
    window.location.href = "/tools";
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="none">
              {AppName}
            </Link>{" "}
            {title ? (
              <Chip color="warning" label={title} onClick={handleClick} />
            ) : null}
            <Typography
              variant="h6"
              component="div"
              sx={{ userSelect: "none" }}
            ></Typography>
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Tools
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
