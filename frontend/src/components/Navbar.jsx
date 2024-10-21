import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./../styles/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const drawer = (
    <Box
      className="navbar-drawer"
      role="presentation"
      onClick={(e) => setDrawerOpen(false)}
      onKeyDown={(e) => setDrawerOpen(false)}
      sx={{
        width: "160px",
        backgroundColor: "#EDEDED",
        height: "100%",
      }}
    >
      <List sx={{ padding: "0px" }}>
        <ListItem
          button
          className="drawer-item"
          onClick={(e) => setDrawerOpen(!drawerOpen)}
          sx={{
            textAlign: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <ListItemText>
            <CloseIcon onClick={(e) => setDrawerOpen(!drawerOpen)} />
          </ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{
            textAlign: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
          className="drawer-item"
          component={Link}
          to="/upload"
        >
          <ListItemText primary="Upload" />
        </ListItem>
        <ListItem
          button
          className="drawer-item"
          component={Link}
          to="/suggestions"
          sx={{
            textAlign: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <ListItemText primary="Suggestions" />
        </ListItem>
        <ListItem
          button
          sx={{
            textAlign: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
          className="drawer-item"
          component={Link}
          to="/contact"
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem
          button
          sx={{
            textAlign: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
          className="drawer-item"
          component={Link}
          to="/about"
        >
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem
          button
          sx={{
            textAlign: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
          className="drawer-item"
          component={Link}
          to="/contact"
        >
          <ListItemText primary="Signup" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="navbar">
      <AppBar
        className="navbar-appbar"
        position="fixed"
        sx={{
          backgroundColor: "#EDEDED",
          boxShadow: "none",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <Toolbar>
          <Button
            className="navbar-logo"
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "flex-start",
              fontWeight: 600,
              color: "#030303",
              padding: "0px",
              ":hover": { cursor: "pointer", background: "none" },
            }}
            component={Link}
            to="/"
          >
            Clamp
          </Button>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={(e) => setDrawerOpen(true)}
                className="navbar-menuicon"
                sx={{ marginLeft: "auto", color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={(e) => setDrawerOpen(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Box
                className="navbar-links"
                sx={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                  color: "#030303",
                }}
              >
                <Button
                  className="navbar-link"
                  sx={{
                    fontFamily: "inter",
                    marginRight: "15px",
                    ":hover": { color: "black", background: "none" },
                  }}
                  component={Link}
                  to="/upload"
                >
                  Upload
                </Button>
                <Button
                  className="navbar-link"
                  sx={{
                    fontFamily: "inter",
                    marginRight: "15px",
                    marginLeft: "15px",
                    ":hover": { color: "black", background: "none" },
                  }}
                  color="inherit"
                  component={Link}
                  to="/suggestions"
                >
                  Suggestions
                </Button>
                <Button
                  className="navbar-link"
                  sx={{
                    fontFamily: "inter",
                    marginLeft: "15px",
                    ":hover": { color: "black", background: "none" },
                  }}
                  color="inherit"
                  component={Link}
                  to="/contact"
                >
                  Contact
                </Button>
              </Box>
              <Box
                className="navbar-auth"
                sx={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "#030303",
                }}
              >
                <Button
                  className="navbar-link"
                  sx={{
                    fontFamily: "inter",
                    ":hover": { color: "black", background: "none" },
                  }}
                  color="inherit"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  className="navbar-signup"
                  sx={{
                    color: "black",
                    border: "2px solid black",
                    fontFamily: "inter",
                    width: "80px",
                    outline: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    height: "40px",
                    boxShadow: "none",
                    ":hover": {
                      color: "white",
                      background: "black",
                    },
                  }}
                  variant="outlined"
                  component={Link}
                  to="/signup"
                >
                  Signup
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
