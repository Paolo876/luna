import { useSettingsRedux } from "../../../../hooks/useSettingsRedux";

const SettingsButtonPosition = ({classes}) => {
    const { ui, changeSettingsButtonPosition } = useSettingsRedux();
    return (  
        
        <div className={classes.inputContainer}>
            <p>Settings Button Position: </p>
            <select 
                id="settingsButtonSelection"  
                className={classes.selectionInput} 
                onChange={ e => changeSettingsButtonPosition(e.target.value)}
                value={ui.settingsPosition}
            >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
            </select>
        </div>
    );
}
 
export default SettingsButtonPosition;