import { useContext } from 'react'
import { CartContext } from '../context/cart'
import {Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";


export default function CartPage() {

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            <Grid container spacing={2}>
                {cartItems.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {item.price}
                                </Typography>
                                <Typography variant="body2">
                                    Quantity: {item.quantity}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                    <Button size="small" onClick={() => removeFromCart(item)}>Remove One</Button>
                                    <Button size="small" onClick={() => addToCart(item)}>Add One</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" sx={{ my: 2 }}>
                Total: ${getCartTotal()}
            </Typography>
            <Button variant="contained" color="primary" onClick={clearCart}>
                Clear Cart
            </Button>
        </Container>
    )
}