import { useDispatch } from "react-redux";
import { settingsActions } from "../../../store/settingsSlice";

import Button from "../../UI/Button";
import SubsettingsListContainer from "./SubsettingsListContainer";

const EditorMode = () => {
    const dispatch = useDispatch();
    
    return (  
        <SubsettingsListContainer>
            <h3>Editor Mode</h3>
            <p>Editor Mode allows you to change the position and size of each components to your desired preference.</p>
            <Button onClick={() => dispatch(settingsActions.toggleEditorMode(true))}>Enter Editor Mode</Button>
        </SubsettingsListContainer>
    );
}
 
export default EditorMode;