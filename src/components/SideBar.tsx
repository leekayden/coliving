import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AppName } from "../global/definitions";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ margin: "10px", fontSize: "20px", userSelect: "none" }}>
        {AppName}
      </div>
      <Divider />
      <List>
        <Tooltip title="Home" placement="right" arrow>
          <Link style={{ textDecoration: "none" }} color="inherit" href="/">
            <ListItem key="item1" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
        <Tooltip title="Properties" placement="right" arrow>
          <Link
            style={{ textDecoration: "none" }}
            color="inherit"
            href="/"
          >
            <ListItem key="item2" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalMallIcon />
                </ListItemIcon>
                <ListItemText primary="Properties" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
      </List>
      <Divider />
      <List>
        <Tooltip title="Settings" placement="right" arrow>
          <Link
            style={{ textDecoration: "none" }}
            color="inherit"
            href="/settings"
          >
            <ListItem key="item3" disablePadding>
              <ListItemButton disabled>
                <ListItemIcon>
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
        <Tooltip title="About" placement="right" arrow>
          <Link
            style={{ textDecoration: "none" }}
            color="inherit"
            onClick={handleOpen}
          >
            <ListItem key="item4" disablePadding>
              <ListItemButton disabled>
                <ListItemIcon>
                  <InfoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
        <Tooltip title="Help" placement="right" arrow>
          <Link style={{ textDecoration: "none" }} color="inherit" href="/help">
            <ListItem key="item5" disablePadding>
              <ListItemButton disabled>
                <ListItemIcon>
                  <HelpCenterOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              About
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Made with &#9829; & ReactJS by Kayden Lee :)
            </Typography>
          </Box>
        </Modal>
        <Tooltip title="Give Feedback" placement="right" arrow>
          <Link style={{ textDecoration: "none" }} color="inherit" href="/feedback">
            <ListItem key="item5" disablePadding>
              <ListItemButton disabled>
                <ListItemIcon>
                  <FeedbackOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Give Feedback" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
      </List>
      <Divider />
      <List>
        <Tooltip title="Sign Up" placement="right" arrow>
          <Link
            color="inherit"
            href="/signup"
            style={{ textDecoration: "none" }}
          >
            <ListItem key="item1" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentIndIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Up" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
        <Tooltip title="Login" placement="right" arrow>
          <Link
            color="inherit"
            href="/login"
            style={{ textDecoration: "none" }}
          >
            <ListItem key="item2" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon/>
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </Link>
        </Tooltip>
      </List>
      <Divider />
      <Tooltip title="Close" placement="right" arrow>
        <ListItem
          style={{ position: "absolute", bottom: 0 }}
          key={"Close"}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              {" "}
              <ClearIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Close"} />
          </ListItemButton>
        </ListItem>
      </Tooltip>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button variant="contained" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ margin: "10px" }} />
          </Button> */}
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={"Open Menu"}
            style={{ userSelect: "none" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
