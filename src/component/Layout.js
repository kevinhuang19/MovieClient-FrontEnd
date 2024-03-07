import { Outlet } from "react-router-dom";
import { Grid } from "./grid/Grid";

import React from 'react'

export const Layout = ({getMovieData}) => {
  return (
    <main>
        <Outlet/>
        <Grid getMovieData={ getMovieData }/>
    </main>
  )
}

export default Layout;
