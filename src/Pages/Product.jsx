import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcurm from "../components/Breadcrum/Breadcurm";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import Relatedproduct from "../components/Relatedproduct/Relatedproduct";
export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcurm product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <Relatedproduct/>
    </div>
  );
}
