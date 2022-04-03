import { useState } from "react"
import { useBackgroundRedux } from "../../../../hooks/useBackgroundRedux";
import { useSettingsRedux } from "../../../../hooks/useSettingsRedux";

import Button from "../../../UI/Button";
import classes from "./Background.module.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const imgListArray = [
    {id: "default_1", isActive: false},
    {id: "default_2", isActive: false},
    {id: "default_3", isActive: false},
    {id: "default_4", isActive: false},
    {id: "default_5", isActive: false},
];
const LocalBackgroundsList = () => {
    const images = require.context("../../../../assets", true);
    const [imgList, setImgList] = useState(imgListArray);
    const { background, generateLocalBackground, setBackground, setIsLocalBackground } = useBackgroundRedux();
    const { ui } = useSettingsRedux();
    const currentPrimaryColor = ui.primaryColor;

    const setActiveImgHandler = (id) => {
        generateLocalBackground(id);
        setImgList(prevState => {
            prevState.filter(item => item.isActive = false);
            const itemIndex = prevState.findIndex(item => item.id === id);
            prevState[itemIndex].isActive = true;
            return [...prevState];
        })
    };
    
    const setDefaultBgHandler = (id) => {
        setActiveImgHandler(id)
        setBackground();
    }

    const containerClickHandler = () => {
        if(!background.isLocal) {
            generateLocalBackground();
            setBackground(false);
            setIsLocalBackground(true);
        }; 
    }
   
    const findActiveImg = imgList.find(item => item.isActive === true);
    let isActiveImg;
    let isCurrentlyActiveImg = false;

    let localBgSource = JSON.parse(localStorage.getItem('backgroundConfig')).source;
    if(localBgSource) localBgSource = JSON.parse(localStorage.getItem('backgroundConfig')).source.substr(17,9);
    

    if(findActiveImg != null){
        isActiveImg = true;
        if(!background.isRandom == true && findActiveImg.id == localBgSource){
            isCurrentlyActiveImg = true;
            isActiveImg = false
        }
    }

    const imgListItems = imgList.map(item => (
        <li key={item.id}>
            <button>
                <img 
                    src={images(`./bg_${item.id}_thumb.jpg`)} 
                    alt={item.id}
                    onClick={()=> setActiveImgHandler(item.id)}
                    className={`${(item.isActive ? classes.selectedBg : "")}`}
                />
            </button>
        </li>));
    return (  
        <div className={`${classes.backgroundSelectionContainer} ${background.isLocal && classes.selectedCategory}`} onClick={containerClickHandler}>
        <p>Select From Saved Backgrounds: {background.isLocal && <span className={classes.icon}><CheckCircleOutlineIcon style={{color: currentPrimaryColor}}/></span>}</p>
        <ul className={classes.backgroundSelectionList}>
            {imgListItems}
        </ul>
        <div className={classes.btnContainer}>
                {isCurrentlyActiveImg && <p><em>Currently set as default*</em></p>}
                <Button disabled={!isActiveImg || !background.isLocal} onClick={() => setDefaultBgHandler(findActiveImg.id)}>Set as Default</Button>
            </div>
    </div>
    );
}
 
export default LocalBackgroundsList;