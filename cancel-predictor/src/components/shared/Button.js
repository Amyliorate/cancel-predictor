import React from 'react';
import styled from 'styled-components';
import { colours } from '../../const/theme';

const _Button = styled.button`

    color: ${colours.offWhite};
    background-color: ${colours.indigo};
    border-color: ${colours.indigo};
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover {
        background-color: ${colours.violet};
        border-color: ${colours.violet};
    }

    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
`;

export function Button({ type, disabled, children }) {
  return <_Button disabled={disabled} type={type}>{children}</_Button>;
}
