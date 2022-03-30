import { useDispatch } from "react-redux";
import { settingsActions } from "../../store/settingsSlice";
import classes from "./LocationPrompt.module.css";
import Button from "../UI/Button";
const LocationPrompt = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        const showPosition = () => {
            dispatch(settingsActions.toggleGeolocation(true))
        }
        const showError = (err) => {
            if(err.code === 1) dispatch(settingsActions.toggleGeolocation(false))
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }

    }
    return (  
        <div className={classes.container}>
            <h3>This app uses the browser's built-in geolocation API to display weather information. </h3>
            <p>Click the button below to trigger the browser's location prompt and choose 'Allow' if you wish to use this feature or 'Block' otherwise.</p>
            <Button className={classes.btn} onClick={clickHandler}>Click here to continue</Button>
        </div>
    );
}
 
export default LocationPrompt;