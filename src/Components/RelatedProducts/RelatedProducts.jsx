import React from 'react';
import './RelatedProducts.css';
import all_product from '../Assets/all_product';
import Item from '../Items/Items';

const RelatedProducts = ({ product }) => {
  // Filter products of the same category, excluding the current product
  const relatedProducts = all_product.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  // Select the first 4 products
  const productsToShow = relatedProducts.slice(0, 5);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts_item'>
        {productsToShow.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

