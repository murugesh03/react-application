import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
  Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import styles from "./style.module.css";
import { styled } from "mui/material/styles"; // Material-UI styled component
// import styled from "styled-components"; // Custom styled component

// const CustomButton = styled.p`
//   background-color: ${(props) => props.bgColor || "#FF5733"};
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #e0435f;
//   }
// `;

const CustomButton = styled(Button)(({ bgColor, theme }) => ({
  backgroundColor: bgColor || "#FF5733",
  color: theme.palette.common.white,
  border: "none",
  padding: theme.spacing(1, 2),
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#e0435f"
  }
}));

const Navbar = () => {
  const navigate = useNavigate();

  //const history= useHistory()
  // history.push('/login')

  const [open, setOpen] = React.useState(false);

  const user = JSON.parse(sessionStorage.getItem("user"));

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = user
    ? [
        { label: "Home", path: "/" },
        { label: "Profile", path: "/profile" }
      ]
    : [{ label: "Home", path: "/" }];

  return (
    <>
      {/* TOP BAR */}
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #6A00F4, #FF4D6D)"
        }}
      >
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            sx={{
              color: "#fff",
              mr: 2,
              display: { md: "none" }
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo / Brand */}
          <Typography
            variant="h6"
            className={styles.navTitle}
            onClick={() => navigate("/")}
          >
            VibeMart
          </Typography>

          {/* DESKTOP MENU */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }
                }}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}

            {user ? (
              <>
                <Avatar
                  sx={{
                    bgcolor: "#FFEB3B",
                    color: "#000",
                    fontWeight: "bold"
                  }}
                >
                  {user.email[0].toUpperCase()}
                </Avatar>

                <Button
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)"
                    }
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <CustomButton
                bgColor="white"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </CustomButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            background: "linear-gradient(180deg, #6A00F4, #FF4D6D)",
            height: "100%",
            color: "#fff"
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
            ))}

            {user ? (
              <ListItem
                button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
              >
                <ListItemText primary="Logout" />
              </ListItem>
            ) : (
              <ListItem
                button
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Login" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
