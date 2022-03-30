import classes from './SliderInput.module.css';
import React from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";

const SliderInputStyled = styled.input`
    &::-webkit-slider-thumb {
	background: ${(props) => props.currentPrimaryColor};
  }
`;


const SliderInput = (props, ref) => {
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor)
    return (  
        <SliderInputStyled 
        {...props}
        currentPrimaryColor={currentPrimaryColor}
        className={`${props.className} ${classes.sliderInput}`}
        // style={{backgroundColor: "blue"}}
        ref={ref}
        />
    );
}
 
export default React.forwardRef(SliderInput); 
