export default function navbar() {
    const navbarVar= document.querySelector("#navbar")
    navbarVar.innerHTML=`
        <span>
            <button id="primo">Pulsante</button>
            <button id="secondo">Pulsante</button>
            <button id="terzo">Pulsante</button>
        </span>
        <span>
            <button id="quarto">Pulsante</button>
            <button id="quinto">Pulsante</button>
        </span>
    `;

    // PRESSIONE SUI PULSANTI
    var result='';
    function handleClick(e) {
        result= e.target;
        console.log("event", e.target.id);
        navbarVar.className= result.id
    }
    navbarVar.addEventListener('click', handleClick)
}
