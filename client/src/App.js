import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { Form } from "./components/Form/Form.js";
import { Posts } from "./components/Posts/Posts.js";
import memories from "./images/memories.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.Image}
          src={memories}
          alt="memories"
          height="120px"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify-content="space-between"
            alignItems="stretch"
            spacing={3}
          >
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
};

export default App;