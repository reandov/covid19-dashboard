// React - Next Importations
import React from "react";
import Image from "next/image";

// Assets
import icon from "../../../public/logo_brasilio.png";

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
            <Image
              src={icon}
              alt="Logo do Brasil.IO"
              width="210px"
              height="40.5"
            />
          </a>
        </Source>
      </Container>
    </FooterContainer>
  );
}
