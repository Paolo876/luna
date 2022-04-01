import { useRef, useEffect, useState } from "react";
import { useSettingsRedux } from "../../hooks/useSettingsRedux";
import useHttp from "../../hooks/use-http";
import ComponentContainer from "../UI/ComponentContainer";
import classes from "./Motivations.module.css"

const Motivations = () => {
    const ref = useRef();   //for react-draggable
    const { components } = useSettingsRedux();
    const addedStyles = components.find(item => item.name === "motivations").addedStyles;

    const {isLoading, error, sendRequest: fetchData} = useHttp();
    const [data, setData] = useState({});

    useEffect(()=>{
        fetchData({url: "https://api.quotable.io/random?maxLength=140&tags=happiness|love|inspirational|success"}, content => setData(content));
    },[fetchData]);

    return (  
        <ComponentContainer className={classes.container} style={addedStyles} ref={ref} id="motivations">
        {
            !isLoading && !error &&
            <div>
                <p className={classes.content}>{`"${data.content}"`}</p>
                <p className={classes.author} style={{fontWeight: addedStyles.fontWeight - 200}}>{`-${data.author}`}</p>
            </div>
        }
            
        </ComponentContainer>
    );
}
 

export default Motivations;

// https://api.quotable.io/random?tags=happiness|love|wisdom