import { useBackgroundRedux } from "../../../../hooks/useBackgroundRedux";
import { useSettingsRedux } from "../../../../hooks/useSettingsRedux";

import classes from "./Background.module.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Button from "../../../UI/Button";

const FetchBackgrounds = () => {
    const { background, setIsLocalBackground, fetchBackground, setBackground, removeBackground, isLoading, error } = useBackgroundRedux();
    const { ui } = useSettingsRedux();
    const currentPrimaryColor = ui.primaryColor;

    const containerClickHandler = () => {
        if(background.isLocal) {
            removeBackground();
            fetchBackground()
            setIsLocalBackground(false);
        };   
    }
    
    const generateBackgroundHandler = () => {
      removeBackground();
      setIsLocalBackground(false);
      fetchBackground();
    }

    return (  
        <>
            <div className={`${classes.backgroundSelectionContainer} ${!background.isLocal && classes.selectedCategory}`} onClick={containerClickHandler}>
                <p>Fetch Random Backgrounds from unsplash.com: {!background.isLocal && <span className={classes.icon}><CheckCircleOutlineIcon style={{color: currentPrimaryColor}}/></span>}</p>
                <div className={classes.btnContainer}>
                    <Button 
                        disabled={background.isLocal || isLoading } 
                        onClick={generateBackgroundHandler}
                    >
                        {isLoading ? "Fetching Background..." : "Generate Background"} <AutorenewIcon className={classes.renewIcon}/>
                    </Button>
                </div>
                <div className={classes.btnContainer}>
                    {error && <p className={classes.error}>Error: {error}</p>}
                    <Button disabled={background.isLocal || !background.isRandom} onClick={() => setBackground(true)}>Set as Default</Button>
                </div>
            </div>

        </>
    );
}
 
export default FetchBackgrounds;