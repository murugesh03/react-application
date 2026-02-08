import React, {
  useState,
  useEffect,
  useRef
  // useCallback,
  // useMemo
} from "react";
import axios from "axios";
// import { useNavigate } from "react-router";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import ProductCard from "../../components/productCard";
import {
  // useGetAllProductsQuery,
  useUpdateProductsMutation
} from "../../redux/services/productApi";
// import useCounter from "../../hooks/useCounter";
//useEffect, useRef, useState, useCallback, useMemo, useReducer, useContext
const Homepage = () => {
  const typeRef = useRef(null);
  const [update, setUpdate] = useState(0);
  const [timer, setTimer] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  // const { data: allProducts, isLoading } = useGetAllProductsQuery();
  // const navigate = useNavigate();

  const [updateProducts, { data }] = useUpdateProductsMutation();
  // const [updateProducts, { data }] = useUpdateProductsMutation();

  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://httpbin.org/status/400");
      console.log(response);
      if (!response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      console.log(response, "this is response");
      setAllProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //Component Did Mount
  useEffect(() => {
    console.log("Component Did Mount");
    getAllProducts();
    console.log(typeRef.current.style.color);

    if (typeRef.current) {
      typeRef.current.style.color = "blue";
    }
  }, []);

  // useEffect(() => {
  //   if (typeRef.current) {
  //     typeRef.current.style.color = "blue";
  //   }
  // }, [typeRef]);

  //Component Did Update
  useEffect(() => {
    if (update > 0) {
      console.log("Component Did Update - rendered");
    }
    // console.log("Component Did Update - allProducts changed", allProducts);
  }, [update]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        console.log("Reached end of page");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Component Will Unmount
  useEffect(() => {
    // const timeout = setTimeout(() => {
    //   console.log("This will run after 5 seconds!");
    // }, 5000);
    // console.log("Setting up interval for timer", timeout);

    // const interval = setInterval(() => {
    //   console.log("This will run after 5 seconds interval!");
    //   setTimer((prevTimer) => prevTimer + 1);
    // }, 5000);
    return () => {
      // clearInterval(interval);
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    window.onError = function (message, source, lineno, colno, error) {
      console.log("Global error caught: ", message);
      return true; // Prevents the default browser error handler
    };
    return () => {
      window.onError = null;
    };
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
        <Typography
          ref={typeRef}
          variant="h3"
          fontWeight="bold"
          letterSpacing={1}
        >
          Discover Your Next Buy 🛍️
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Handpicked products just for you
        </Typography>
        <Button onClick={() => setUpdate(update + 1)}> Increment</Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 2, textAlign: "center" }}>
        Timer: {timer} seconds
      </Typography>
      {/* PRODUCT GRID */}
      {allProducts?.length && (
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4} justifyContent="center">
            {allProducts?.map((product) => (
              <ProductCard product={product} key={product.id} name="Raj" />
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default Homepage;
