
export function howManageDates(){
    
    return `
        <div class="output">Clicca</div>
        <button class="clock">---</button>
    `;
    
    // Mer 10/01/2022 13:45:09
    const formatDate={ // mercoledi 19/12/2022
            //DATA
            weekday:"long", //mer||mercoledi
            day:"2-digit", 
            month:"2-digit",
            year:"numeric", 
            
            //ORARIO
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            hour12:false, // analogico||digitale
        }
    
    console.log(`Data attuale: ${new Date().toLocaleString(undefined,formatDate)}`);
    
    // TOSTRING
    const output=document.querySelector('.output');
    output.addEventListener('click',function () {
        output.innerText=new Date().toLocaleString(undefined,formatDate);
    })
    
    //OROLOGIO
    const clock=document.querySelector('.clock')
    setInterval(() => {
        clock.innerText=new Date().toLocaleString(undefined,formatDate)
    }, 1000);
}

