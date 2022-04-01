import React, { useEffect } from "react";
import { useBackgroundRedux } from "../../hooks/useBackgroundRedux";

const Background = ({ className }) => {
    const { background, generateLocalBackground, fetchBackground } = useBackgroundRedux();
    const { isRandom, isLocal, filter} = background;

     useEffect(()=>{
        if(isRandom) {
            if(isLocal) {
                generateLocalBackground();
            } 
            else {
                fetchBackground();
            };
        }
    },[isRandom, isLocal]);

    const bgValue = `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${background.source}) no-repeat fixed center/cover`;

    return (  
        <div 
            className={className}
            style={{background: bgValue, filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturate}%)`}}
        > 
        </div>
    );
}
 
export default Background;