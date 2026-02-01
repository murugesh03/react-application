import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { Form } from "react-router";
import { Field, useFormik } from "formik";
import * as yup from "yup";

function Signup() {
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be less than 20 characters")
      .required("Password is required")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      mobile: ""
    },
    validationSchema,
    onSubmit: (values) => {
      // if (handleCheckErrors(values)) {
      console.log("Form submitted:", values);
      // }
    }
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography>Signup as New user</Typography>
      <Box>
        <form onClick={formik.handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formik.values.name}
            error={!!formik.errors.name}
            helperText={formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formik.values.email}
            error={!!formik.errors.email}
            helperText={formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={formik.values.password}
            error={!!formik.errors.password}
            helperText={formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="Mobile"
            variant="outlined"
            fullWidth
            margin="normal"
            name="mobile"
            value={formik.values.mobile}
            error={!!formik.errors.mobile}
            helperText={formik.errors.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Signup;
