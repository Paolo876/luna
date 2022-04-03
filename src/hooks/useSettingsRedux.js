import { useSelector, useDispatch } from 'react-redux';
import { settingsActions } from '../store/settingsSlice';
import { useBackgroundRedux } from './useBackgroundRedux';
export const useSettingsRedux = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const { changeFilter } = useBackgroundRedux();

  const resetUISettings = () => {
    changeFilter({id: "reset"});
    dispatch(settingsActions.resetUISettings());
  }
  
  return {
      components: settings.components,
      location: settings.location,
      ui: settings.ui,
      editor: settings.editorMode,
      //location
      toggleGeolocation: toggle => dispatch(settingsActions.toggleGeolocation(toggle)),

      //editor
      saveComponentPositions: () => dispatch(settingsActions.saveComponentPositions()),
      toggleEditorMode: toggle => dispatch(settingsActions.toggleEditorMode(toggle)),
      resetComponentPositions: () => dispatch(settingsActions.resetComponentPositions()),

      //ui
      changeContainerColor: value => dispatch(settingsActions.changeContainerColor(value)),
      changePrimaryColor: value => dispatch(settingsActions.changePrimaryColor(value)),
      changeSettingsButtonPosition: value => dispatch(settingsActions.changeSettingsButtonPosition(value)),
      resetUISettings
  }
}