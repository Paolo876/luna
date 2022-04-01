import { useRef } from "react";
import { useSettingsRedux } from "../../hooks/useSettingsRedux";

import ComponentContainer from "../UI/ComponentContainer";
import classes from "./Greeting.module.css";

const Greeting = ({ name }) => {
    const ref = useRef();   //for react-draggable
    const { components } = useSettingsRedux();
    const addedStyles = components.find(item => item.name === "greeting").addedStyles;
    const hours = new Date().getHours();

    let greeting;
    if(hours < 12){
        greeting = 'Good morning';
    } else if(hours >= 12 && hours <= 18){
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return (
            <ComponentContainer className={classes.greeting} style={addedStyles} ref={ref} id="greeting">
                <p >{ `${greeting}, ${name}` }!</p>
            </ComponentContainer>
    );
}
 
export default Greeting;
