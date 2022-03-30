import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import ComponentContainer from "../UI/ComponentContainer";

import classes from "./Time.module.css";
const Time = () => {
    const ref = useRef();
    const [time, setTime] = useState(new Date());
    const addedStyles = useSelector(state => state.settings.components).find(item => item.name === "time").addedStyles;

    const refreshTime = () => {
      setTime(new Date())
    }

    useEffect(() => {
        const runRefresh = setInterval(refreshTime, 1000);
        return () => {
            clearInterval(runRefresh)
        }
    }, []);
    
    const day = time.toLocaleString('en-us', {weekday:'short', month:'long', day:'2-digit' })
    return (  
        <ComponentContainer className={classes.time} style={addedStyles} ref={ref} id="time">
            <h1 >{time.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</h1>
            <p style={{fontWeight: addedStyles.fontWeight - 200}}>{day}</p>
        </ComponentContainer>
    );
}
 
export default Time;