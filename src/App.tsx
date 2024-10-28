import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";



function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
        <GridItem area={"nav"} bg={"red"}>nav</GridItem>
        <Show above="lg">
              <GridItem area={"aside"} bg={"blue"}>aside</GridItem>
        </Show>  
        <GridItem area={"main"} bg={"gold"}>main</GridItem>
    </Grid>
  )
}

export default App;
