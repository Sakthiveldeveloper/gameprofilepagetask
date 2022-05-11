// import { Box } from '@mui/system'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Profile = () => {
  return (
    // <div>Profile</div>
   <Container>
      <Box>
      <Item sx={{ marginTop: "20px", borderRadius: "10px" }}>
        <Box >
          <Grid container>
            <Grid md={3} item >
              <Box sx={{ marginLeft: "30px" }}>
                <Avatar sx={{ bgcolor: "red", height: "30px", width: "30px", marginTop: "5px" }} aria-label="recipe">
                  b
                </Avatar>
              </Box>
            </Grid>
            <Grid md={6} item sx={{ backgroundColor: "transform", color: "blue" }}>
              <Typography sx={{ fontSize: "12px", textAlign: "left" }}>
                Hello,
              </Typography>
              <Typography sx={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}>
                Benjamins Rous
              </Typography>
            </Grid>
            <Grid md={1} item sx={{ backgroundColor: "bloack" }}>
              <MoreVertIcon />
            </Grid>
          </Grid>
        </Box>
      </Item>
    </Box>
   </Container>
  )
}

export default Profile