import React, { type HTMLAttributes, type MouseEventHandler } from 'react';
import { LinkStyled } from './style';
import { useNavigate } from 'react-router';

export interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  /**
   * Имя ссылки, отображается на ui
   */
  name: string;
  /**
   * Адрес ссылки
   */
  url: string;
  className?: string;
}

const Index = ({ active, name, url, className }: NavLinkProps) => {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();
    navigate(url);
  };

  return (
    <LinkStyled
      className={className}
      active={active}
      fontSize="18px"
      href={url}
      onClick={handleClick}
    >
      {name}
    </LinkStyled>
  );
};

export default Index;
