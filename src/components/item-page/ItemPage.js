import React, {useContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import {Box, Button, Container, Grid, MenuItem, Select, Typography} from "@mui/material";
import { CartContext } from '../../context/cart'

const ItemPage = () =>{

    const { cartItems, addToCart } = useContext(CartContext)
    const context = useContext(CartContext)
    console.log(context);
    const location = useLocation();
    const { id, name, category, price, image } = location.state || {};
    const product = {
        id,
        name,
        category,
        price,
        image,
    };

    if (!product) {
        return <Typography>Product not found</Typography>;
    }
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ overflowY: 'auto', maxHeight: '90vh' }}>
                    {/* Scrollable image container */}
                    <Box
                        sx={{
                            width: '100%',
                            '& img': {
                                width: '100%',
                                height: 'auto'
                            }
                        }}
                    >
                        <img src={require('../../assets/images/197426_1.jpg')} alt="LV Trainer Sneaker" style={{ width: '100%' }} />                        {/* More images... */}
                        <img src={require('../../assets/images/257215_1.jpg')} alt="LV Trainer Sneaker" style={{ width: '100%' }} />                        {/* More images... */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Product details */}
                    <Typography variant="h4" gutterBottom>
                        LV Trainer Sneaker
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        $1,600.00
                    </Typography>

                    {/* Color Selector */}
                    <Typography variant="subtitle1">Colors</Typography>
                    <Select  displayEmpty fullWidth>
                        <MenuItem value="red">Red</MenuItem>
                        <MenuItem value="blue">Blue</MenuItem>
                        <MenuItem value="green">Green</MenuItem>
                    </Select>

                    {/* Size Selector */}
                    <Typography variant="subtitle1">Sizes</Typography>
                    <Select displayEmpty fullWidth>
                        <MenuItem value="8">8.0</MenuItem>
                        <MenuItem value="9">9.0</MenuItem>
                        <MenuItem value="10">10.0</MenuItem>
                    </Select>

                    {/* Add to Cart Button */}
                    <Button onClick={() => product && addToCart(product)} variant="contained" color="primary" fullWidth sx={{ my: 2 }}>
                        Place in Cart
                    </Button>
                </Grid>
            </Grid>
        </Container>

    );
}

export default ItemPage;