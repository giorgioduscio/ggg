// IMPORTA API
function  showJSON(json) {
    console.log(json);

    return `<div>
        <h1>Mostra Json</h1>
        ${json.map(el=>{
            return `<p>${el.name}</p> `
        }).join('')}
    </div>`;
}

export function howJson() {
    fetch('./jsonEse/bands.json')
    .then(response=>response.json())
    .then((json)=> { 
        console.log(json);

        return `<div>
            <h1>Mostra Json</h1>
            ${json.map(el=>{
                return `<p>${el.name}</p> `
            }).join('')}
        </div>`; 
    })
}
