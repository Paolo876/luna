import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ComponentContainer from "../UI/ComponentContainer";
import classes from "./Weather.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Weather = React.memo(() => {

    const ref = useRef();   //for react-draggable
    const [data, setData] = useState(null);
    const [tempUnit, setTempUnit] = useState(JSON.parse(localStorage.getItem("setTempToCelsius")))
    const addedStyles = useSelector(state => state.settings.components).find(item => item.name === "weather").addedStyles;

    useEffect(() => {
        const fetchWeather = async () => {
            navigator.geolocation.getCurrentPosition( async ({coords}) => {
                const lat = coords.latitude;
                const long = coords.longitude;
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
                const data = await res.json();
                setData(data);
                })
            }
        fetchWeather();
    },[setData]);

    let tempContent;
    if(data){
        if(tempUnit) {
            tempContent = <p onClick={() => setTempUnit(!tempUnit)}>{Math.round(data.main.temp - 273.15)}<small>°C</small></p>
        } else{  
            tempContent = <p onClick={() => setTempUnit(!tempUnit)}>{Math.round((data.main.temp - 273.15) * 9/5 + 32)}<small>°F</small></p>
        }
        localStorage.setItem('setTempToCelsius', tempUnit);
    }

    return (  
        <ComponentContainer className={classes.container} style={addedStyles} ref={ref} id="weather">
            {data && 
                <div>
                    <p className={classes.header}><LocationOnIcon/> {`${data.name}, ${data.sys.country}`}</p>
                    <div className={classes.contentContainer} style={{fontWeight: addedStyles.fontWeight - 200}}>
                        <div className={classes.tempContainer}>
                            { tempContent }
                        </div>
                        <div className={classes.weatherIconContainer} >
                            {<img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>}
                            <p>{data.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            }
        </ComponentContainer>
    );
});
 
export default Weather;
