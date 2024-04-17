
const body=document.body;
const router=document.querySelector('router');

// TODO PAGINE                                  -
function homePage() {
    body.id='homePage';
    router.innerHTML=`<h1>homepage</h1>`;
} 
ordinations()

// TODO ROUTING                                 -
body.addEventListener('click',function (event) {

    if (event.target.id!='') {
        
        if (event.target.id=='homePage') {
            homePage()
        }
        if (event.target.id=='ordinations') {
            ordinations()
        }
        if (event.target.id=='howToArray') {
            howToArray()
        }
        console.log(body.id,event.target.id);
        body.id=event.target.id
    }
})