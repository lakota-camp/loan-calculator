import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { SliderSelect } from "./components/SliderSelect";
import { TenureSelect } from "./components/TenureSelect";
import { Result } from "./components/Result";
import { Container, Grid } from "@mui/material";

function App() {

  // const [name, function] = useState(initialValueOfName)
  // const [a, setA] = useState(15) // 15 = intitial value

  // const [counter, setCounter] = useState(0)


  const [data, setData] = useState({
    homeValue: 10000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  })



  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={()=> setCounter(counter - 1)}>Decrement</button>
      <p>{counter}</p>
      <button onClick={()=> setCounter(counter + 1)}>Increment</button> */}

      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems='center'>

          <Grid item xs={12} md={6}> {/* Occupy 6 columns */}
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
