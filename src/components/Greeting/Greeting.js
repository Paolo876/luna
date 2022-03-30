import { useRef } from "react";
import { useSelector } from "react-redux";
import ComponentContainer from "../UI/ComponentContainer";
import capitalizeFirstLetter from "../../utils/capitalize-first-letter";
import classes from "./Greeting.module.css"
const Greeting = () => {
    const ref = useRef();   //for react-draggable
    const userName = useSelector(state => state.user.userInfo.name);
    const addedStyles = useSelector(state => state.settings.components).find(item => item.name === "greeting").addedStyles;
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
                <p >{`${greeting}, ${capitalizeFirstLetter(userName)}` }!</p>
            </ComponentContainer>
    );
}
 
export default Greeting;
