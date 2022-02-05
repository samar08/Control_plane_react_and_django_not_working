import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from '../styles';
import { List,ListItem,ListItemText } from '@material-ui/core';
import data from '../data/data.json';
export default function SimpleAccordion() {
  const classes=useStyles();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
        <Typography align="center" >Worker nodes</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
                     { data.worker.map((node)=>(
                          <ListItem>
                              <ListItemText primary={node.id} />
                              <ListItemText primary={node.ip} />
                              <ListItemText primary={node.hostname} />
                          </ListItem>
                      ))}
          </List>
         {/* <Typography>
           Number of Master nodes: 1
          </Typography>
          <Typography>
           Number of Worker nodes: 3
          </Typography>
          <Typography>
           k8s version: v1.20
         </Typography>*/}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}