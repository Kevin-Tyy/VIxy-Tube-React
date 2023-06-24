import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='68vh' >
      <CircularProgress sx= {{color :'#1b37b4'}}/>
    </Stack>
  </Box>
);

export default Loader;