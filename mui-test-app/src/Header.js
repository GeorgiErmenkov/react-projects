import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles} from '@material-ui/styles';
const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Partners Page
                    </Typography>
                    <PeopleIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Header;