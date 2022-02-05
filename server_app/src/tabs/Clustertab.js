import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, CardHeader,ListItem,List,ListItemText} from '@material-ui/core';
import useStyles from '../styles';
import data from '../data/data.json';
import '../styles/index.css';
import MasterAccordianComponent from '../components/MasterAccordianComponent';
import WorkerAccordianComponent from '../components/WorkerAccordianComponent';
import HostservicesAccordianComponent from '../components/HostservicesAccordianComponent';
const Clustertab = () => {
    const classes=useStyles();
  return(
      <>

     
      <div className="main">
          <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Control Plane 2.0</Typography>
              </Card>

          </Container>
          <Container className={classes.nodescontainer}>
          <Grid container spacing={4} justify="center">
          <Grid key="master"item xs={12} sm={6} md={4}>
              
              <Card>
                  <CardContent>
                      <Typography align="center" className={classes.clusternamestring}>Infra cluster resources</Typography>
                      <List>
                     
                          <ListItem>
                              <Button variant="contained" className={classes.clusterbtns}>DRBD</Button>
                          </ListItem>
                          <ListItem>
                          <Button variant="contained" className={classes.clusterbtns}>AFC</Button>
                          </ListItem>
                          <ListItem>
                          <Button variant="contained" className={classes.clusterbtns}>OneView</Button>
                          </ListItem>
                          <ListItem>
                          <HostservicesAccordianComponent/>
                          </ListItem>
                      
                      </List>
                      </CardContent>
                     </Card>
              </Grid>
              <Grid key="worker"item xs={12} sm={6} md={4}>
            
                  
              <Card>
              <CardContent>
                      <Typography align="center" className={classes.clusternamestring}>k3s cluster</Typography>
                    
                      <List>
                     
                     <ListItem>
                     <Button variant="contained" className={classes.clusterbtns}>ArgoCD</Button>
                     </ListItem>
                     <ListItem>
                     <Button variant="contained" className={classes.clusterbtns}>Pulp</Button>
                     </ListItem>
                     <ListItem>
                     <Button variant="contained" className={classes.clusterbtns}>Harbor</Button>
                     </ListItem>
                     <ListItem>
                     <Button variant="contained" className={classes.clusterbtns}>Prometheus</Button>
                     </ListItem>
                 
                 </List>
                      </CardContent>
              </Card>
                     
              </Grid>
              </Grid>

          </Container>

      </div>

      </>
  );
};

export default Clustertab;
