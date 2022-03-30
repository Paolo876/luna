
import { useDispatch } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice";
const fontsList = [
    {value: "'Inter', sans serif", label: "Inter", selected: false},
    {value: "'Lato', sans-serif", label: "Lato", selected: false},
    {value: "'Montserrat', sans-serif", label: "Montserrat", selected: false},
    {value: "'Roboto', sans-serif", label: "Roboto", selected: false},
    {value: "'Source Sans Pro', sans-serif", label: "Source Sans Pro", selected: false},
];

const ChangeFontSelection = ({data}) => {
    let currentFont;
    if(data.selected){
        currentFont = data.selected.fontFamily
    }

    const dispatch = useDispatch();
    return (  
        <div className={data.classes.container}>
            <p>Change font:</p>
            <select id="fontSelection"  disabled={data.disabled} 
                                        className={data.classes.selectionInput} 
                                        onChange={(e)=> dispatch(settingsActions.changeStyle({name: data.name, id: "font", font: e.target.value}))}
                                        value={currentFont ? currentFont : "'Inter', sans serif"}
                                        >
                {fontsList.map(item => <option value={item.value} key={item.label}>{item.label}</option>)}

            </select>
        </div>
    );
}
 
export default ChangeFontSelection;