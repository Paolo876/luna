import { useSelector } from 'react-redux';
import classes from './Input.module.css';
import React from "react";
import styled from 'styled-components';

const InputStyled = styled.input`
    &:focus {
        border-bottom: 2px solid ${(props) => props.currentPrimaryColor};
  }
`;

const Input = (props, ref) => {
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor);

    return (   
        <InputStyled 
         {...props}
        currentPrimaryColor={currentPrimaryColor}
        className={`${classes.input} ${props.className}`}
        style={props.style}
        ref={ref}
        />
    );
};
 
export default React.forwardRef(Input); 