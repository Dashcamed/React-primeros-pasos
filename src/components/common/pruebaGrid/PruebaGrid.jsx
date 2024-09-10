import Grid from "@mui/material/Grid2";
import React from "react";

const PruebaGrid = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ background: "red" }}>caja1</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ background: "blue" }}>caja2</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ background: "green" }}>caja3</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2>hola</h2>
        <button color="primary">hola</button>
      </Grid>
    </Grid>
  );
};

export default PruebaGrid;
