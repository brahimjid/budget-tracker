import React, { Fragment } from "react";
import InfoCard from "../components/InfoCard";
// import StatItem from "../components/StatItem";

const Home = () => {
  return (
    <Fragment>
      {/* <StatItem /> */}
      <InfoCard income={2000} expenses={1000} />
    </Fragment>
  );
};
export default Home;
