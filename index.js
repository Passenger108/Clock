let hourHand = document.getElementById("hourHand");
let minuteHand = document.getElementById("minuteHand");
let secondHand = document.getElementById("secondHand");

console.log("hello");
setInterval(()=>{
    let d = new Date();
    let hourRot = 30*d.getHours() + 0.5*d.getMinutes();
    let minRot = 6*d.getMinutes() + 0.1*d.getSeconds(); 
    let secRot = 6*d.getSeconds();

    hourHand.style.transform = `rotate(${hourRot}deg)`;
    minuteHand.style.transform = `rotate(${minRot}deg)`;
    secondHand.style.transform = `rotate(${secRot}deg)`;
},1000);