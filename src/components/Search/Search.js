import { useRef } from "react";
import { useSettingsRedux } from '../../hooks/useSettingsRedux';
import SearchIcon from '@mui/icons-material/Search';
import ComponentContainer from "../UI/ComponentContainer";
import Input from '../UI/Input';


import classes from "./Search.module.css";

const Search = () => {
    const ref = useRef();
    const { components } = useSettingsRedux();
    const addedStyles = components.find(item => item.name === "search").addedStyles;
    const inputRef = useRef();
    
    const submitHandler = (e) => {
      e.preventDefault();

      window.location.href = `https://www.google.com/search?q=${inputRef.current.value}`;
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