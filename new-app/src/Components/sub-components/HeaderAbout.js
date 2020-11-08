import React from 'react';

// Imports MUI
import { Box, Grid, Typography } from '@material-ui/core';


const HeaderAbout = () => {
    return (
        <Box my={5} fullWidth textAlign="center">
            <Grid xs={12}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Sobre nosotros
                </Typography>
                <Typography variant="body1">
                    Nuestra historia puede parecer ficticia, y aunque lo sea, es interesante.
                </Typography>
            </Grid>
        </Box>
    )
};

export default HeaderAbout;