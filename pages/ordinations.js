function ordinations() {

    // optimize INNERHTML
    router.innerHTML=`
        <div id="ordinationLayout">
            <div class="ordination">
                <h1>Ordinazioni</h1>
                <input type="text" class="inputFoodName" value="prugna"/>
                <input type="number" class="inputFoodPrice" value="1"/>
                <button class="addCart">Aggiungi al carrello</button>
            </div>

            <div class="cart">
                <h1>Carrello attuale</h1>
                <input type="text" class="tableID" placeholder="tavolo" value="B382"/>
                <div class="generateCart"></div>
                <button class="buy">ordina</button>
            </div>

            <div class="cronology">
                <h1>Cronologia ordini</h1>
                <ol class="generateCronology"></ol>
            </div>
        </div>
    `;

    // TODO CARRELLO
    let currentCart=[];

    // MOSTRA
    function showCart() {
        const generateCart=document.querySelector('.generateCart');
        generateCart.innerHTML="";

        if (currentCart.length>0) {
            for (let a = 0; a < currentCart.length; a++) {
                generateCart.innerHTML+=`<p>> ${currentCart[a].price}€ ${currentCart[a].name}</p>`
            }
        }else{
            generateCart.innerHTML="<p>Carrello vuoto</p>"
        }
    } 
    showCart()

    // RIEMPI
    const inputFoodName=document.querySelector('.inputFoodName')
    const inputFoodPrice=document.querySelector('.inputFoodPrice')
    const addCart=document.querySelector('.addCart')

    addCart.addEventListener('click',function () {
        currentCart.push(
            { name:inputFoodName.value, price:inputFoodPrice.value }
        )
        showCart()
    })


    // TODO CRONOLOGIA
    const arrayCronology=[];
    // MOSTRA
    function showCronology() {
        const generateCronology=document.querySelector('.generateCronology');
        generateCronology.innerHTML="";

        // TITOLO
        if (arrayCronology.length>0) {
            for (let a = 0; a < arrayCronology.length; a++) {
                generateCronology.innerHTML+=`
                    <li>Tavolo ${arrayCronology[a].tableSelected}</li>
                    <ul></ul>
                `;

                const cronologyOrders=document.querySelectorAll('.generateCronology>ul')
                for (let b = 0; b < arrayCronology[a].ordinations.length; b++) {
                    cronologyOrders[a].innerHTML+=`
                        <li>${arrayCronology[a].ordinations[b].name} ${arrayCronology[a].ordinations[b].price}€</li>
                    `;
                }
            }
        }else{
            generateCronology.innerHTML="<p>Cronologia vuota</p>"
        }
    }
    showCronology()
    
    // RIEMPI
    const buy=document.querySelector('.buy')
    const tableID=document.querySelector('.tableID')

    buy.addEventListener('click',function () {
        arrayCronology.push({ 
            tableSelected:tableID.value,
            ordinations:currentCart,
        })
        // RIPRISTINA CARRELLO
        currentCart=[]; showCart()
        showCronology()
    })


}