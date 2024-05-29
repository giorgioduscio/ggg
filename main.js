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
})
// VISUALIZZAZIONE
import pages from "./pages.js";
console.log('pagina', pages[0])