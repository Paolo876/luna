import { useUserRedux } from './hooks/useUserRedux';
import { useSettingsRedux } from './hooks/useSettingsRedux';
import Background from './components/Background/Background';
import Settings from './components/Settings/Settings';
import Hints from './components/Hints';

import classes from './App.module.css';
import NamePrompt from './components/Prompt/NamePrompt';
import LocationPrompt from './components/Prompt/LocationPrompt';
import ComponentsList from './components/ComponentsList';

function App() {
  const { name } = useUserRedux();
  const { location, ui } = useSettingsRedux();

  if(!name || name === "") return <NamePrompt/>;
  if(location.isGeolocationAllowed === null) return <LocationPrompt/>;    //prompt if null only
  
  return (
    <div>
      <Background  className={`${classes.App}`}/>
      <Settings/> 
      <ComponentsList />
      {ui.isHintsShown && <Hints primaryColor={ui.primaryColor}/>}
      <footer className={classes.footer}>
        <p>Designed and Developed by Paolo Bugarin. Copyright <sup>©</sup> 2022. All Rights Reserved.</p>
      </footer>
    </div>

  );
}

export default App;


