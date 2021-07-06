// React - Next Imports
import Image from "next/image";
import { useContext } from "react";

// Libraries
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

// Assets
import icon from "../../../public/covid_icon.svg";

// Styles
import { Container, Heading } from "./styles";

// Types and Interfaces
interface HeaderProps {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Heading>
        <Image src={icon} width={48} height={48} />
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
