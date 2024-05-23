import { bandCard } from "./bandCard.js";

export function bandComponent(params) {
    // MOSTRA JSON
    fetch('bands.json')
        .then(response=>response.json())
        .then(function (json){

            // FIX
            document.body.innerHTML+=`
            <div class="bandComponent">
                <p> ${json!=null? "Risultato":"Errore"} </p>
    
                ${json.map((band)=>{ return `
                    <h1>${band.name}</h1>
                    <table> <tbody>
                        ${bandCard(band.members)}
                    </tbody> </table>
                `;}).join('')}
            </div>`;
        })
    
    
    // let URL='./bands.json';
    // let request=new XMLHttpRequest()
    // request.open('GET',URL)
    // request.response='json';
    // request.send();
    
    // request.onload= function(){
    //     const json= request.response;
    //     console.log('jsonXML', json);
    // }
}