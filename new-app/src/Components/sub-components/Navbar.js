import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    header: {
        color: "black",
        backgroundColor: "#ff9900"
    }
});

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.header}>
            <Toolbar>
                <Grid container direction="row" justify="space-between">
                    <Box pl={4}>
                        <Typography variant="h5">Cars Around</Typography>
                    </Box>
                    <Box pr={4} width="45%">
                            <Grid container justify="space-around">
                                <Button color="inherit">Services</Button>
                                <Button color="inherit">About</Button>
                                <Button color="inherit">Team</Button>
                            </Grid>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;