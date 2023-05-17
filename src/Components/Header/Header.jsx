import React from "react";
import "./Header.scss";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  name: yup
    .string("Enter name of a product")
    .min(3, "Name of a product should be of minimum 3 characters length")
    .max(15, "Name of a product should be of maximum 15 characters length")
    .required("Name of a product is required"),
  price: yup
    .number("Enter price of a product")
    .min(1, "Price of a product should be of minimum 1 $")
    .max(999, "Price of a product should be of maximum 999 $")
    .required("Price of a product is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      values.name = "";
      values.price = "";
    },
  });

  return (
    <>
      <div className="header">
        <div className="header___wapper">
          <div className="header___wapper___left">
            <span>Start Bootstrap</span>
            <ul className="header___wapper___left--list">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/card'>Card</Link>
              </li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="header___wapper___right">
            <Button onClick={handleOpen}>
              <ShoppingCartIcon /> Cart <span className="span">0</span>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add an Item
                </Typography>
                 <form onSubmit={formik.handleSubmit}>
                  <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Name of a product"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      variant="outlined"
                    />
                    <TextField
                      id="price"
                      name="price"
                      type="name"
                      fullWidth
                      label="Price of a product"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      error={formik.touched.price && Boolean(formik.errors.price)}
                      helperText={formik.touched.price && formik.errors.price}
                      variant="outlined"
                    />
                    <div className="button">
                      <Button type="submit" variant="outlined">Add the item</Button>
                    </div>
                 </form>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
