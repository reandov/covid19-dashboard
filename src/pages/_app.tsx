// React - Next Imports
import type { AppProps } from "next/app";
import React, { useState } from "react";

// Libraries
import { ThemeProvider } from "styled-components";

// Internal Components
import { Header } from "../components/Header";
import { LocationPicker } from "../components/LocationPicker";

// Styling
import GlobalStyle from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    console.log("In here:", theme.title);

    setTheme(theme.title === "light" ? dark : light);

    console.log("In here:", theme.title);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <LocationPicker />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
