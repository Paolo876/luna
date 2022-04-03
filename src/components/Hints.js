import React, { useState } from 'react'
import Modal from "./UI/Modal";
import classes from "./Hints.module.css";
import CloseIcon from '@mui/icons-material/Close';
const hintsList = [
    "Change the position and size of a component by going to Settings > Editor Mode.",
    "Choose wallpapers from the database or from unsplash.com by going to Settings > Background.",
    "Show or hide a component by going to Settings > Customize Components.",
    "Change the style of a component by going to Settings > Customize Components.",
    "Change the wallpaper's brightness, contrast or saturation by going to Settings > Customize Interface.",
    "Change the color scheme of the interface by going to Settings > Customize Interface.",
];

const Hints = React.memo(() => {
  const [ showHints, setShowHints ] = useState(Math.floor(Math.random() * 2) === 1);  //only show hints 50% of the time

  return (
      <>
        {showHints && 
            <Modal hideModalHandler={() => setShowHints(false)}>
                <div className={classes.hints}>
                    <p>Hint: {hintsList[Math.floor(Math.random() * hintsList.length)]}</p>
                    <p className={classes.disableText}>(Disable hints by going to Settings > Customize Interface)</p>
                    <button onClick={() => setShowHints(false)}><CloseIcon/></button>

                </div>
            </Modal>
        }
      </>

  )
})

export default Hints;
