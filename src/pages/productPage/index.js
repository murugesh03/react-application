import axios from "axios";
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Rating,
  Divider,
  Chip,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  Skeleton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { UserContext } from "../../context/UserContext";

/* -----------------------------
   Skeleton Loader
-------------------------------- */
const ProductSkeleton = () => {
  return (
    <Box sx={{ bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Skeleton
              variant="rectangular"
              height={420}
              sx={{ borderRadius: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Skeleton height={40} width="80%" />
              <Skeleton width="40%" />
              <Skeleton height={28} width={120} />

              <Divider />

              <Skeleton height={50} width="30%" />
              <Skeleton width="60%" />

              <Divider />

              <Skeleton height={80} />

              <Stack direction="row" spacing={2}>
                <Skeleton height={40} width={120} />
                <Skeleton height={40} width={120} />
              </Stack>

              <Stack direction="row" spacing={2}>
                <Skeleton height={48} width="100%" />
                <Skeleton height={48} width="100%" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

/* -----------------------------
   Product Page
-------------------------------- */
const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { user: loginUser } = useContext(UserContext);
  console.log("Logged in user from context:", loginUser);
  const [product, setProduct] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  React.useEffect(() => {
    const getProductDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product details", err);
      } finally {
        setLoading(false);
      }
    };
    getProductDetails();
  }, [productId]);

  if (loading) return <ProductSkeleton />;

  if (!product) {
    return (
      <Typography align="center" color="error">
        Product not found
      </Typography>
    );
  }

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <Box sx={{ bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      {/* HERO HEADER */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #6A00F4, #FF4D6D)",
          color: "#fff",
          py: 5,
          textAlign: "center"
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Product Details
        </Typography>
        <Typography sx={{ opacity: 0.9 }}>
          Everything you need to know before buying
        </Typography>
      </Box>

      {/* PRODUCT CONTENT */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {/* IMAGE */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: 3,
                p: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 420,
                boxShadow: 3,
                "& img": {
                  transition: "transform 0.3s",
                  cursor: "zoom-in"
                },
                "&:hover img": {
                  transform: "scale(1.15)"
                }
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain"
                }}
              />
            </Box>
          </Grid>

          {/* DETAILS */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: 3,
                p: 4,
                boxShadow: 3
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h5" fontWeight="bold">
                  {product.title}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating
                    value={product.rating?.rate || 0}
                    precision={0.1}
                    readOnly
                  />
                  <Typography variant="body2" color="text.secondary">
                    ({product.rating?.count || 0} reviews)
                  </Typography>
                </Stack>

                <Chip
                  label={product.category}
                  sx={{
                    width: "fit-content",
                    bgcolor: "#6A00F4",
                    color: "#fff"
                  }}
                />

                <Divider />

                <Typography variant="h4" fontWeight="bold" color="primary">
                  ${totalPrice}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Price for {quantity} item(s) • Inclusive of all taxes
                </Typography>

                <Divider />

                <Typography variant="body1">{product.description}</Typography>

                {/* Quantity */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <RemoveIcon />
                  </IconButton>

                  <Typography fontWeight="bold">{quantity}</Typography>

                  <IconButton onClick={() => setQuantity((q) => q + 1)}>
                    <AddIcon />
                  </IconButton>
                </Stack>

                {/* ACTIONS */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      flex: 1,
                      background: "linear-gradient(90deg, #6A00F4, #FF4D6D)",
                      fontWeight: "bold"
                    }}
                    onClick={() => setSnackbarOpen(true)}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ flex: 1 }}
                    onClick={() => navigate("/checkout")}
                  >
                    Buy Now
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" variant="filled">
          Product added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductPage;
