import styled from 'styled-components';
import { ButtonScheme, ButtonSize } from '../../style/theme';
import React, { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    isLoading?: boolean;
}

const Button = ({ children, size, scheme, disabled, isLoading, ...props }: Props) => {
    //  야이거 ...props 추가 안해줘서 안되는거였어 뭐임?>?
    return (
        <ButtonStyle {...props} size={size} scheme={scheme} disabled={disabled} isLoading={isLoading}>
            {children}
        </ButtonStyle>
    );
};

const ButtonStyle = styled.button<Omit<Props, 'children'>>`
    font-size: ${({ theme, size }) => theme.button[size].fontSize};
    padding: ${({ theme, size }) => theme.button[size].padding};
    color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
    background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    opacity: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

export default Button;
