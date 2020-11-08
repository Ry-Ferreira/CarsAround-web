import React from 'react';

//Imports MUI
import { Card, SvgIcon } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    cardSize: {
        maxWidth: "240px",
        maxHeight: "440px"
    },
    large: {
      width: theme.spacing(24),
      height: theme.spacing(34),
    },
  }));

const TeamCards = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.cardSize}>
            <CardActionArea>
                <Box> 
                    <Grid container justify="center">
                        <CardMedia>
                            <Avatar className={classes.large} variant="rounded" alt="AvatarPersonal" src={props.avatarSrc} />
                        </CardMedia>
                    </Grid>
                </Box>
                <CardContent textAlign="center">
                    <Typography gutterBottom variant="h6" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.role}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box textAlign="center">
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Box>
                        <Button disableRipple href={props.fbLink}><FacebookIcon /></Button>
                    </Box>
                    <Box>
                        <Button disableRipple href={props.twLink}><TwitterIcon /></Button>
                    </Box>
                    <Box>
                        <Button disableRipple href={props.igLink}><InstagramIcon /></Button>
                    </Box>
                </Grid>
            </Box>
        </Card>
    )
};

export default TeamCards;