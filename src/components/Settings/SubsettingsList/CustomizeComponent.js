import { useState } from "react";
import { useSettingsRedux } from "../../../hooks/useSettingsRedux";
import CustomizeComponentContent from "./CustomizeComponentContent/CustomizeComponentContent";
import SubsettingsListContainer from "./SubsettingsListContainer";
import Dropdown from "../../UI/Dropdown";
import capitalizeFirstLetter from "../../../utils/capitalize-first-letter";

const CustomizeComponent = () => {
    const [selectComponent, setSelectComponent] = useState(null);
    const { components, location } = useSettingsRedux();
    const geolocationStatus = location.isGeolocationAllowed;

    let selectedComponent = components.find(item => item.name === selectComponent);
    let weatherDisabled = false;
    let bookmarksDisabled = false;
    
    if(selectComponent === "weather" && !geolocationStatus){
        selectedComponent = null;
        weatherDisabled = true;     
    }

    if(selectComponent === "bookmarks"){
        selectedComponent = null;
        bookmarksDisabled = true;
    }
 
    return (  
        <SubsettingsListContainer>
            <h3>Customize Components</h3>
            <Dropdown defaultSelected={selectComponent === null ? "Select Component:" : capitalizeFirstLetter(selectComponent)}>
                {components.map(item => <li key={item.name}><button onClick={() => setSelectComponent(item.name)}>{capitalizeFirstLetter(item.name)}</button></li>)}
            </Dropdown>
            <div>
                {bookmarksDisabled && <p>This feature is temporarily disabled in development.</p>}
                {weatherDisabled && <p>This component is disabled. Enable your browser's location access to use this feature.</p>}
                <CustomizeComponentContent name={selectedComponent ? selectedComponent.name : null}/>
            </div>
        </SubsettingsListContainer>
    );
}
 
export default CustomizeComponent;