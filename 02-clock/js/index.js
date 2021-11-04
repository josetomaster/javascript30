


let setDate = () =>{
    const date = new Date();

    const seconds = date.getSeconds();
    let secondsToDegrees = ((seconds/60) * 360) + 90;
    document.querySelector('.second').style.transform = `rotate(${secondsToDegrees}deg)`;

   
    const minutes = date.getMinutes();
    let minutesToDegrees = ((minutes/60) * 360) + 90;
    document.querySelector('.minute').style.transform = `rotate(${minutesToDegrees}deg)`;
    
    
    const hours = date.getHours();
    let hoursToDegrees = ((hours/12) * 360) + 90;
    document.querySelector('.hour').style.transform = `rotate(${hoursToDegrees}deg)`;

    
}

setInterval(setDate,1000);