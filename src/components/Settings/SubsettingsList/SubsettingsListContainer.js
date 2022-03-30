import classes from "./SubsettingsListContainer.module.css";

const SubsettingsListContainer = (props) => {
    return (  
        <div className={`${classes.subsettingsList} ${props.className}`}>
            {props.children}
        </div>
    );
}
 
export default SubsettingsListContainer;