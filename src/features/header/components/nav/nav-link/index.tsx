import React, { type HTMLAttributes, type MouseEventHandler, useCallback} from 'react'
import {LinkStyled} from "./style";
import {useChangeRoute} from "../../../../../components/routing";

export interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement>{
    active?: boolean,
    /**
     * Имя ссылки, отображается на ui
     */
    name: string,
    /**
     * Адрес ссылки
     */
    url: string,
    className?: string,
}



const Index = ({ active, name, url, className }: NavLinkProps) =>
{
    const changeRoute = useChangeRoute();

    const handleClick: MouseEventHandler = (event) => {
        event.preventDefault();
        changeRoute(url)
    }

    return <LinkStyled className={className} active={active} fontSize="18px" href={url} onClick={handleClick}>{name}</LinkStyled>
}


export default Index;