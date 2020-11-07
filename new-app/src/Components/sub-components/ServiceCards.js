import React from 'react';


// Import MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SvgIcon } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 350
    },
    svgSize: {
        fontSize: "50px"
    }
});



const ServiceCards = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Box>
                    <Grid container justify="center">
                        <CardMedia>
                            <SvgIcon style={{ fontSize: 100 }}>
                                {props.iconImage}
                            </SvgIcon>
                        </CardMedia>
                    </Grid>
                </Box>
                <CardContent textAlign="center">
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.cardTittle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.cardDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ServiceCards;