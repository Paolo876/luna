import { useUserRedux } from './hooks/useUserRedux';
import { useSettingsRedux } from './hooks/useSettingsRedux';
import Background from './components/Background/Background';
// import Settings from './components/Settings/Settings';

import classes from './App.module.css';
import NamePrompt from './components/Prompt/NamePrompt';
import LocationPrompt from './components/Prompt/LocationPrompt';
import ComponentsList from './components/ComponentsList';

function App() {
  const { name } = useUserRedux();
  const { location } = useSettingsRedux();

  if(!name || name === "") return <NamePrompt/>;
  if(!location.isGeolocationAllowed) return <LocationPrompt/>;
  
  return (
    <div>
      <Background  className={`${classes.App}`}/>
      {/* <Settings/>  */}
      <ComponentsList />
      <footer className={classes.footer}>
        <p>Designed and Developed by Paolo Bugarin. Copyright <sup>©</sup> 2022. All Rights Reserved.</p>
      </footer>
    </div>

  );
}

export default App;


