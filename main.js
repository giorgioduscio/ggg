import { howAsync } from "./pages/howAsync.js";
import { howDomManip } from "./pages/howDomManip.js";
import { howManageDates } from "./pages/howMenageDates.js";
import { howRename } from "./pages/howRename.js";
import { howToArray } from "./pages/howToArray.js";
import { ordinations } from "./pages/ordinations.js";

function router(indexPage) {
    switch (indexPage) {
        case 0:
            return howRename()
            break;
    
        case 1:
            return howToArray()
            break;
    
        case 2:
            return ordinations()
            break;
    
        case 3:
            return howManageDates()
            break;
    
        case 4:
            return howDomManip()
            break;
    
        case 5:
            return howAsync()
            break;
    
        default:
            return `<h1>Nessuna corrispondenza per ${indexPage}</h1>`;
            break;
    }
}

let indexPage= 10;
document.getElementById('router').innerHTML= router(indexPage);

