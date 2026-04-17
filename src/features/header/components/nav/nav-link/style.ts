import styled from "@emotion/styled";
import {colors} from "../../../../../components/ui/theme";
import {css} from "@emotion/react";
import type {NavLinkProps} from "./index";

export const LinkStyled = styled.a<Pick<NavLinkProps, 'active'> & {fontSize?: string}>`
    color: ${colors.gray400};
    text-decoration: none;
    font-size: ${(props) => props.fontSize ?? '14px'};
    line-height: 1.5;
    display: flex;
    align-items: center;
    
    ${({ active }) => active && css`color: ${colors.white};`};
`