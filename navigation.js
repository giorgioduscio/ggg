
const body=document.body;
const router=document.querySelector('router');

// TODO PAGINE                                  -
function homePage() { router.innerHTML=`<h1>homepage</h1>`; } 


// TODO ROUTING                                 -
// pagina principale
body.addEventListener('click',function (event) {

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

        // SE L'ID INDIRIZZA AD UNA PAGINA, CAMBIA L'ID DEL BODY
        pagName? body.id=event.target.id :  '';
    }
})