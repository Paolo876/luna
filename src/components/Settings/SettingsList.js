import classes from "./SettingsList.module.css";

const settingsList = [
    {name: "Editor Mode",           id: "editor-subsetting"},
    {name: "General",               id: "general-subsetting"},
    {name: "Background",            id: "background-subsetting"},
    {name: "Customize Components",  id: "customize-component-subsetting"},
    {name: "Customize Interface",   id: "customize-ui-subsetting"},
    {name: "Manage Bookmarks",      id: "bookmarks-subsetting"},
    {name: "Clear All Settings",    id: "clear-all-subsetting"},
    {name: "About",                 id: "about-subsetting"},
    {name: "Contact",               id: "contact-subsetting"},
];

const SettingsList = (props) => {
    const selected = props.selected;

    return (  
        <ul className={classes.settingsList}>
            {settingsList.map(item => 
                (<li key={item.id}>
                    <button onClick={()=> props.toggleSubsetting(item.id)} className={selected === item.id ? classes.active : ""}>{item.name}</button>
                </li>))}
        </ul>
    );
}
 
export default SettingsList;