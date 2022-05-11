import { Container, Box, Button, Typography, Grid, Slider } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

function valuetext(value) {
  return `${value}°C`;
}

const ProfileDetails = () => {
  const [value, setValue] = React.useState([50, 80]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <div>
      <Container>
        <Grid container>
          <Grid item md={12} >
            <Item sx={{ marginTop: "30px",borderRadius:"10px" }}>
              <Box>
                {/* Get Price alerts */}
                <Box sx={{ marginTop: "10px" }}>
                  <Button sx={{ bgcolor: "lightblue", marginLeft: "70px", height: "25px", width: "160px", fontSize: "10px", color: "#380acf" }}>
                    Get Price alerts
                  </Button>
                </Box>
                {/* Stops */}
                <Box>
                  <Typography sx={{ color: "#380acf", fontSize: "16px", fontWeight: "bold" }}>
                    Stops
                  </Typography>
                  <FormGroup>
                    <Grid container>
                      <Grid item md={6} sx={{ color: "#380acf", fontSize: "12px", fontWeight: "bold"}}>
                        <FormGroup>
                          <FormControlLabel color="#380acf" sx={{ fontSize:"10px", color:"#380acf"}} control={<Checkbox defaultChecked  size="small"/>} label="Non-stop" />
                          <FormControlLabel sx={{color:"#380acf"}} control={<Checkbox defaultChecked size="small" />} label="1stop" />
                          <FormControlLabel sx={{color:"#380acf"}} control={<Checkbox defaultChecked  size="small"/>} label="2+ stop" />
                        </FormGroup>
                      </Grid>
                      <Grid item md={6} sx={{ textAlign: 'Right', color:"#380acf", fontWeight:"bold" }}>
                        <Typography sx={{ borderSpacing: "1px" ,color:"#380acf" }}>
                          $34
                        </Typography>&nbsp;
                        <Typography>
                          $70
                        </Typography>&nbsp;
                        <Typography>
                          $98
                        </Typography>
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Box>
                <br/>
                {/* Departure times */}
                <Box>
                  <Typography sx={{ color: "#380acf", fontSize: "16px", fontWeight: "bold" }}>
                    Departure times
                  </Typography><br />
                  <Typography sx={{ color: "#380acf", fontSize: "12px", fontWeight: "bold" }}>
                    11.00 AM - 11.00 PM
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    size="small"
                  />
                </Box>
                <br/>
                {/* Trip Duration */}
                <Box>
                  <Typography sx={{ color: "#380acf", fontSize: "16px", fontWeight: "bold" }}>
                    Trip Duration
                  </Typography><br />
                  <Typography sx={{color: "#380acf", fontSize: "12px", fontWeight: "bold" }}>
                    2 hours - 12 hours
                  </Typography>
                  <Slider defaultValue={50} aria-label="Small" valueLabelDisplay="auto" size="small" />
                </Box>
                <br/>
                {/* Baggage */}
                <Box>
                  <Typography sx={{ color: "#380acf", fontSize: "16px", fontWeight: "bold" }}>
                    Baggage
                  </Typography>
                  <FormGroup>
                    <Grid container>
                      <Grid item md={7}>
                        <FormGroup sx={{color:"#380acf"}}>
                          <FormControlLabel control={<Checkbox defaultChecked  size="small"/>} label="! small bag" />
                          <FormControlLabel control={<Checkbox size="small" />} label="2 cabin bags" />
                          <FormControlLabel control={<Checkbox  size="small"/>} label="checked-inbag" />
                        </FormGroup>
                      </Grid>
                      <Grid item md={5} sx={{ textAlign: 'Right', color: "#380acf" }}>
                        <Typography sx={{ borderSpacing: "1px" }}>
                          $34
                        </Typography>&nbsp;
                        <Typography>
                          $58
                        </Typography>&nbsp;
                        <Typography>
                          $112
                        </Typography>
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Box>
                <br/>
                {/* Airports */}
                <Box>
                  <Typography sx={{ color: "#380acf", fontSize: "16px", fontWeight: "bold" }}>
                    Airports
                  </Typography>
                  <FormGroup>
                    <Grid container>
                      <Grid item md={6}>
                        <FormGroup>
                          <FormControlLabel  sx={{color:"#380acf",fontSize:14 }}control={<Checkbox size="small" defaultChecked />} label="CIA" />
                          <FormControlLabel sx={{color:"#380acf",fontSize:14  }} control={<Checkbox  size="small"/>}label="FCO" />
                        </FormGroup>
                      </Grid>
                      <Grid item md={6} sx={{ textAlign: 'Right',color: "#380acf",fontSize:"10px"  }}>
                        <Typography sx={{fontSize:"14px" }}>
                          Rome Clampiro
                        </Typography>&nbsp;
                        <Typography sx={{fontSize:"14px" }}>
                          Rome Fuminokio
                        </Typography>&nbsp;
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ProfileDetails