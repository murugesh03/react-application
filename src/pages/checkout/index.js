import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  TextField,
  Button,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  Snackbar,
  Alert
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = React.useState("card");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  // Demo values (normally from cart / context)
  const product = {
    title: "Premium Backpack",
    price: 109.95,
    quantity: 2
  };

  const subtotal = product.price * product.quantity;
  const tax = subtotal * 0.1;
  const total = (subtotal + tax).toFixed(2);

  const handlePlaceOrder = () => {
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      {/* HEADER */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #6A00F4, #FF4D6D)",
          color: "#fff",
          py: 5,
          textAlign: "center"
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Checkout
        </Typography>
        <Typography sx={{ opacity: 0.9 }}>
          Almost there! Complete your purchase 🛍️
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* LEFT: ADDRESS & PAYMENT */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Stack spacing={3}>
                {/* ADDRESS */}
                <Typography variant="h6" fontWeight="bold">
                  Shipping Address
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="First Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Address" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="City" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Postal Code" fullWidth />
                  </Grid>
                </Grid>

                <Divider />

                {/* PAYMENT */}
                <Typography variant="h6" fontWeight="bold">
                  Payment Method
                </Typography>

                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Credit / Debit Card"
                  />
                  <FormControlLabel
                    value="upi"
                    control={<Radio />}
                    label="UPI / Wallet"
                  />
                  <FormControlLabel
                    value="cod"
                    control={<Radio />}
                    label="Cash on Delivery"
                  />
                </RadioGroup>

                <Button
                  size="large"
                  variant="contained"
                  startIcon={<ShoppingCartCheckoutIcon />}
                  sx={{
                    mt: 2,
                    background: "linear-gradient(90deg, #6A00F4, #FF4D6D)",
                    fontWeight: "bold"
                  }}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </Stack>
            </Paper>
          </Grid>

          {/* RIGHT: ORDER SUMMARY */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Order Summary
              </Typography>

              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>{product.title}</Typography>
                  <Typography>
                    ${product.price} × {product.quantity}
                  </Typography>
                </Stack>

                <Divider />

                <Stack direction="row" justifyContent="space-between">
                  <Typography>Subtotal</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Typography>Tax (10%)</Typography>
                  <Typography>${tax.toFixed(2)}</Typography>
                </Stack>

                <Divider />

                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight="bold">Total</Typography>
                  <Typography fontWeight="bold">${total}</Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* SUCCESS SNACKBAR */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" variant="filled">
          🎉 Order placed successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckoutPage;
