import * as React from "react";
import { styled, alpha, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "@mui/material/Link";
import { AppName } from "../global/definitions";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { isHomeownerAccount } from "../global/data";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  transition: "all .5s",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "red",
        },
      },
    },
  },
});

interface NavBarProps {
  appname?: string;
  isHomeOwner?: boolean;
  noNav?: boolean;
}

interface Linkbar {
  path: string;
  title?: string;
  landlord?: boolean;
  disabled?: boolean;
}

export default function NavBar({ appname, isHomeOwner, noNav }: NavBarProps) {
  const navigate = useNavigate();
  const handleLink =
    (path: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate(`/${path}`);
    };
  // const links = ["home", "locations"];
  const links: Linkbar[] = [
    { path: "", title: "Home" },
    { path: "properties" },
    { path: "solutions", title: "Why Us?" },
    { path: "landlords", landlord: true },
    { path: "tenants", disabled: true },
  ];
  const filteredLinks = links.filter((link) => !link.landlord);
  const [theme, setTheme] = React.useState("light");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      style={{ marginTop: "49px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit" disabled>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit" disabled>
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SideBar />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              userSelect: "none",
              fontWeight: 555,
            }}
          >
            <Link href="/" underline="none" color="inherit">
              {appname ? appname : AppName}
            </Link>
            &nbsp;
            {isHomeOwner ? <Chip label="Landlord" color="warning" /> : null}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Properties"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {noNav
            ? null
            : isHomeownerAccount
            ? links.map((link) => (
                <Button
                  key={link.path}
                  variant={link.disabled ? "outlined" : "contained"}
                  onClick={handleLink(link.path.toLowerCase())}
                  disableElevation
                  disabled={link.disabled}
                >
                  {link.title ? link.title : link.path}
                </Button>
              ))
            : filteredLinks.map((link) => (
                <Button
                  key={link.path}
                  variant={link.disabled ? "outlined" : "contained"}
                  onClick={handleLink(link.path.toLowerCase())}
                  disableElevation
                  disabled={link.disabled}
                >
                  {link.title ? link.title : link.path}
                </Button>
              ))}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton size="large" color="inherit" disabled>
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" disabled>
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              disabled={isHomeOwner ? false : true}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
