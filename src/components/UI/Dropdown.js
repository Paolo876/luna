import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classes from "./Dropdown.module.css"
const Dropdown = (props) => {

    return (  
        <div className={classes.dropdown}>
            <p className={classes.dropdownBtn}>{props.defaultSelected} <KeyboardArrowDownIcon/></p>
            <ul>
                {props.children}
            </ul>
        </div>

    );
}
 
export default Dropdown;