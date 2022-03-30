import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { settingsActions } from "../../store/settingsSlice";
import ComponentContainer from "../UI/ComponentContainer";
import classes from "./Weather.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Weather = () => {

    const ref = useRef();   //for react-draggable
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [tempUnit, setTempUnit] = useState(JSON.parse(localStorage.getItem("setTempToCelsius")))
    localStorage.setItem('setTempToCelsius', tempUnit);
    const addedStyles = useSelector(state => state.settings.components).find(item => item.name === "weather").addedStyles;

    useEffect(() => {
        const fetchWeather = async () => {
            const api = {
                url: "https://api.openweathermap.org/data/2.5/weather",
                key: "798a0ab38064e35c166c10c7e33472c6"
            }
            navigator.geolocation.getCurrentPosition( async ({coords}) => {
                const lat = coords.latitude;
                const long = coords.longitude;
                const res = await fetch(`${api.url}?lat=${lat}&lon=${long}&appid=${api.key}`);
                const data = await res.json();
                setData(data);
                })
            }
        fetchWeather();
    },[setData]);


    let content;
    let tempContent;
    if(data){
        if(tempUnit) {
            tempContent = <p onClick={() => setTempUnit(!tempUnit)}>{Math.round(data.main.temp - 273.15)}<small>°C</small></p>
        } else{  
            tempContent = <p onClick={() => setTempUnit(!tempUnit)}>{Math.round((data.main.temp - 273.15) * 9/5 + 32)}<small>°F</small></p>
        }

        content = 
            <div>
                <p className={classes.header}><LocationOnIcon/> {`${data.name}, ${data.sys.country}`}</p>
                <div className={classes.contentContainer} style={{fontWeight: addedStyles.fontWeight - 200}}>
                    <div className={classes.tempContainer}>
                        {tempContent}
                    </div>
                    <div className={classes.weatherIconContainer} >
                        {<img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>}
                        <p>{data.weather[0].description}</p>
                    </div>
                </div>
            </div>;  

    }

    return (  
        <ComponentContainer className={classes.container} style={addedStyles} ref={ref} id="weather">
            {content}
        </ComponentContainer>
    );
};
 
export default Weather;
