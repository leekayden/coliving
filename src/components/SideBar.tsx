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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <ListItemButton>
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
            // onClick={handleClickOpen}
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
        </Tooltip>
        {/* <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog> */}
        <Tooltip title="Help" placement="right" arrow>
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
        </Tooltip>
        <Tooltip title="Give Feedback" placement="right" arrow>
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
                  <LoginIcon />
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
          {/* <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={"Open Menu"}
            style={{ userSelect: "none" }}
          > */}
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
          {/* </Tooltip> */}

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
