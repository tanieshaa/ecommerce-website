import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../Context/HomeContext';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(HomeContext);
  const { productId } = useParams();

  console.log("Product ID from URL:", productId); 

  const product = all_product.find((e) => e.id === Number(productId));

  console.log("Product details:", product); 

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <Description product={product} />
      <RelatedProducts product={product} />
    </div>
  );
};

export default Product;
