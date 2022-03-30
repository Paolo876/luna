import { useSelector, useDispatch } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice";

import SubsettingsListContainer from "../SubsettingsListContainer";
import classes from "./Background.module.css"
import Button from "../../../UI/Button";

import LocalBackgroundsList from "./LocalBackgroundsList";
import FetchBackgrounds from "./FetchBackgrounds";
const Background = () => {
    const bg = useSelector(state => state.settings.background);
    const dispatch = useDispatch();

    const removeBackgroundHandler = () => {
        dispatch(settingsActions.removeBackground());
      }
    return (  
        <SubsettingsListContainer>
            <h3>Background</h3>
            <p>Random background images are generated on reload if no image is set.</p>
            <LocalBackgroundsList/>
            <FetchBackgrounds/>
            <div className={classes.btnContainer}>
                <Button disabled={!bg.isSet} onClick={removeBackgroundHandler}>Remove Saved Background</Button>
            </div>
        </SubsettingsListContainer>
    );
}
 
export default Background;