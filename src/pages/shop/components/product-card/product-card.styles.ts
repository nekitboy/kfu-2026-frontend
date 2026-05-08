import styled from '@emotion/styled';

export const Card = styled.div`
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImage = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  background-image: url('/assets/potato.png');
  background-size: cover;
  background-position: center;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: var(--gray-700);
  font-size: 14px;
  line-height: 1.5;
`;

export const Price = styled.div`
  color: var(--gray-900);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;
