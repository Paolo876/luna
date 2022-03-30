import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { settingsActions } from "../../store/settingsSlice";

import SettingsModal from "./SettingsModal";
import SettingsIcon from '@mui/icons-material/Settings';
import classes from "./Settings.module.css"
import Modal from '../UI/Modal';
import { Fab } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';


const Settings = () => {
    const dispatch = useDispatch();

    const editorModeIsActive = useSelector(state => state.settings.editorMode).isActive;
    const containerColor = useSelector(state => state.settings.ui.containerColor);
    const [showSettings, setShowSettings] = useState(false);

    return (  
        <> {editorModeIsActive ?
                <div className={classes.editorContainer}>
                    <Fab size="small"  onClick={() => dispatch(settingsActions.saveComponentPositions())}><CheckIcon/></Fab>
                    <Fab size="small" onClick={() => dispatch(settingsActions.toggleEditorMode(false))}><ClearIcon/></Fab>
                    <Fab size="small" onClick={() => dispatch(settingsActions.resetComponentPositions())}><p>Reset</p></Fab>
                </div>
            :
            <>
                <button onClick={()=> setShowSettings(prevState => !prevState)} className={classes.button}><SettingsIcon/></button>
                {showSettings && <Modal hideModalHandler={()=> setShowSettings(prevState => !prevState)} 
                                        className={classes.modals}  
                                        style={{background: containerColor}}
                                        > <SettingsModal/> </Modal>}
            </>
            }
        </>

    );
}
 
export default Settings;