import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice"

import classes from "./CustomizeComponentContent.module.css";
import Button from "../../../UI/Button"

import ToggleVisibilityButton from "./ToggleVisibilityButton";
import ChangeFontSelection from "./ChangeFontSelection";
import ChangeFontWeightSelection from "./ChangeFontWeightSelection";
import ChangeColorSelection from "./ChangeColorSelection";
import ChangeOpacityRange from "./ChangeOpacityRange";

const CustomizeComponentContent = ({name}) => {
    const dispatch = useDispatch();
    const components = useSelector(state => state.settings.components);
    const selectedComponent = components.find(item => item.name === name);

    const [toggleCheck, setToggleCheck] = useState(false);

    useEffect(()=>{
        if(selectedComponent) setToggleCheck(selectedComponent.isVisible);
    }, [selectedComponent]);

    let properties;
    if(selectedComponent) properties = {classes, name, disabled: !toggleCheck, selected: selectedComponent.addedStyles ? selectedComponent.addedStyles : null};
  
    const toggleCheckHandler = (name) => {
        setToggleCheck(!toggleCheck)
        dispatch(settingsActions.setIsVisible(name));
    }   
    return (  
        <>
            {name && 
                <div className={toggleCheck ? "" : classes.isNotVisibleContent}>
                    <ToggleVisibilityButton     classes={classes} 
                                                inputAttributes={{  id: name, 
                                                                    checked: toggleCheck, 
                                                                    onChange: ()=> toggleCheckHandler(name)}}
                                                forValue={name}/>

                    <ChangeFontSelection        data={properties}/>
 
                    <ChangeFontWeightSelection  data={properties}/>

                    <ChangeColorSelection       data={properties}/>

                    <ChangeOpacityRange         data={properties}/>

                    <div>
                        <Button onClick={()=> dispatch(settingsActions.resetStyle(name))}>Reset to Default</Button>
                    </div>
                </div>
            }
        </>
    );
}
 
export default CustomizeComponentContent;