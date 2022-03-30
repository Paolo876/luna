const getTranslateValue = (string) => {

    let x = string.indexOf("(");
    let x1 = string.indexOf(",");
    let y = string.indexOf(",");
    let y1 = string.indexOf(")");

    let xValue = parseInt(string.slice(x+1,x1-2));
    let yValue = parseInt(string.slice(y+1,y1-1));


  return {x: xValue, y: yValue};
}

export default getTranslateValue
  