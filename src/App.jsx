import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CltSalary from "./components/CltSalary";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemCltDetails from "./components/ItemCltDetails";
import ItemPjDetails from "./components/ItemPjDetails";
import ItemSalaryDiff from "./components/ItemSalaryDiff";
import { getNewCalculatedData } from "./constants/calculatedData";
import { AppContext } from "./contexts/AppContext";

function App() {
  const defaultTheme = createTheme();
  const [baseSalary, setBaseSalary] = useState(0);
  const [alreadyCalculated, setAlreadyCalculated] = useState(false);
  const [calculatedData, setCalculatedData] = useState(getNewCalculatedData());

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContext.Provider
        value={{
          baseSalary,
          setBaseSalary,
          alreadyCalculated,
          setAlreadyCalculated,
          calculatedData,
          setCalculatedData,
        }}
      >
        <CssBaseline />
        <Header />
        <main>
          <CltSalary />
          {alreadyCalculated && (
            <Container maxWidth='lg'>
              <Grid container spacing={5} sx={{ paddingBottom: "2rem" }}>
                <ItemCltDetails cltDetails={calculatedData.cltDetails} />
                <ItemSalaryDiff salaryDiff={calculatedData.salaryDiff} />
                <ItemPjDetails
                  title='1º cenário'
                  description='O patrão gasta o mesmo, você ganha mais'
                  pjOption={calculatedData.option1}
                />
                <ItemPjDetails
                  title='2º cenário'
                  description='O patrão gasta menos, você ganha o mesmo'
                  pjOption={calculatedData.option2}
                />
              </Grid>
            </Container>
          )}
        </main>
        <Footer />
      </AppContext.Provider>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
