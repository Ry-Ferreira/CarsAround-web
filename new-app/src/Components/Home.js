import React from 'react';
import homeBg from '../Media/homeCar.jpg';
import './Styles/Home.css';

// Imports MUI
import Container from '@material-ui/core/Container';
import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const Home = () => {
    return (
        <Container disableGutters="true" maxWidth="false">
            <img src={homeBg} className="hero-img" alt="car" />
            <Box mx="auto" width="75%" className="hero-text">
                <Box>
                    <Box mb={2} mt={4}>
                        <Typography variant="h6" color="secondary" align="center">Dinos que quieres hacer con tu auto, y nosotros nos encargamos del resto</Typography>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h2" color="secondary" align="center">Bienvenido a Cars Around, tu taller.</Typography>
                    </Box>
                    <Box align="center" mx="auto" width="25%" mt={3}>
                        <Button variant="outlined" fullWidth color="secondary">
                             Conócenos
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;