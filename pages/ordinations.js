function ordinations() {
    body.id='ordinations';

    router.innerHTML=`
        <div id="ordinationLayout">
            <div class="ordination">
                <h1>Ordinazioni</h1>
                <input type="text" class="foodName" value="prugna"/>
                <input type="number" class="foodPrice" value="1"/>
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
                <div class="generateCronology"></div>
            </div>
        </div>
    `;

    // TODO CARRELLO
    const currentCart=[];

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
    const foodName=document.querySelector('.foodName')
    const foodPrice=document.querySelector('.foodPrice')
    const addCart=document.querySelector('.addCart')

    addCart.addEventListener('click',function () {
        currentCart.push(
            { name:foodName.value, price:foodPrice.value }
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
                generateCronology.innerHTML+=`<p>Tavolo ${arrayCronology[a].tableSelected}</p><div></div>`

                let cronologyOrdinations=document.querySelector(".generateCronology>div")
                cronologyOrdinations.innerHTML="";
                for (let b = 0; b < arrayCronology[a].ordinations.length; b++) {
                    console.log('cronologyOrdinations',arrayCronology[a].ordinations[b]);
                    cronologyOrdinations.innerHTML+=`<p>${arrayCronology[a].ordinations[b].price}€ ${arrayCronology[a].ordinations[b].name}</p>`;
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
        arrayCronology.push(
            { 
                tableSelected:tableID.value,
                ordinations:currentCart,
            }
        )
        showCronology()
    })


}