import React from 'react'
import {Container, Typography, Grid,Card, CardMedia, CardContent} from "@mui/material";

const Home = () => {

    const products = [
        { id: 1, name: 'Timberland 1', price: '$10', image: require('../assets/images/257215_1.jpg') },
        { id: 2, name: 'Timberland 2', price: '$15', image: require('../assets/images/241170_1.jpg') },
        { id: 3, name: 'Timberland 3', price: '$20', image: require('../assets/images/197426_1.jpg') },
        { id: 4, name: 'Timberland 4', price: '$20', image: require('../assets/images/197426_1.jpg') },
        { id: 5, name: 'Timberland 5', price: '$20', image: require('../assets/images/197426_1.jpg') },
        { id: 6, name: 'Timberland 6', price: '$20', image: require('../assets/images/197426_1.jpg') },
    ];

    return(

            <Container>
                <Grid container spacing={3}>
                    {products.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card raised={true}  >
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