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
import ProductCard from "../../components/productCard";

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
          {console.log("allProducts", allProducts)}
          {allProducts.map((product) => (
            <ProductCard product={product} key={product.id} name="Raj" />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Homepage;
