import React from 'react';


//Imports MUI 
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import BrokenImageRoundedIcon from '@material-ui/icons/BrokenImageRounded';
import FlightTakeoffRoundedIcon from '@material-ui/icons/FlightTakeoffRounded';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
      background: "#ff9900"
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    aboutContainer: {
        backgroundColor: "#664d00"
    }
}));

const About = () => {

    const classes = useStyles();

    return (
        <Container className={classes.aboutContainer}>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2010
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <PlayCircleFilledWhiteRoundedIcon style={{ fontSize: 100 }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Inicio
                            </Typography>
                            <Typography>En una ciudad casí que remota en Montevideo unos amigos se juntaron a hablar sobre autos, cuando una idea íncreible se nos ocurrió: Diseñar nuestros propios autos.
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2011
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <BrokenImageRoundedIcon style={{ fontSize: 100 }} />
                        </TimelineDot>
                        <TimelineConnector style={{ fontSize: 100 }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Cerca del final
                            </Typography>
                            <Typography>Un año en donde la bancarrota estaba muy cerca de nostros, una ampliación de nuestros talleres incrementaron significativamente las ganancias, con lo cual adquirimos mejor personal y rendimiento.</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2015
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <FlightTakeoffRoundedIcon style={{ fontSize: 100 }}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Despegue
                            </Typography>
                            <Typography>
                                Consideramos que este fue nuestro mejor año, adquirimos personal cualificado, ampliamos nuestros servicios a otros países, dimos la iniciativa del trabajo online con la creación de una página web, aumentamos el rango de automóviles deportivos permitidos.
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Actualidad
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <GradeOutlinedIcon style={{ fontSize: 100 }}/>
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Proyección
                            </Typography>
                            <Typography>
                                Actualmente contamos con unos de los mejores servicios destinado a todo tipo de automoviles, priorizando los coches deportivos. Nuestro sueño: Llenar las calles de autos más veloces que los radares.
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    )
};

export default About;