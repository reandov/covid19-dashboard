// React - Next Imports
import { useContext } from "react";
import Image from "next/image";

// Internal Contexts and Custom Hooks
import { ThemeContext } from "styled-components";

// External Packages Imports
import Switch from "react-switch";

// Assets
import icon from "../../../public/covid_icon.svg";

// Styles
import { Container, Heading } from "./styles";

// Types and Interfaces
import { IHeaderProps } from "../../utils/types/types";

export function Header({ toggleTheme }: IHeaderProps) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Heading>
        <Image src={icon} width={48} height={48} alt="Ícone do Coronavírus" />
        <p>COVID 19 - Dashboard</p>
      </Heading>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  );
}
