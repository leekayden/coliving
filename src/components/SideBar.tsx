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
import { AppName } from "../global/definitions";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "@mui/material/Link";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
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

  const items = [
    { route: "", title: "Home", icon: <HomeIcon /> },
    { route: "properties", title: "Properties", icon: <LocalMallIcon /> },
    { divider: true },
    { route: "settings", title: "Settings", icon: <SettingsOutlinedIcon /> },
    { route: "about", title: "About", icon: <InfoOutlinedIcon /> },
    { route: "help", title: "Help", icon: <HelpCenterOutlinedIcon /> },
    { route: "feedback", title: "Feedback", icon: <FeedbackOutlinedIcon /> },
    { divider: true },
    { route: "signup", title: "Sign Up", icon: <AssignmentIndIcon /> },
    { route: "login", title: "Login", icon: <LoginIcon /> },
    { divider: true },
  ];

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
      {items.map((item) => (
        <React.Fragment key={item.title}>
          {item.divider ? (
            <Divider />
          ) : (
            <List>
              <Link
                style={{ textDecoration: "none" }}
                color="inherit"
                href={`/${item.route}`}
                key={item.title}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          )}
        </React.Fragment>
      ))}
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
