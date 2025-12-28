import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Chip
} from "@mui/material";

const Homepage = () => {
  const [allProducts, setAllProducts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setAllProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getAllProducts();
  }, []);

  const handleProductView = (productId) => {
    navigate(`/productPage/${productId}`);
  };

  return (
    <Box sx={{ bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      {/* HERO HEADER */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #6A00F4, #FF4D6D)",
          color: "#fff",
          py: 6,
          textAlign: "center"
        }}
      >
        <Typography variant="h3" fontWeight="bold" letterSpacing={1}>
          Discover Your Next Buy 🛍️
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Handpicked products just for you
        </Typography>
      </Box>

      {/* PRODUCT GRID */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {allProducts.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={product.id}
              display="flex"
              justifyContent="center"
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 345,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "0.3s",
                  boxShadow: 3,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8
                  }
                }}
              >
                {/* IMAGE */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.thumbnail}
                    alt={product.title}
                    sx={{ objectFit: "cover" }}
                  />

                  <Chip
                    label={`$${product.price}`}
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: "#6A00F4",
                      color: "#fff",
                      fontWeight: "bold"
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom noWrap>
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>

                {/* ACTION */}
                <CardActions sx={{ p: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "linear-gradient(90deg, #6A00F4, #FF4D6D)",
                      fontWeight: "bold"
                    }}
                    onClick={() => handleProductView(product.id)}
                  >
                    View Product
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Homepage;
