import { useSelector } from 'react-redux';
import { useState } from "react";
import classes from "./BookmarkItem.module.css";
import styled from 'styled-components';

const Img = styled.img`
    &:hover {
        border: 2px solid ${(props) => props.currentPrimaryColor};
  }
`;

const BookmarkItem = (props) => {
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor);
    const [showTooltip, setShowTooltip] = useState(false);


    return (  
        <li key={props.id} className={classes.listItem}>
            <a href={props.url} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} >
                <Img src={props.favicon} alt={props.id} currentPrimaryColor={currentPrimaryColor}/>
            </a>
            {showTooltip && <p className={classes.title}>{props.title}</p>}
        </li>
    );
}
 
export default BookmarkItem;