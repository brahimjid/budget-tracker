import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    //  maxHeight: 150,
    marginBottom: 20,
  },

  title: {
    fontSize: 15,
    letterSpacing: 1,
    //  textAlign: "center",
  },

  incMoney: {
    color: "#2ecc71",
  },

  expMoney: {
    color: "#c0392b",
  },
});

export default function InfoCard({ income, expenses }) {
  const classes = useStyles();

  return (
    <Grid justify="center" alignItems={"center"} container>
      <Grid item sm={6} xs={12} lg={4} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  INCOME
                </Typography>

                <Typography
                  align="center"
                  variant="h6"
                  className={classes.incMoney}
                  component="h6"
                >
                  {income}
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  borderRight: "2px solid #dedede",
                }}
              >
                <span></span>
              </Grid>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  EXPENSES
                </Typography>
                <Typography
                  align="center"
                  className={classes.expMoney}
                  variant="h6"
                  component="h6"
                >
                  {expenses}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
