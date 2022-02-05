import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List,ListItem,Button } from '@material-ui/core';
import useStyles from '../styles';
export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Host Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
              <ListItem>
                  <Button>PDNS</Button>
                  
              </ListItem>
              <ListItem>
              <Button>Squid</Button>
              </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      
     
    </div>
  );
}