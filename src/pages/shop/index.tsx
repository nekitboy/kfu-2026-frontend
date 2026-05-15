import React from 'react';
import * as S from './shop.styles';
import ProductCard from './components/product-card/product-card';

const products = [
  { id: '1', title: 'Big Potatos', price: 12 },
  { id: '2', title: 'Big Potatos', price: 12 },
  { id: '3', title: 'Big Potatos', price: 12 },
  { id: '4', title: 'Big Potatos', price: 12 },
  { id: '5', title: 'Big Potatos', price: 12 },
  { id: '6', title: 'Big Potatos', price: 12 },
  { id: '7', title: 'Big Potatos', price: 12 },
  { id: '8', title: 'Big Potatos', price: 12 },
];

const ShopPage: React.FC = () => {
  return (
    <S.ProductList>
      {products.map((product) => (
        <ProductCard id={product.id} key={product.id} title={product.title} price={product.price} />
      ))}
    </S.ProductList>
  );
};

export default ShopPage;
