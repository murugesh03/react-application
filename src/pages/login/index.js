import React, { useContext } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Stack,
  Box,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress,
  Paper
} from "@mui/material";
import { Visibility, VisibilityOff, Login } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import { setUserDtls } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);

  const handleLogin = () => {
    if (!email || !password) return;
    setLoading(true);
    const loginUserInfo = { email, loginTime: new Date().toLocaleString() };

    setTimeout(() => {
      sessionStorage.setItem("user", JSON.stringify(loginUserInfo));
      dispatch(setUserDtls(loginUserInfo));
      // setUser(loginUserInfo);
      setLoading(false);
      setSnackbar(true);
      navigate("/");
    }, 1500);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ mt: 10, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
          Login
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            variant="contained"
            size="large"
            startIcon={loading ? <CircularProgress size={20} /> : <Login />}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Stack>
      </Paper>

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
      >
        <Alert severity="success" variant="filled">
          Login successful!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
