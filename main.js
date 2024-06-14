document.getElementById("page").innerHTML=`
    <nav id="navbar"></nav>
    <div id="content"></div>
`;

// NAVBAR
import navbar from "./navbar.js";
navbar()

// PRESSIONE SUI PULSANTI
const navbarVar= document.querySelector("#navbar")
navbarVar.addEventListener("click", (e)=>{
    //fix CAMBIO PAGINA IN BASE AL VALORE DEL PULSANTE PREMUTO
    show( e.target.id ) 
})

// fix VISUALIZZAZIONE
import pages from "./pages.js";
function show(correntPage) {
    for (let i = 0; i < pages.length; i++){
        // SE L'INPUT DELLA FUNZIONE E' UGUALE AL NOME DELLA PAGINA
        if (correntPage== pages[i].path) console.log("pagina", pages[i].path);
    }
}
// TODO PAGINA PRINCIPALE
show("howAsync") 



import { mainArray } from "./datas/products.js";
console.log('mainArray', mainArray);