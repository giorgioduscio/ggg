document.getElementById("page").innerHTML=`
    <nav id="navbar"></nav>
    <div id="content"></div>
`;

import navbar from "./navbar.js";
navbar()

// PRESSIONE SUI PULSANTI
const navbarVar= document.querySelector("#navbar")
navbarVar.addEventListener("click", (e)=>{
    navbarVar.className= e.target.id
    // CAMBIO PAGINA
    show( navbarVar.className )
})

// VISUALIZZAZIONE
import pages from "./pages.js";
function show(correntPage) {
    for (let i = 0; i < pages.length; i++){
        if (correntPage== pages[i].path) console.log("pagina", pages[i].path);
    }
}
show("howAsync")