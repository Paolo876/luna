const SettingsButtonPosition = ({classes}) => {
    return (  
        <div className={classes.inputContainer}>
            <p>Settings Button Position: </p>
            <select id="settingsButtonSelection"  
                                    className={classes.selectionInput} 
                                    onChange={()=> {}}
                                    // value={currentFont ? currentFont : "'Inter', sans serif"}
                                    >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
            </select>
        </div>
    );
}
 
export default SettingsButtonPosition;