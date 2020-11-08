import React from 'react';

//Imports MUI
import Container from '@material-ui/core/Container';
import { Box, Grid, Typography } from '@material-ui/core';

//Components
import TeamCards from './sub-components/TeamCards';

// Avatars
import Fede from '../Media/Fede.jpeg';
import Ryan from '../Media/Ryan.jpeg';
import Enzo from '../Media/Enzo.jpeg';
import Mati from '../Media/Mati.jpeg';


const Team = () => {
    return(
        <Container>
            <Box fullWidth textAlign="center" my={5}>
                <Grid xs={12}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Nuestro Equipo
                    </Typography>
                    <Typography variant="body1">
                        El trabajo en equipo nos enriquece como profesionales, dándonos perspectivas que tal vez nunca hubiéramos pensado.
                    </Typography>
                </Grid>
            </Box>
            <Box m={4}>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Box>
                        <TeamCards 
                            name="Federico Pereira" 
                            role="Control de estadísticas" 
                            avatarSrc={Fede} 
                            fbLink="https://www.facebook.com/federico.pereira.16" 
                            twLink="https://twitter.com/f3dep" 
                            igLink="https://www.instagram.com/fedeprey/"  
                        />
                    </Box>
                    <Box>
                        <TeamCards 
                            name="Enzo Martinez" 
                            role="Mantenimiento del personal" 
                            avatarSrc={Enzo} 
                            fbLink="https://www.facebook.com/enzo.delcap.73?ref=br_rs" 
                            twLink="https://twitter.com/EnzoMartineeez" 
                            igLink="https://www.instagram.com/enzo.martineez/"  
                        />
                    </Box>
                    <Box>
                        <TeamCards 
                            name="Ryan Ferreira" 
                            role="Administrador de ingresos" 
                            avatarSrc={Ryan} 
                            fbLink="https://www.facebook.com/Ry1610" 
                            twLink="https://twitter.com/Raian99345779" 
                            igLink="https://www.instagram.com/ryaaanferreira/"  
                        />
                    </Box>
                    <Box>
                        <TeamCards 
                            name="Matias Gomez" 
                            role="Mecánica automotriz" 
                            avatarSrc={Mati} 
                            fbLink="https://www.facebook.com/MatiGomez9" 
                            twLink="https://twitter.com/matigomezzzz" 
                            igLink="https://www.instagram.com/gomezzmati/"  
                        />
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
};

export default Team;