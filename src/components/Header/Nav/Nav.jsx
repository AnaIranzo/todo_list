import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


class Nav extends Component {
  render() {

    const buttons = [
      <Button key="one"><Link to="/">Home</Link></Button>,
      <Button key="two"><Link to="/todo">To do list</Link></Button>,
      <Button key="three"><Link to="/weather">Weather</Link></Button>,
    ];
    return (
      
      
      
      

      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      
      <ButtonGroup color="primary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
    </Box>



    )

    
  }
}

export default Nav;
