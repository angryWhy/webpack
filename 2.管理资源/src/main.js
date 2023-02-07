import _ from 'lodash';
import "./style.css"
import Icon from "./img.png"
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack !!!'], ' ');
    element.classList.add('font-color')

    const img = new Image()
    img.src = Icon    
    element.appendChild(img);
    return element;
}

document.body.appendChild(component());