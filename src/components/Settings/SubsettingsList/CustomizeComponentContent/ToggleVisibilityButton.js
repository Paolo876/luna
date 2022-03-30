const ToggleVisibilityButton = (props) => {
    return (  
        <div className={props.classes.container}>
            <p>Show component:</p>
            <div className={props.classes.checkboxContainer}>
                <input  type="checkbox" {...props.inputAttributes}/>
                <label htmlFor={props.forValue}></label>
            </div>
        </div>

    );
}
 
export default ToggleVisibilityButton;