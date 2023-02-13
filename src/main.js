import _ from 'lodash';
import print from './print';
import "./style.css"
import Icon from "./img.png"
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack !!!'], ' ');
    element.classList.add('font-color')
    const btn = document.createElement('button')
    btn.innerHTML = 'button'
    btn.onclick = print
    const img = new Image()
    img.src = Icon    
    element.appendChild(img);
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js',()=>{
        console.log("热更新启动了，文件刷新了");
    })
}