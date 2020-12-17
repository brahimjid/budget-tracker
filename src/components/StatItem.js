import { Grid } from "@material-ui/core";
import React from "react";

export default function StatItem() {
  return (
    <Grid justify="center" alignItems={"center"} container>
      <Grid item sm={6} xs={12} lg={4} md={6}>
        <div>
          <h4>Your Balance</h4>
          <h1>$3,000.00</h1>

          <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p className="money plus">2,000.00</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p className="money minus">1000.00</p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
