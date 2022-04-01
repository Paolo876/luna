import { useUserRedux } from '../hooks/useUserRedux';
import { useSettingsRedux } from '../hooks/useSettingsRedux';

import Todos from './Todos/Todos';
import Search from './Search/Search';
import Time from './Time/Time';
import Greeting from './Greeting/Greeting';
import Motivations from "./Motivations/Motivations";
import Weather from './Weather/Weather';
import Bookmarks from './Bookmarks/Bookmarks';

const ComponentsList = () => {
    const { name } = useUserRedux();
    const { location, toggleGeolocation, components } = useSettingsRedux();
    const { isGeolocationAllowed } = location;

    const checkIsVisible = (name) => {
        const component = components.find(item => item.name === name);
        if(component.isVisible) return true;
        return false; 
    }
    // listen for location permission changes
    navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) { 
        permissionStatus.onchange = () => { 
            if(permissionStatus.state === "granted"){
                toggleGeolocation(true)
            } else if(permissionStatus.state === "denied"){
                toggleGeolocation(false)
            } else {
                toggleGeolocation(null)
            }
        }
    });

    return (  
        <>
            {/* { checkIsVisible("bookmarks")           && <Bookmarks/> } */}
            { checkIsVisible("greeting")            && <Greeting name={name}/> }
            { checkIsVisible("motivations")         && <Motivations/> }
            { checkIsVisible("search")              && <Search/> }
            { checkIsVisible("time")                && <Time/> }
            { checkIsVisible("todos")               && <Todos/> }
            { checkIsVisible("weather") && isGeolocationAllowed && <Weather/> }
        </>
    );
}
 
export default ComponentsList;