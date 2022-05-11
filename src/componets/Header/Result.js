import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius:"15px"
}));
const Result = () => {
    return (
        <div>
            <Box sx={{ marginTop: "10px" }}>
                <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                    <Grid item md={3} sx={{ backgroundColor: "", borderRadius: "10px" }}>
                        <Box sx={{ backgroundColor: "transform", color:"#2c0980" }}>
                            <Item>
                                <Grid container>
                                    <Grid item md={4} sx={{ backgroundColor: "transform" }}>
                                        <Grid container>
                                            <Grid item md={4} sx={{ color:"#2c0980" }}>
                                            <AttachMoneyIcon  sx={{fontSize:"small"}}/>
                                            </Grid>
                                            <Grid item md={3}  sx={{ color:"#2c0980"}}>
                                            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>34</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid Item md={6} sx={{ backgroundColor: "transform", color:"#2c0980" }}>
                                        <Typography sx={{ fontSize: "13px",fontWeight: "200" }}>Cheapest</Typography>
                                        <Typography sx={{ fontSize: "10px" ,fontWeight: "150"}}>2h 36m overage</Typography>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Item sx={{ backgroundColor: "#35099e", color:"white"}}> 
                        <Grid container>
                                    <Grid item md={4} sx={{ backgroundColor: "transform" }}>
                                        <Grid container>
                                            <Grid item md={4} sx={{ color:"white" }}>
                                            <AttachMoneyIcon  sx={{fontSize:"small"}}/>
                                            </Grid>
                                            <Grid item md={3}  sx={{ color:"white"}}>
                                            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>56</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid Item md={6} sx={{ backgroundColor: "transform", color:"white" }}>
                                        <Typography sx={{ fontSize: "13px",fontWeight: "200" }}>Best</Typography>
                                        <Typography sx={{ fontSize: "10px" ,fontWeight: "150"}}>1h 50m overage</Typography>
                                    </Grid>
                                </Grid>
                        </Item>
                    </Grid>
                    <Grid item md={3}>
                        <Item>
                        <Grid container>
                                    <Grid item md={4} sx={{ backgroundColor: "transform" }}>
                                        <Grid container>
                                            <Grid item md={4} sx={{ color:"#2c0980" }}>
                                            <AttachMoneyIcon  sx={{fontSize:"small"}}/>
                                            </Grid>
                                            <Grid item md={3}  sx={{ color:"#2c0980"}}>
                                            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>93</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid Item md={6} sx={{ backgroundColor: "transform", color:"#2c0980" }}>
                                        <Typography sx={{ fontSize: "13px",fontWeight: "200" }}>Fasted</Typography>
                                        <Typography sx={{ fontSize: "10px" ,fontWeight: "150"}}>1h 21m overage</Typography>
                                    </Grid>
                                </Grid>
                        </Item>
                    </Grid>
                    <Grid item md={3}>
                        <Item> 
                        <Grid container>
                                    <Grid item md={4} sx={{ backgroundColor: "transform" }}>
                                        <Grid container>
                                            <Grid item md={4} sx={{ color:"#2c0980" }}>
                                            <AttachMoneyIcon  sx={{fontSize:"small"}}/>
                                            </Grid>
                                            <Grid item md={3}  sx={{ color:"#2c0980"}}>
                                            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>58</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid Item md={6} sx={{ backgroundColor: "transform", color:"#2c0980" }}>
                                        <Typography sx={{ fontSize: "13px",fontWeight: "200" }}>Fly greener</Typography>
                                        <Typography sx={{ fontSize: "10px" ,fontWeight: "150"}}>1h 58m overage</Typography>
                                    </Grid>
                                </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Result