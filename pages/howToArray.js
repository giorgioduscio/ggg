export function howToArray() {

    // optimize INNERHTML
    return `
        <header>
            <h1>Lista</h1>
            <input type="text" id="input">
            <button id="add">Aggiungi</button>
        </header>
        <section>
            <article>
                <h1>Metodo forHeach</h1>
                <ol id="listForHeach"></ol>
            </article>
            <article>
                <h1>Metodo innetHtml</h1>
                <table id="listInnetHtml"></table>
            </article>
        </section>
    `;

    // TODO  MOSTRA LOSTA                                          -
    const listForHeach=document.querySelector('#listForHeach')
    let arrayList=["Scarpe","Banane","Arancie"]
    
    // OUTPUT showForHeach
    function showForHeach(){//Quando viene richiamata
        listForHeach.innerHTML=''//Ricomincia la listForHeach da capo
        arrayList.forEach((items) => {  
            let li=document.createElement('li'); //crea elemento
            li.innerHTML=items//dai valore all'elemento
            listForHeach.appendChild(li)//mettilo dentro listForHeach
        });
    }

    // OUTPUT showInnerHtml
    const listInnetHtml = document.querySelector("#listInnetHtml")
    function showInnerHtml(arrayList) {//Quando viene richiamata
        function elementi(arrayList){
            //inizializza la stringa
            let items='';
            for(i=0;i<arrayList.length;i++){
                //aggiungi gli elementi dell'array alla stringa
                items+=`<tr>
                    <td>${i}</td>
                    <td><button class="canc${i}">Canc</button></td> 
                    <td>${arrayList[i]}</td>
                </tr>`;
            }
            //Manda la stringa
            return items;
        }
        //ripristina
        listInnetHtml.innerHTML="";
        //aggiungi elemento nell'elemento
        listInnetHtml.innerHTML=`<tbody>${elementi(arrayList)}</tbody>`
    }
    showInnerHtml(arrayList)


    //TODO AGGIUNGI ELEMENTO ALLA LISTA
    const input=document.querySelector('#input')

    function updateList(input){
        if (input.value!='') {
            //AGGIUNGI IL VALORE DI INPUT ALLA LISTA
            arrayList.push(input.value)
            input.placeholder=`${input.value} aggiunto`;
            input.value='';

            showInnerHtml(arrayList)
        }
    }

    
    const addButton=document.querySelector('button#add'); 

    addButton.addEventListener('click',function(){
            updateList(input)
    })
    input.addEventListener('change',function(){
        updateList(input)
    })

    // TODO CANCELLA ELEMENTO DALLA LISTA
    // QUANDO PREMI CANCELLA=> AGGIUNGI CLASSE DA CANCELLARE =>ELIMINA L'ELEMENTO
    // 1) CANCELLARE LA CLASSE
    // 2) DARE UN ID AD OGNI ELEMENTO
    listInnetHtml.addEventListener('click',function(event){
        if (event.target.className=='canc') {
            console.log(event.target.className);
            event.target
            
        }
    })

    // OPTIMIZE CANCELLA ELEMENTO
    // INDICE PULSANTI = INDICE ARRAY
    const cancButton=document.querySelectorAll('#listInnetHtml button.canc')
    // console.log('cancButton',cancButton);

    listInnetHtml.addEventListener('click',function (event) { // fix
        console.log('event',event.target)
    })
}
    