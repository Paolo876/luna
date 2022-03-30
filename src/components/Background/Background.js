import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { settingsActions, fetchBackground } from "../../store/settingsSlice";

const Background = (props) => {
    const dispatch = useDispatch();
    const bg = useSelector(state => state.settings.background);
    const filter = bg.filter;
     useEffect(()=>{
        if(!bg.isSet) {
            if(bg.isLocalBg) {
                dispatch(settingsActions.generateBackground())
            } else {
                dispatch(fetchBackground());
            };
            
        }
    },[bg.isSet, bg.isLocalBg, dispatch]);

    const bgValue = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${bg.source}) no-repeat fixed center/cover`;

    return (  
        <div {...props} style={{background: bgValue, filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturate}%)`}}> 
                {props.children}
        </div>
    );
}
 
export default Background;