import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const Header =()=> {
    return (
        <Box
            sx={{ marginTop: 1, borderRadius: "15px", backgroundColor: "#220787" }}
        >
            <Grid container sx={{ padding: 1 }} >
                <Grid rowSpacing={5} item md={6} sx={{ backgroundColor: "transform", height: "50px", }}>
                    <Box sx={{ color: "white", padding: "2", fontWeightBold: "100" }}>
                        <Typography sx={{ fontSize: "13px", marginLeft: "7px", marginTop: "8px" }}>
                            Barcelona(BCN) - Rome(ROM)
                        </Typography>
                        <Typography sx={{ fontSize: "9px", marginLeft: "7px" }}>
                            1 Adult -  Economy
                        </Typography>
                    </Box>
                </Grid>
                <Grid rowSpacing={5} item xs={3} sx={{ backgroundColor: "tranform" }}>
                    <Box sx={{marginTop: "5px",  backgroundColor: "white", borderRadius:"10px"}}>
                        <Button variant="outlined" sx={{ fontSize: "12px", marginLeft: "8px", marginTop: "5px" ,border:0, color:"#220787"}} startIcon={<CalendarTodayOutlinedIcon sx={{ fontSize:"2px"}} />}>
                            <Typography sx={{ fontSize:"10px" }}>
                            Tuesday, Apr21
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid rowSpacing={5} item xs={3} sx={{ backgroundColor: "tranform" }}>
                <Box sx={{marginTop: "5px",  backgroundColor: "white", borderRadius:"10px", marginLeft:"3px",}}>
                        <Button variant="outlined" sx={{ fontSize: "10px", marginLeft: "8px", marginTop: "5px" ,border:0,color:"#220787"}} startIcon={<CalendarTodayOutlinedIcon />}>
                            One way
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header