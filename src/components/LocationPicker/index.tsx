import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { ILocation } from "../../utils/types/types";
import { Container, Select, Option } from "./styles";

export function LocationPicker() {
  const router = useRouter();

  const [location, setLocation] = useState("br");

  const locationsList: ILocation[] = [
    { value: "br", label: "Brasil" },
    { value: "ac", label: "Acre" },
    { value: "al", label: "Alagoas" },
    { value: "am", label: "Amazonas" },
    { value: "ap", label: "Amapá" },
    { value: "ba", label: "Bahia" },
    { value: "ce", label: "Ceará" },
    { value: "df", label: "Distrito Federal" },
    { value: "es", label: "Espírito Santo" },
    { value: "go", label: "Goiás" },
    { value: "ma", label: "Maranhão" },
    { value: "mg", label: "Minas Gerais" },
    { value: "ms", label: "Mato Grosso do Sul" },
    { value: "mt", label: "Mato Grosso" },
    { value: "pa", label: "Pará" },
    { value: "pb", label: "Paraíba" },
    { value: "pe", label: "Pernambuco" },
    { value: "pi", label: "Piauí" },
    { value: "pr", label: "Paraná" },
    { value: "rj", label: "Rio de Janeiro" },
    { value: "rn", label: "Rio Grande do Norte" },
    { value: "ro", label: "Rondônia" },
    { value: "rr", label: "Roraima" },
    { value: "rs", label: "Rio Grande do Sul" },
    { value: "sc", label: "Santa Catarina" },
    { value: "se", label: "Sergipe" },
    { value: "sp", label: "São Paulo" },
    { value: "to", label: "Tocantins" },
  ];

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setLocation(event.target.value);
    redirectTo(event.target.value);
  }

  function redirectTo(location: string) {
    location === "br" ? router.push("/") : router.push(`/state/${location}`);
  }

  return (
    <Container>
      <Select
        name="states"
        id="state-select"
        onChange={handleChange}
        value={location}
      >
        {locationsList.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
}
