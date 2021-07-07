// React - Next Importations
import React from "react";

// Library Components

// Styles
import { FooterContainer, Container, Profile, Source } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Profile>
          <p>
            Painel desenvolvido por{" "}
            <strong>
              <a href="https://www.linkedin.com/in/evnrodr/">
                Evandro Rodrigues
              </a>
            </strong>
            .
          </p>
          <p>
            <a href="https://github.com/evnrodr/covid19-panel">
              Link para o repositório no <strong>GitHub</strong>.
            </a>
          </p>
        </Profile>

        <Source>
          Fonte dos dados:{" "}
          <a href="https://brasil.io/covid19/">
            <img
              src="https://brasil.io/static/img/logo/logo_br-io_fundo-escuro.bbbaf8e79edf.png"
              alt=""
              width="210px"
              height="40.5"
            />
          </a>
        </Source>
      </Container>
    </FooterContainer>
  );
}
