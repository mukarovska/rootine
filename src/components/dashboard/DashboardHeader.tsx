import logo from "../../assets/rootineLogoText.svg";
import { Text } from "../ui/Text";

//TODO: Použít načtená data
//TODO: Přidat obrázek
//TODO: Měnit pozdrav dle denní doby - ale pak to bude složitější s šířkou textu a obrázkem

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-6">
      <div className="pt-7.5 flex justify-center">
        <img src={logo} alt="Rootine" className="max-w-50 w-[45%]" />
      </div>
      <div className="flex flex-col gap-2 max-w-[50%]">
        <div>
          <Text variant="h1">Dobrý den,</Text>
          <Text variant="h1" width="bold">
            Karolíno
          </Text>
        </div>
        <Text variant="h2">Pojďme se podívat, co tě dnes čeká...</Text>
      </div>
    </div>
  );
}
