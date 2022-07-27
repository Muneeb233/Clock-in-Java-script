
let dt,date,time;
setInterval(() => {     
dt= new Date();
date = dt.toLocaleString();
time =dt.getHours()+" : " +dt.getMinutes()+" : "+dt.getSeconds();

document.getElementById("time").innerHTML=time+" on "+ date;
}, 1000);
