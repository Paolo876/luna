// powered by openweather api
const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeather, showError);
    }
}
  
const fetchWeather = async (position) => {
    const api = {
        url: "api.openweathermap.org/data/2.5/weather",
        key: "798a0ab38064e35c166c10c7e33472c6"
    }


    const res = await fetch(`${api.url}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api.key}`)
    const data = await res.json;


}
 
const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

// export default FetchWeather;