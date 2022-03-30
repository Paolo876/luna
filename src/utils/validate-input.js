const validateInput = (value, type) => {
    if(type !== "date" && value.trim().length === 0) {
        return false;
    }
    if(type === "text" && !value.match(/^[A-Za-z]*$/)){
        return false;
    } 
    if(type === "number" && !value.match(/^[0-9]+$/)){
        return false;
    } 
    if(type === "date"){
        if(value >= -2208960000000 && value < Date.now()){
            return true;
        } else {
            return false;
        }
    }
    if(type === "url" && !value.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)){
        return false;
    }
    
    return true;
}

export default validateInput;

