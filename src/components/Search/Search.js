import { useSelector } from "react-redux";
import { useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ComponentContainer from "../UI/ComponentContainer";
import Input from '../UI/Input';


import classes from "./Search.module.css";

const Search = () => {
    const ref = useRef();
    const addedStyles = useSelector(state => state.settings.components).find(item => item.name === "search").addedStyles;
    const inputRef = useRef();
    const submitHandler = (e) => {
      e.preventDefault();
    }

    return (  
                <ComponentContainer className={classes.search} ref={ref} id="search"  style={addedStyles}>
                    <form onSubmit={submitHandler}>
                        <Input type="text" placeholder="Google Search" ref={inputRef} className={classes.input} />
                    </form>
                    <SearchIcon className={classes.searchIcon}/>
                </ComponentContainer>
    );
}
 
export default Search;