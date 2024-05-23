import { howAsync } from "./pages/howAsync.js";
import { howDomManip } from "./pages/howDomManip.js";
import { howManageDates } from "./pages/howMenageDates.js";
import { howRename } from "./pages/howRename.js";
import { howToArray } from "./pages/howToArray.js";
import { ordinations } from "./pages/ordinations.js";

let indexPage=5;
let main= document.getElementById('main')

switch (indexPage) {
    case 0:
        main.innerHTML= howRename()
        break;

    case 1:
        main.innerHTML= howToArray()
        break;

    case 2:
        main.innerHTML= ordinations()
        break;

    case 3:
        main.innerHTML= howManageDates()
        break;

    case 4:
        main.innerHTML= howDomManip()
        break;

    case 5:
        main.innerHTML= howAsync()
        break;

    default:
        break;
}

