import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="95vh">
    <div direction='row' justifyContent='center' alignItems='center' height='68vh' >
      <CircularProgress sx= {{color :'#1b37b4'}}/>
    </div>
  </Box>
);

export default Loader;