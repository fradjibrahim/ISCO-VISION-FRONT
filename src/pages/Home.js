import React from 'react'
import {Container, Typography, Grid,Card, CardMedia, CardContent} from "@mui/material";

const Home = () => {

    const products = [
        { id: 1, name: 'Product 1', price: '$10', image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: '$15', image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: '$20', image: 'product3.jpg' },
        // Add more products as needed
    ];
    return(
        <Container>
            <Typography ariant="h4" gutterBottom>
                Featured Products
            </Typography>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={item.name}
                                height="200"
                                image={item.image}/>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {item.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

            </Grid>

        </Container>
        );
}

export default Home;