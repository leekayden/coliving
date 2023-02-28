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
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

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
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
          <Link style={{ textDecoration: "none" }} color="inherit" href="/">
            <ListItem key="item2" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalMallIcon />
                </ListItemIcon>
                <ListItemText primary="Properties" />
              </ListItemButton>
            </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
          <Link
            style={{ textDecoration: "none" }}
            color="inherit"
            href="/settings"
          >
            <ListItem key="item3" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            color="inherit"
            href="/about"
          >
            <ListItem key="item4" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} color="inherit" href="/help">
            <ListItem key="item5" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpCenterOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            color="inherit"
            href="/feedback"
          >
            <ListItem key="item5" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedbackOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Give Feedback" />
              </ListItemButton>
            </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
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
          <Link
            color="inherit"
            href="/login"
            style={{ textDecoration: "none" }}
          >
            <ListItem key="item2" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </Link>
      </List>
      <Divider />
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
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
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
