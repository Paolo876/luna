import { useSelector, useDispatch } from "react-redux";
import { backgroundActions } from "../store/backgroundSlice";
import useHttp from "./use-http";
export const useBackgroundRedux = () => {
  const background = useSelector(state => state.background);
  const dispatch = useDispatch();
  const { sendRequest, isLoading, error } = useHttp();
  
  const generateLocalBackground = background => dispatch(backgroundActions.generateLocalBackground(background));

  const fetchBackground = () => {
    sendRequest({url: "https://source.unsplash.com/1920x1080/?wallpapers"}, data => dispatch(backgroundActions.setFetchedBackground(data)))
  }
  return {
      background,
      generateLocalBackground,
      fetchBackground
  }
}

