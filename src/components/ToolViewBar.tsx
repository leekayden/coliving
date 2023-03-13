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
  showHome?: boolean;
}

export default function ToolViewBar({ title, showHome }: ToolViewBarProps) {
  const handleClick = () => {
    window.location.href = "/tools";
  };
  const handleHomeClick = () => {
    window.location.href = "/";
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
          {showHome ? (
            <Button color="inherit" onClick={handleHomeClick}>
              Home
            </Button>
          ) : null}
          <Button color="inherit" onClick={handleClick}>
            Tools
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
