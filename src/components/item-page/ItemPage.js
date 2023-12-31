import React from 'react'
import {Box, Button, Container, Grid, MenuItem, Select, Typography} from "@mui/material";


const ItemPage = () =>{


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
                    <Button variant="contained" color="primary" fullWidth sx={{ my: 2 }}>
                        Place in Cart
                    </Button>
                </Grid>
            </Grid>
        </Container>

    );
}

export default ItemPage;