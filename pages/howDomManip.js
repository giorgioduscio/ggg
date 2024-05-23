export function howDomManip() {
    return `
        <div id="hi">Hi HTML</div>
        <div id="bye">Bye HTML</div>
        <div id="attributi" data-test="GGGGGGGG" data-longer-name="DLN">attributi HTML</div>
        <div class="divClass">settaggio classe</div>
    `;
    
    //scrivere
    const body=document.body;
    body.append("1) Append");
    
    //creare elementi
    const A=document.createElement('div');
    body.append(A)
    //SCRIVERE IN UN ELEMENTO
    A.innerText='2) innerText'
    A.textContent='3) textContent'
    
    //MODIFICARE ELEMENTI HTML
    A.innerHTML=`<i>4) InnerHTML ${4+4}</i>`
    const strong=document.createElement('strong')
    strong.innerText='Hello word 2'
    
    //RIMUOVERE ELEMENTI
    const B=document.querySelector('#hi')
    //B.remove()
    
    //MODIFICARE ATTRIBUTI ELEMENTI
    const divAttributi=document.querySelector('#attributi')
    // console.log(divAttributi.getAttribute('title', 'ciao'))
    
    //MODIFICARE DATA ELEMENTI
    // console.log(divAttributi.dataset)
    // console.log(divAttributi.dataset.longerName)
    divAttributi.dataset.newNome='nuovo dataSet'
    
    //MODIFICARE CLASSE ELEMENTO
    const divClass=document.querySelector('.divClass')
    divClass.classList.add('nuovaClasse')
    divClass.classList.remove('divClass')
    divClass.classList.toggle('pippo',true)
    
    //MODIFICARE STILE ELEMENTO
    divClass.style.color='#ff0080'
}
