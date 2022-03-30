import SubsettingsListContainer from "./SubsettingsListContainer";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import classes from "./Contact.module.css"
const Contact = () => {
    return (  
        <SubsettingsListContainer>
            <h3>Contact Me</h3>
            <div className={classes.content}>
                <p className={classes.description}>My name is Paolo. I am a Los Angeles based developer, currently a student at Pasadena City College working on 
                        getting a degree in Computer Information Systems Major in Software Development and Web Development.</p>
                <h5>Email:</h5>
                <p>paolo_bugarin@yahoo.com</p>

                <h5>Phone:</h5>
                <p>(323) 481 - 7852</p>

                <h5>Links:</h5>
                <div className={classes.linksContainer}>
                    <a href="https://www.facebook.com/paolobugarin19//" target="_blank" rel="noreferrer"><FacebookIcon/><span>Facebook</span></a>
                    <a href="https://github.com/Paolo876" target="_blank" rel="noreferrer"><GitHubIcon/><span>Github</span></a>
                    <a href="https://www.instagram.com/paolo_bugarin/" target="_blank" rel="noreferrer"><InstagramIcon/><span>Instagram</span></a>
                </div>
            </div>
        </SubsettingsListContainer>
    );
}
 
export default Contact;