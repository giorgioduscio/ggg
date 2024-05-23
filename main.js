import { navbar } from "./navbar.js";

import { howAsync } from "./pages/howAsync.js";
import { howDomManip } from "./pages/howDomManip.js";
import { howManageDates } from "./pages/howMenageDates.js";
import { howRename } from "./pages/howRename.js";
import { howToArray } from "./pages/howToArray.js";
import { ordinations } from "./pages/ordinations.js";

//TODO ROUTER
function selectPage() {
    // CREA NAVBAR
    // PRENDI UN DATO
    
    // IL DATO RITORNA
    return 0
}

function router(indexPage) {
    switch (indexPage) {
        case 0:
            return howRename()
    
        case 1:
            return howToArray()
    
        case 2:
            return ordinations()
    
        case 3:
            return howManageDates()
    
        case 4:
            return howDomManip()
    
        case 5:
            return howAsync()
    
        default:
            return `
                <h1>Errore 404</h1>
                <p>Nessuna corrispondenza per '${indexPage}'</p>
            `;
    }
}

document.getElementById('router').innerHTML= router( selectPage() );


// IMPORTA API
function  showJSON(json) {
    console.log(json);

    return `<div>
        ${json.map(el=>{
            return `<p>${el.name}</p> `
        }).join('')}
    </div>`;
}

function catchJSON() {
    fetch('./jsonEse/bands.json')
    .then(response=>response.json())
    .then((json)=> console.log( showJSON(json)) )
}
catchJSON()