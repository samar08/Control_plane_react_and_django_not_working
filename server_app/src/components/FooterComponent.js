import React from 'react';
import useStyles from '../styles';
import footerlogo from '../images/sosmallscreenshot.png';
import { Typography } from '@material-ui/core';
const FooterComponent = () => {
    const classes=useStyles();
  return( 
  <div className={classes.footer}>
      <p className={classes.copyright}>© Copyright 2022 Hewlett Packard Enterprise Development LP</p>
    <center><img src={footerlogo} alt="footer logo"></img></center>

  </div>);
};

export default FooterComponent;
