import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
  Stack,
  Grid,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip
} from "@mui/material";
import {
  Logout,
  Email,
  Schedule,
  Security,
  Settings,
  VerifiedUser
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  // const { user: loginUser } = useContext(UserContext);

  const loginUser = useSelector((state) => state.userInfo.userDtls);

  console.log("Logged in user from context:", loginUser);
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f4f4" }}>
      {/* HEADER */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #6A00F4, #FF4D6D)",
          color: "#fff",
          px: 4,
          py: 5
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            sx={{
              width: 90,
              height: 90,
              bgcolor: "#FFEB3B",
              color: "#000",
              fontSize: 36,
              fontWeight: "bold"
            }}
          >
            {user.email[0].toUpperCase()}
          </Avatar>

          <Box>
            <Typography variant="h5" fontWeight="bold">
              Welcome back 👋
            </Typography>
            <Typography>{user.email}</Typography>

            <Chip
              icon={<VerifiedUser />}
              label="Active Account"
              sx={{
                mt: 1,
                bgcolor: "rgba(255,255,255,0.25)",
                color: "#fff"
              }}
            />
          </Box>
        </Stack>
      </Box>

      {/* BODY */}
      <Grid container>
        {/* LEFT SIDEBAR */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            background: "linear-gradient(180deg, #6A00F4, #FF4D6D)",
            color: "#fff",
            minHeight: "calc(100vh - 180px)"
          }}
        >
          <List>
            <ListItem>
              <ListItemIcon sx={{ color: "#fff" }}>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Account Details" />
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "#fff" }}>
                <Security />
              </ListItemIcon>
              <ListItemText primary="Security" />
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "#fff" }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Preferences" />
            </ListItem>
          </List>
        </Grid>

        {/* MAIN CONTENT */}
        <Grid item xs={12} md={9} sx={{ p: 4 }}>
          {/* ACCOUNT INFO */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Account Information
          </Typography>

          <Stack spacing={2} mb={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Email color="primary" />
              <Typography>Email: {user.email}</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Schedule color="primary" />
              <Typography>Last Login: {user.loginTime}</Typography>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 4 }} />

          {/* SECURITY */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Security
          </Typography>

          <Stack spacing={2} mb={4}>
            <Typography>Password protected login</Typography>
            <Chip label="Local Storage Auth" color="primary" size="small" />
          </Stack>

          <Divider sx={{ mb: 4 }} />

          {/* PREFERENCES */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Preferences
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Typography>Dark Mode (UI Demo)</Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Stack>

          <Divider sx={{ mb: 4 }} />

          {/* ACTIONS */}
          <Button color="error" startIcon={<Logout />} onClick={handleLogout}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
