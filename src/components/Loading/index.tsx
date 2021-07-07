import React from "react";
import Loader from "react-loader-spinner";

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
      <Loader type="Oval" color="#007ca5" height={100} width={100} />
    </Container>
  );
}
