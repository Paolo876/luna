import SubsettingsListContainer from "./SubsettingsListContainer";

import classes from "./About.module.css";

const About = () => {
    return (  
        <SubsettingsListContainer className={classes.about}>
            <h3>About</h3> 
            <div className={classes.content}>
                <p>Luna is a browser homepage replacement that gives the user the freedom of 
                    customizing the interface and all its components based on their own preference. </p>


                <ul>
                    Technologies & API Used:
                    <li>ReactJS</li> 
                    <li>React-Redux (reduxjs toolkit)</li> 
                    <li>React-Draggable</li> 
                    <li>React-styled-components</li> 
                    <li>Material UI</li> 
                    <li>Unsplash API</li> 
                    <li>Openweathermap API</li> 
                    <li>Quotable API by Luke Peavey</li> 
                    {/* <li>URL Metadata API by Jamie Pennell</li>  */}
                </ul>
            </div>
        </SubsettingsListContainer>
    );
}
 
export default About;