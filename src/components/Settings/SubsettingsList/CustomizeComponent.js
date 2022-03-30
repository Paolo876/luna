import { useState } from "react";
import { useSelector } from "react-redux";

import CustomizeComponentContent from "./CustomizeComponentContent/CustomizeComponentContent";
import SubsettingsListContainer from "./SubsettingsListContainer";
import Dropdown from "../../UI/Dropdown";
import capitalizeFirstLetter from "../../../utils/capitalize-first-letter";
const CustomizeComponent = () => {
    const [selectComponent, setSelectComponent] = useState(null)
    const components = useSelector(state => state.settings.components);
    const geolocationStatus = useSelector(state => state.settings.location.geolocationAllowed);
    let selectedComponent = components.find(item => item.name === selectComponent);

    let weatherDisabled
    if(selectComponent === "weather"){
        if(!geolocationStatus) {
            selectedComponent = null;
            weatherDisabled = true;
        }
    }

    const selectHandler = (name) => {
      setSelectComponent(name);
    }
  
    return (  
        <SubsettingsListContainer>
            <h3>Customize Components</h3>
            <Dropdown defaultSelected={selectComponent === null ? "Select Component:" : capitalizeFirstLetter(selectComponent)}>
                {components.map(item => <li key={item.name}><button onClick={() => selectHandler(item.name)}>{capitalizeFirstLetter(item.name)}</button></li>)}
            </Dropdown>
            <div>
                {weatherDisabled && <p>This component is disabled. Enable your browser's location access to use this feature.</p>}
                <CustomizeComponentContent name={selectedComponent ? selectedComponent.name : null}/>
            </div>
        </SubsettingsListContainer>
    );
}
 
export default CustomizeComponent;