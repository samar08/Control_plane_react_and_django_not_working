import React from 'react';
import { useEffect } from 'react';
import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button } from '@material-ui/core';
import AppbarComponent from '../components/AppbarComponent';
import FooterComponent from '../components/FooterComponent';
import useStyles from '../styles';
import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
const Nodesinfo = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const master=useSelector((state)=>(state.masterinfo.master));
    const worker=useSelector((state)=>(state.workerinfo.worker));
    //console.log('master:',master);
    //console.log('worker',worker);
  return (<>
  <CssBaseline/>
  <AppbarComponent/>
  <div>
  
      <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Nodes info</Typography>
              </Card>

      </Container>
      <Container className={classes.nodescontainer}>
          <Grid container spacing={4} justify="center">
          <Grid key="master"item xs={12} sm={6} md={4}>
             
              <Card>
                  <CardContent>
                      <center><Button variant="contained" className={classes.clusternamestring} onClick={() => dispatch(masterinfoactioncreator())}>Get master nodes info</Button></center>
                     
                      {master?
                      <List>
                      { master.map((node)=>(
                           <ListItem>
                               <ListItemText primary={node.id} />
                               <ListItemText primary={node.ip} />
                               <ListItemText primary={node.hostname} />
                           </ListItem>
                       ))}
                        </List>:<List></List>
                      
                      }
                       
                      </CardContent>
                     </Card>
              </Grid>
              <Grid key="worker"item xs={12} sm={6} md={4}>
              
                  
              <Card>
              <CardContent>
              <center><Button variant="contained" className={classes.clusternamestring} onClick={() => dispatch(workerinfoactioncreator())}>Get worker nodes info</Button></center>
                      
              {worker?
                      <List>
                      { worker.map((node)=>(
                           <ListItem>
                               <ListItemText primary={node.id} />
                               <ListItemText primary={node.ip} />
                               <ListItemText primary={node.hostname} />
                           </ListItem>
                       ))}
                        </List>:<List></List>
                      
                    }
                      </CardContent>
              </Card>
                     
              </Grid>
              </Grid>

          </Container>

   
   
  </div>
  {/*<FooterComponent/>*/}
  </>);
};
const mapStatetoProps=state=>{
return{
    master:state.masterinfo.master
}
}
const mapdispatchtoprops=dispatch=>{
    return{
        getmasternodeinfo:()=>dispatch(masterinfoactioncreator())
    }
}
export default Nodesinfo;
