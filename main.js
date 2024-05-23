import { navbar } from "./navbar.js"; 

import { howAsync } from "./pages/howAsync.js";
import { howDomManip } from "./pages/howDomManip.js";
import { howManageDates } from "./pages/howMenageDates.js";
import { howRename } from "./pages/howRename.js";
import { howToArray } from "./pages/howToArray.js";
import { ordinations } from "./pages/ordinations.js";
import { catchJSON } from "./pages/showJson.js";


function router(indexPage) {
    switch (indexPage) {
        case 0: return howRename()
        case 1: return howToArray()
        case 2: return ordinations()
        case 3: return howManageDates()
        case 4: return howDomManip()
        case 5: return howAsync()
        case 6: return catchJSON()
    
        default:
            return `
                <h1>Errore 404</h1>
                <p>Nessuna corrispondenza per '${indexPage}'</p>
            `;
    }
}


//COMPONENTI HTML
const switchPage= document.querySelector('#switchPage')
const page= document.querySelector('#page')


switchPage.addEventListener('change', ()=>{
    var indexPage= Number(switchPage.value)
    page.innerHTML= router( indexPage ) ;
})


var indexPage=switchPage.value=0
page.innerHTML= router( indexPage ) ;