export function howAsync() {
    
    console.log(
        document.querySelector("#content")

    );
/*    
    .innerHTML=`
        <section>
            <article>
                <p>HHH</p>
                <p>HHH</p>
                <p>HHH</p>
                <h4>HHH</h4>
                <button id="P">Invio</button>
            </article>
        </section>
    `;
    

    // todo Mostra
    const array=document.querySelectorAll('p');  
    function mostra(valore,index) { 
        array[index].innerHTML=valore; 
    }
    
    // todo Asynchronous Callback
    function calcolo(num1, num2, Callback) {
        let somma=`CallBack: Somma = ${num1 + num2}`;
        Callback(somma,0); // Questa non esiste
    }
    calcolo(5, 5, mostra); //fix
    
    // todo Promises
    let myPromise = new Promise(  
        function(Resolve, Reject) {
            let num = 0;
            if (num == 0) {
                Resolve("Promise: Result");
            } else {
                Reject("Promise: Error");
            }
        }
    );
    
    myPromise.then(
        function(value) { mostra(value,1); },// fix
        function(error) { mostra(error,1); } 
    );
    
    // todo async
    async function asyncFunction() {
        return "Async: Output";
    }
    asyncFunction().then(
        function(value) { mostra(value,2); }, //fix
        function(error) { mostra(error,2); }
    );
    
    // todo await
    async function myDisplay() {
        let myPromise = new Promise(
            function(resolve, reject) {
                resolve("Await: resolve output");
            }
        );
        document.querySelector("h3").innerHTML = await myPromise;
    }
    myDisplay(); //fix
    
    
    const pulsante=document.querySelector('#P');
    function output () {
        alert('ALLERTA!!')
        console.log('Allerta!!')
    }
    
    pulsante.addEventListener('click',()=>{
        output();
    })
*/
}


