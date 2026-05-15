import React from 'react';
import * as S from './product-card.styles';
import StarRating from '../star-rating/star-rating';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../../store/slices/cart';
import { createGetProductSelector } from '../../../../store/slices/cart/selectors';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, title, price }: ProductCardProps) => {
  const product = useSelector(createGetProductSelector(id));
  const dispatch = useDispatch();

  return (
    <S.Card>
      <S.ProductImage />
      <S.ProductInfo>
        <S.Details>
          <S.Title>{title}</S.Title>
          <S.Price>{price} $</S.Price>
          <StarRating />
        </S.Details>
        <button onClick={() => dispatch(addProduct({ id, name: title, price }))}>+</button>
        {product?.count ?? 0}
      </S.ProductInfo>
    </S.Card>
  );
};

export default ProductCard;
