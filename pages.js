import { howAsync } from './pages/howAsync.js';
import { howDomManip } from './pages/howDomManip.js';
import { howManageDates } from './pages/howMenageDates.js';
import { howRename } from './pages/howRename.js';
import { howToArray } from './pages/howToArray.js';
import { ordinations } from './pages/ordinations.js';
import { howJson } from './pages/howJson.js';

const pages= [
    { path:'howAsync', element: howAsync() },
    { path:'howDomManip', element: howDomManip() },
    { path:'howManageDates', element: howManageDates() },
    { path:'howRename', element: howRename() },
    { path:'howToArray', element: howToArray() },
    { path:'ordinations', element: ordinations() },
    { path:'howJson', element: howJson() },
 ]

export default pages