import pages from './pages.js';

export default function navbar() {
    document.querySelector("#navbar").innerHTML=`
        <span>
        ${pages.map(el=>{
            return `<button id=${el.path}>${el.path}</button>`
        }).join('')}
        </span>
    `;
}
