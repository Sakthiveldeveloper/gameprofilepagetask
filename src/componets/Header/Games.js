import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadious: "50px",
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: "15px"

}));

const Game1 = () => {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('http://localhost:4000/games')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <>
        {Users.map((item, i) => {
          return (
            <>
              {/* <ol>
             <li key={i}>{item.id}</li>
             <li key={i}>{item.start_time}</li>
            </ol> */}
              <Box sx={{ marginTop: "15px", height: "170px" }}>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <Item sx={{ height: "90px", padding: "10px" }}>
                      <Grid container spacing={2}>
                        <Grid item md={3}>
                          <Box>
                            <Grid container sx={{ marginTop: "10px" }}>
                              <Grid item md={4} sx={{ color: '#16088c', padding: "20px", }}>
                                <Avatar sx={{ bgcolor: "red", height: "30px", width: "30px" }} aria-label="recipe">
                                  b
                                </Avatar>
                              </Grid>
                              <Grid item md={6} sx={{ color: '#16088c', padding: "10px" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "800" }}>{item.start_time} </Typography>
                                <Typography sx={{ fontSize: "11px", fontWeight: "bold" }}>{item.team_name1}</Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>{item.date} </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box sx={{ backgroundColor: "transform", height: "40px", marginTop: "23px" }}>
                            <Grid container>
                              <Grid item md={2} sx={{ backgroundColor: "transform" }}>
                                <Avatar sx={{ bgcolor: "blue", height: "10px", width: "10px", textAlign: "left", marginTop: "23px", marginLeft: "25px" }} aria-label="recipe">.
                                </Avatar>
                              </Grid>
                              <Grid item md={8} sx={{ backgroundColor: "transform" }}>
                                <Typography sx={{ fontSize: "8px", color: "blue", marginTop: "10px", marginLeft: "" }}>
                                  1h 50m
                                </Typography>
                                <hr />
                                <Typography sx={{ fontSize: "8px", color: "blue", }}>
                                  Nonstop
                                </Typography>
                              </Grid>
                              <Grid item md={2} sx={{ backgroundColor: "transform" }}>
                                <Avatar sx={{ bgcolor: "blue", height: "10px", width: "10px", textAlign: "", marginTop: "24px", }} aria-label="recipe">.
                                </Avatar>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item md={2}>
                          <Box>
                            <Grid container sx={{ marginTop: "10px" }}>
                              <Grid item md={12} sx={{ color: '#16088c', padding: "10px", textAlign: 'right' }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "800" }}>{item.end_time}</Typography>
                                <Typography sx={{ fontSize: "11px", fontWeight: "bold" }}>{item.team_name2}</Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>{item.date}</Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item md={3}>
                          <Box>
                            <Grid container sx={{ marginTop: "10px" }}>
                              <Grid item md={12} sx={{ color: '#16088c', backgroundColor: 'transfrom', justifyContent: "center" }}>
                                <Grid container>
                                  <Grid item md={4} sx={{ color: "#2c0980", textAlign: "Right" }}>
                                    <AttachMoneyIcon sx={{ fontSize: "small" }} />
                                  </Grid>
                                  <Grid item md={2} sx={{ color: "#2c0980", textAlign: "left" }}>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{item.price}</Typography>
                                  </Grid>
                                  <Grid item md={4} sx={{ color: "#2c0980", textAlign: "left" }}>
                                    <Typography sx={{ fontSize: "6px", fontWeight: "bold", marginTop: "13px" }}>USD</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item md={12} sx={{ color: '#16088c', }}>
                                <Button sx={{ bgcolor: "#e62315", height: "30px", width: "150px", borderRadius: "10px" }} >
                                  <Typography sx={{ color: "white", fontSize: "10px", }}>
                                    Select
                                  </Typography>
                                </Button>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </>
          )
        })}
      </>
    </>
  )
}

export default Game1