import { useSelector } from 'react-redux';

import Background from './components/Background/Background';
import Settings from './components/Settings/Settings';

import classes from './App.module.css';
import NamePrompt from './components/Prompt/NamePrompt';
import LocationPrompt from './components/Prompt/LocationPrompt';
import ComponentsList from './components/ComponentsList';

function App() {
  const userName = useSelector(state => state.user.userInfo.name);
  const location = useSelector(state => state.settings.location).geolocationAllowed;
  const userNameNull = (userName === null || userName === "");
  const locationNull = (location === null || location === "");

  let prompt;
  if(userNameNull){
    prompt = <NamePrompt/>
  } else if(locationNull) {
    prompt = <LocationPrompt/>
  }

  return (
    <>
      {userNameNull || locationNull
      ? 
        <>{prompt}</>
      : 
      <>
        <Background  className={`${classes.App}`}/>
        <Settings/>
        <ComponentsList/>
      </>}

      <footer className={classes.footer}>
        <p>Designed and Developed by Paolo Bugarin. Copyright <sup>©</sup> 2022. All Rights Reserved.</p>
      </footer>
    </>

  );
}

export default App;


