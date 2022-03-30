import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice";

import Button from "../../../UI/Button";
import classes from "./Background.module.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const LocalBackgroundsList = () => {
    const imgListArray = [   {id: "default_1", isActive: false},
                    {id: "default_2", isActive: false},
                    {id: "default_3", isActive: false},
                    {id: "default_4", isActive: false},
                    {id: "default_5", isActive: false},
                ];
    // ******************
    // function requireAll(r) { r.keys().forEach(r); }              
    // requireAll(require.context('./modules/', true, /\.js$/));       
      
    const images = require.context("../../../../assets", true);
    const [imgList, setImgList] = useState(imgListArray);
    const bg = useSelector(state => state.settings.background);
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor);

    const dispatch = useDispatch();

    const imgListItems = imgList.map(item => <li key={item.id}><button><img 
                                src={images(`./bg_${item.id}_thumb.jpg`)} 
                                alt={item.id}
                                onClick={()=> setActiveImgHandler(item.id)}
                                className={`${(item.isActive ? classes.selectedBg : "")}`}
                                /></button></li>);

    const setActiveImgHandler = (id) => {
        dispatch(settingsActions.generateBackground(id))

        setImgList(prevState => {
            prevState.filter(item => item.isActive = false);

            const itemIndex = prevState.findIndex(item => item.id === id);
            prevState[itemIndex].isActive = true;
            const updatedItems = [...prevState];
            return updatedItems;
        })
    };
    
    const findActiveImg = imgList.find(item => item.isActive === true);
    let isActiveImg;
    let isCurrentlyActiveImg = false;

    let localBgSource = JSON.parse(localStorage.getItem('backgroundConfig')).source.substr(17,9);
    if(findActiveImg != null){
        isActiveImg = true;
        if(bg.isSet == true && findActiveImg.id == localBgSource){
            isCurrentlyActiveImg = true;
            isActiveImg = false
        }

    }
    const setDefaultBgHandler = (id) => {
        setActiveImgHandler(id)
      dispatch(settingsActions.setBackground());
    }

    const containerClickHandler = () => {
        if(!bg.isLocalBg) {
            dispatch(settingsActions.generateBackground())
            dispatch(settingsActions.setBackground(false))
            dispatch(settingsActions.setIsLocalBackground(true))
        }; 
    }
    return (  
        <div className={`${classes.backgroundSelectionContainer} ${bg.isLocalBg && classes.selectedCategory}`} onClick={containerClickHandler}>
        <p>Select From Saved Backgrounds: {bg.isLocalBg && <span className={classes.icon}><CheckCircleOutlineIcon style={{color: currentPrimaryColor}}/></span>}</p>
        <ul className={classes.backgroundSelectionList}>
            {imgListItems}
        </ul>
        <div className={classes.btnContainer}>
                {isCurrentlyActiveImg && <p><em>Currently set as default*</em></p>}
                <Button disabled={!isActiveImg || !bg.isLocalBg} onClick={() => setDefaultBgHandler(findActiveImg.id)}>Set as Default</Button>
            </div>
    </div>
    );
}
 
export default LocalBackgroundsList;