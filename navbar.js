import pages from './pages.js';

export default function navbar() {
    const navbarVar= document.querySelector("#navbar")
    navbarVar.innerHTML=`
        <span>
        ${pages.map(el=>{
            return `<button id=${el.path}>${el.path}</button>`
        }).join('')}
        </span>
    `;

    // PRESSIONE SUI PULSANTI
    var result='';
    function handleClick(e) {
        result= e.target;
        console.log("event", e.target);
        navbarVar.className= result
    }
    navbarVar.addEventListener('click', handleClick)
}
