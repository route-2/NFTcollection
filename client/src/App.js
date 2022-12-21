import React from "react";
import { Container,AppBar,Typography,Grow,Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Forms";
import pexels from "./images/pexels.png";
import useStyles from "./styles";
const App = () => {
    const classes = useStyles();

    return (
       <Container maxWidth="lg">
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> NFTs </Typography>
             <img className={classes.image} src = {pexels} alt="pexels" height="200" />
              </AppBar>
              <Grow in>
                <Container>
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                      <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Form />
                    </Grid>
                  </Grid>
                </Container>
              </Grow>
              </Container>
    );
}
export default App;