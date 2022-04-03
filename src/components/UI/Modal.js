import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const Backdrop = props => <div className={classes.backdrop} onClick={props.onHide}></div>;

const ModalOverlay = (props) => (
    <div className={props.className} style={props.style}>
            {props.children}
    </div>
);

const Modal = (props) => {
    return (  
        <>
            {ReactDOM.createPortal(<Backdrop onHide={props.hideModalHandler}/>, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay className={props.className} style={props.style}>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </>
    );
}
 
export default Modal;