import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { backgroundActions } from "../store/backgroundSlice";
export const useBackgroundRedux = () => {
  const background = useSelector(state => state.background);
  const dispatch = useDispatch();
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const fetchBackground = async () => {
    setIsLoading(true);
    setError(null);

    try{
      const res = await fetch("https://source.unsplash.com/1920x1080/?wallpapers/");
        if(!res.ok){
          throw new Error('Request failed.');
        }
        dispatch(backgroundActions.setFetchedBackground(res.url))
    } catch(err) {
      setError("Failed to fetch data.")
    }

    setIsLoading(false);
  }

  return {
      background,
      isLoading,
      error,
      fetchBackground,
      generateLocalBackground: background => dispatch(backgroundActions.generateLocalBackground(background)),
      setBackground: toggle => dispatch(backgroundActions.setBackground(toggle)),
      setIsLocalBackground: toggle => dispatch(backgroundActions.setIsLocalBackground(toggle)),
      removeBackground: () => dispatch(backgroundActions.removeBackground()),
      changeFilter: filter => dispatch(backgroundActions.changeFilter(filter))

  }
}

