import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ProfileSection from './componets/Profile/ProfileSection';
import Gamesection from './componets/Header/Gamesection'


export default function AutoGrid() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 , backgroundColor:"whitesmoke"}}>
        {/* Gamesection */}
        <Grid container spacing={3} >
          <Grid item   md={8} s >
            <Box sx={{backgroundColor:"whitesmoke"}}>
                <Gamesection/>
            </Box>
          </Grid>
          {/* ProfileSection */}
          <Grid item md={4}>
            <Box sx={{backgroundColor:"whitesmoke"}}>
              <ProfileSection/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
