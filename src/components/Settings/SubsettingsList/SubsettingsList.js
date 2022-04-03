import General from "./General";
import EditorMode from "./EditorMode";
import Background from "./BackgroundSubsetting/Background";
import CustomizeComponent from "./CustomizeComponent";
// import Bookmarks from "./Bookmarks/Bookmarks";
import ClearAll from "./ClearAll";
import About from "./About";
import CustomizeUI from "./CustomizeUI/CustomizeUI";
import Contact from "./Contact";

const SubsettingsList = (props) => {
    let loadComponent;
    switch (props.selectedSubsetting) {
        case ("editor-subsetting") :
            loadComponent = <EditorMode/>
            break;
        case ("background-subsetting") :
            loadComponent = <Background/>
            break;
        case ("customize-component-subsetting") :
            loadComponent = <CustomizeComponent/>
            break;
        case ("customize-ui-subsetting") :
            loadComponent = <CustomizeUI/>
            break;
        // case ("bookmarks-subsetting") :
        //     loadComponent = <Bookmarks/>
        //     break;
        case ("clear-all-subsetting") :
            loadComponent = <ClearAll/>
            break;
        case ("about-subsetting") :
            loadComponent = <About/>
            break;
        case ("contact-subsetting") :
            loadComponent = <Contact/>
            break;
        default :
            loadComponent = <General/>
            break;
    }
    
    return (  
        <div>
            {loadComponent}
        </div>
    );
}
 
export default SubsettingsList;