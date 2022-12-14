const hours=document.querySelector(".hours")
const min=document.querySelector(".minutes")
const sec=document.querySelector(".seconds")
const ampm=document.querySelector(".ampm")
console.log(ampm.innerHTML)


setInterval(() => {
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am = h>=12? "pm" : "am" ;


if(h > 12){
    h=h-12;
}

h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;
    hours.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    ampm.innerHTML=am;
}, 100);