import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="90vh">
    <div className='h-[60vh] flex justify-center items-center' >
      <CircularProgress sx={{ color : '#A0A0A0'}}/>
    </div>
  </Box>
);

export default Loader;