import React from "react";
import { useNavigate } from "react-router";
import {
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
import "./style.css";

const ProductCardName = ({ name }) => {
  return <div>{name}</div>;
};

const ProductCard = ({ product, name }) => {
  const navigate = useNavigate();

  const handleProductView = (productId) => {
    navigate(`/productPage/${productId}`);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={product.id}
      display="flex"
      justifyContent="center"
    >
      <div className="product-card-container"></div>
      <div style={{ position: "relative" }}></div>
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
            loading="lazy"
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
          <ProductCardName name={name} />
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
  );
};

export default ProductCard;
