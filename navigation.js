
const body=document.body;
const router=document.querySelector('router');

// TODO PAGINE                                  -
function homePage() { router.innerHTML=`<h1>homepage</h1>`; } 


// TODO ROUTING                                 -
// pagina principale
body.addEventListener('click',function (event) {

    // se l'id indirizza in una pagina, cambia l'id del body
    let pagName=false; 

    if (event.target.id!='') {
        switch (event.target.id) {
            case 'homePage':
                homePage();
                pagName=true;
                break;

            case 'ordinations':
                ordinations()
                pagName=true;
                break;
        
            case 'howToArray':
                howToArray()
                pagName=true;
                break;
        }

        if (pagName) {
            body.id=event.target.id;
            console.log(body.id);
        }
    }
})