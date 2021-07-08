// React - Next Imports
import React from "react";

// External Packages Imports
import Loader from "react-loader-spinner";

// Styles
import { Container } from "./styles";

export function Loading() {
  return (
    <Container
      style={{
        marginTop: "15%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="Oval" color="#009ae2" height={100} width={100} />
    </Container>
  );
}
