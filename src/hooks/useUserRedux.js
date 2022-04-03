import { useSelector, useDispatch } from 'react-redux';
import { userActions } from "../store/userSlice";
import capitalizeFirstLetter from '../utils/capitalize-first-letter';

export const useUserRedux = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return {
        name: user.name,
        birthday: user.birthday,
        setUserName: name => dispatch(userActions.setUserName(capitalizeFirstLetter(name))),
        setBirthday: value => dispatch(userActions.setBirthday(value))
    }
}