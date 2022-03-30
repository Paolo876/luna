import classes from "./Button.module.css";
import { useSelector } from "react-redux";
const Button = (props) => {
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor)
    return (  
        <button {...props} className={`${classes.button} ${props.className}`} style={{backgroundColor: currentPrimaryColor}}>{props.children}</button>
    );
}
 
export default Button;