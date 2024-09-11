import * as s from "./promo";
import { IoAirplaneSharp } from "react-icons/io5";

export const PromoB: React.FC = () => {
  return (
    <s.PromoBanner>
      <s.Anuncio>FRETE GRATIS PARA TODO BRASIL</s.Anuncio>
      <IoAirplaneSharp />
    </s.PromoBanner>
  );
};
