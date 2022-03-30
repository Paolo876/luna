import { useSelector, useDispatch } from "react-redux";
import { settingsActions, fetchBackground } from "../../../../store/settingsSlice";
import classes from "./Background.module.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Button from "../../../UI/Button";

const FetchBackgrounds = () => {
    const bg = useSelector(state => state.settings.background);
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor);
    const dispatch = useDispatch();
    const containerClickHandler = () => {
        if(bg.isLocalBg) {
            dispatch(fetchBackground())
            dispatch(settingsActions.setIsLocalBackground(false))
        };   
    }
    
    const generateBackgroundHandler = () => {
      dispatch(settingsActions.setIsLocalBackground(false))
      dispatch(fetchBackground());
    }
    const setDefaultBgHandler = () => {
        dispatch(settingsActions.setBackground());
      }
    return (  
        <>
            <div className={`${classes.backgroundSelectionContainer} ${!bg.isLocalBg && classes.selectedCategory}`} onClick={containerClickHandler}>
                <p>Fetch Random Backgrounds from unsplash.com: {!bg.isLocalBg && <span className={classes.icon}><CheckCircleOutlineIcon style={{color: currentPrimaryColor}}/></span>}</p>
                <div className={classes.btnContainer}>
                    <Button disabled={bg.isLocalBg} onClick={generateBackgroundHandler}>Generate Background <AutorenewIcon className={classes.renewIcon}/></Button>
                </div>
                <div className={classes.btnContainer}>
                    <Button disabled={bg.isLocalBg || bg.isSet} onClick={setDefaultBgHandler}>Set as Default</Button>
                </div>
            </div>

        </>
    );
}
 
export default FetchBackgrounds;