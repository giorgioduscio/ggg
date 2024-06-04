import pages from './pages.js';

export default function navbar() {
    document.querySelector("#navbar").innerHTML=`
        <div class="dropdown">
            <button>Documenti</button>
            
            <div>
            ${pages.map(el=>{
                return `<button id=${ el.path }>${ el.path }</button>`
            }).join('')}
            </div>
        </div>
    `;
}
