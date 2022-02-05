import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import {CssBaseline,Grow} from '@material-ui/core';
import Tabspanel from '../tabs/Tabspanel'
import FooterComponent from '../components/FooterComponent';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
const App = () => {
  return(
      <div className='dbbg'>
      <CssBaseline/>
      <AppbarComponent/>
    
      <Tabspanel/>
   
      {/*<FooterComponent/>*/}
      </div>
  );
};

export default App;
