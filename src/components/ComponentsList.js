import { useSelector, useDispatch } from 'react-redux';
import { settingsActions } from "../store/settingsSlice"

import Todos from './Todos/Todos';
import Search from './Search/Search';
import Time from './Time/Time';
import Greeting from './Greeting/Greeting';
import Motivations from "./Motivations/Motivations";
import Weather from './Weather/Weather';
import Bookmarks from './Bookmarks/Bookmarks';

const ComponentsList = () => {
    const dispatch = useDispatch();
    const components = useSelector(state =>state.settings.components);
    const location = useSelector(state => state.settings.location).geolocationAllowed;

    const checkIsVisible = (name) => {
        const component = components.find(item => item.name === name);
        if(component.isVisible) return true;
        return false; 
    }

    // listen for location permission changes
    navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) { 
        permissionStatus.onchange = () => { 
            console.log(permissionStatus.state)
            if(permissionStatus.state === "granted"){
                dispatch(settingsActions.toggleGeolocation(true))
            } else if(permissionStatus.state === "denied"){
                dispatch(settingsActions.toggleGeolocation(false))
            } else {
            dispatch(settingsActions.toggleGeolocation(null))
            }
        }
    });

    return (  
        <>
            { checkIsVisible("bookmarks")           && <Bookmarks/> }
            { checkIsVisible("greeting")            && <Greeting/> }
            { checkIsVisible("motivations")         && <Motivations/> }
            { checkIsVisible("search")              && <Search/> }
            { checkIsVisible("time")                && <Time/> }
            { checkIsVisible("todos")               && <Todos/> }
            { checkIsVisible("weather") && location && <Weather/> }
        </>
    );
}
 
export default ComponentsList;