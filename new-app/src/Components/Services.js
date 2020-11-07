import React from 'react';

//Imports MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Icons 
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import BuildIcon from '@material-ui/icons/Build';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import SvgIcon from '@material-ui/core/SvgIcon';

// Components
import ServiceCards from './sub-components/ServiceCards';

const useStyles = makeStyles({
    cardCointainer: {
        maxHeight: "50%",
        backgroundColor: "rgb(255, 132, 0)"
    }
});


const Services = () => {

    const classes = useStyles();

    return (
        <Container disableGutters="true" maxWidth="false">
            <Box mx="auto" width="95%" my={5} py={4}>
                <Grid container direction="column" justify="space-around" alignItems="center">
                    <Box textAlign="center" mb={5}>
                        <Box mb={3}>
                            <Typography variant="h4" color=""> Servicios </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1">Algunos de nuestros servicios destacados por nuestros clientes.</Typography>
                        </Box>
                    </Box>
                    <Box mt={5} mb={5} className={classes.cardCointainer}>
                        <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                            <Grid container item xs={4} spacing={4}>
                                <ServiceCards
                                    iconImage={<BuildIcon />}
                                    imgAlt="Mecanica"
                                    tittle="Mecanica"
                                    cardTittle="Mecánica automotriz"
                                    cardDescription="Revision de deficiencias físicas en los componentes del auto. Estamos equipados con las tecnologías más avanzadas en el rumbro, manejada por los profesionales más cualificados en el mundo."
                                />
                            </Grid>
                            <Grid container item xs={4} spacing={4}>
                                <ServiceCards
                                    iconImage={<VerticalAlignCenterIcon />}
                                    imgAlt="Mecanica"
                                    tittle="Mecanica"
                                    cardTittle="Alineación y Balanceo"
                                    cardDescription="Contamos con equipos de última generación preparados para el mañana.
                                    La mejor tecnología para mantener en óptimas condiciones tus llantas y neumáticos para extender su vida     útil."
                                />
                            </Grid>
                            <Grid container item xs={4} spacing={4}>
                                <ServiceCards
                                    iconImage={<LocalCarWashIcon />}
                                    imgAlt="Auto en la ducha"
                                    tittle="Lavadero"
                                    cardTittle="Lavado"
                                    cardDescription="Contamos con tecnología única en el país, garantizamos el mejor servicio para nuestros     clientes y una limpieza profunda y duradera. "
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
};

export default Services;