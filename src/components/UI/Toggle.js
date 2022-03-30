import React, { useState } from "react";
import classes from "./Toggle.module.css";

const Toggle = (props, ref) => {
    return (  
        <div className={classes.container}>
            <p>{props.children}</p>
            <div className={classes.checkboxContainer}>
                <input type="checkbox" {...props.inputProps} ref={ref}/>
                <label htmlFor={props.name}></label>
                <div className={classes.activeCircle}></div>
            </div>
        </div>
    );
}
 
export default React.forwardRef(Toggle);