import { ProductCard } from "../ProductCard/ProductCard";
import * as s from "./Pstyles";
import { Products } from "../../Data/products";

export const ProductsList: React.FC = () => {
  return (
    <s.ContainerGrid>
      {Products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </s.ContainerGrid>
  );
};
