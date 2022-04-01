import { useSelector, useDispatch } from 'react-redux';
import { settingsActions } from '../store/settingsSlice';

export const useSettingsRedux = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  return {
      components: settings.components,
      location: settings.location,
      ui: settings.ui,
      toggleGeolocation: toggle => dispatch(settingsActions.location.toggleGeolocation(toggle))
  }
}