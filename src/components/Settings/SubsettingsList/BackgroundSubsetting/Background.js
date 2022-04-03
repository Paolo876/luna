import { useBackgroundRedux } from "../../../../hooks/useBackgroundRedux";
import SubsettingsListContainer from "../SubsettingsListContainer";
import classes from "./Background.module.css"
import Button from "../../../UI/Button";

import LocalBackgroundsList from "./LocalBackgroundsList";
import FetchBackgrounds from "./FetchBackgrounds";

const Background = () => {
    const { background, removeBackground } = useBackgroundRedux();

    return (  
        <SubsettingsListContainer>
            <h3>Background</h3>
            <p>Random background images are generated on reload if no image is set.</p>
            <LocalBackgroundsList/>
            <FetchBackgrounds/>
            <div className={classes.btnContainer}>
                <Button disabled={background.isRandom} onClick={removeBackground}>Remove Saved Background</Button>
            </div>
        </SubsettingsListContainer>
    );
}
 
export default Background;