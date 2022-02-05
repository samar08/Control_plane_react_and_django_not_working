import React from 'react';

import {AppBar,Toolbar,Typography} from '@material-ui/core';
import useStyles from '../styles';
const logoimg=require('../images/logo2.png')

const AppbarComponent = () => {
    const classes=useStyles();
  return (
    <AppBar className={classes.header} position="sticky">
    <Toolbar>
    <img src={logoimg} alt="logo"  />
    </Toolbar>
</AppBar>
    );
};

export default AppbarComponent;
