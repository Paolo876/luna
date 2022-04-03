import { useSettingsRedux } from "../../../../hooks/useSettingsRedux";

const ChangePrimaryColor = ({classes}) => {
    const { ui, changePrimaryColor } = useSettingsRedux();
    const { primaryColor } = ui;

    return (  
        <div className={classes.inputContainer}>
            <p>Change Primary Color: </p>
            <input 
                type="color" 
                className={classes.colorSelectionBtn}
                value={primaryColor}
                onChange={ e => changePrimaryColor(e.target.value)}
            />
        </div>

    );
}
 
export default ChangePrimaryColor;