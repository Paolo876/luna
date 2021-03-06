import { useRef } from "react";
import { useUserRedux } from "../../../hooks/useUserRedux"
import SubsettingsListContainer from "./SubsettingsListContainer";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

import validateInput from "../../../utils/validate-input";

const General = () => {
    const { birthday, name, setBirthday, setUserName } = useUserRedux();
    const nameInputRef = useRef();
    const birthdateRef = useRef();
    
    let birthdayInputValue;
    if(birthday) birthdayInputValue = new Date(+birthday).toISOString().substr(0,10);

    const submitHandler = (e) => {
      e.preventDefault();
      const nameInput = nameInputRef.current.value;
      const bdayInput = Date.parse(birthdateRef.current.value);

      if(nameInput !== name && validateInput(nameInput, "text")) setUserName(nameInput);
      if(bdayInput !== birthday && validateInput(bdayInput, "date")) setBirthday(bdayInput);
    }

    return (  
        <SubsettingsListContainer>
            <h3>General</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="nameInput">Change Display Name</label>
                    <Input type="text" placeholder={name} id="nameInput" name="nameInput" ref={nameInputRef}/>
                </div>
                <div>
                    <label htmlFor="birthDateInput">Change Birthday <small>(Optional)</small></label>
                    <Input type="date" id="birthDateInput" name="birthDateInput" ref={birthdateRef} defaultValue = {birthdayInputValue}/>
                </div>
                <Button onClick={submitHandler}>Save Changes</Button>
            </form>
            <div>
                <p>To maximize the user experience of Luna and all its features, Sign up or Log in below.  </p>
                <Button>Sign Up / Log in</Button>
            </div>
        </SubsettingsListContainer>
    );
}
 
export default General;