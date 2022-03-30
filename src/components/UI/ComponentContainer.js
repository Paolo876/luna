import React from "react";
import Draggable from "react-draggable";
import classes from "./ComponentContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { settingsActions } from "../../store/settingsSlice";
import getTranslateValue from "../../utils/get-translate-value";

const ComponentContainer = (props, ref) => {
    const dispatch = useDispatch();

    const editorModeIsActive = useSelector(state => state.settings.editorMode).isActive;
    const currentColor = useSelector(state => state.settings.ui.primaryColor);
    const components = useSelector(state => state.settings.components);
    let defaultPosition = undefined;
    if(editorModeIsActive){
        const componentStyles = components.find(item => item.name === ref.current.id).addedStyles
        if(componentStyles.transform){
            defaultPosition = getTranslateValue(componentStyles.transform);
        }
    }
    const content = <div    className={`${classes[`component-container`]} ${props.className} ${editorModeIsActive ? classes.dragContainer : " "}`} 
                            style={props.style} 
                            onClick={props.onClick} 
                            ref={ref}
                            id={props.id}>
                                {editorModeIsActive && <div className={classes.overlay} style={{borderColor: currentColor}}></div>}

                                {props.children}
                    </div>
                    
    const stopHandler = () => {
        dispatch(settingsActions.changeComponentPosition({id: ref.current.id, transform: ref.current.style.transform}))

    }
    return (  
        <>
            {editorModeIsActive ? 
                <Draggable      position={null} nodeRef={ref} onStop={stopHandler}
                                defaultPosition={defaultPosition}
                                bounds={{   top: (ref.current.offsetTop * -1), 
                                            left: (ref.current.offsetLeft * -1), 
                                            right: window.innerWidth - (ref.current.offsetLeft + ref.current.offsetWidth), 
                                            bottom: window.innerHeight - (ref.current.offsetTop + ref.current.offsetHeight) }}
                    >
                    {content}
                </Draggable>
            :
                <>{content}</>
                
            }
        </>


    );
}
 
export default React.forwardRef(ComponentContainer); 