const hours=document.querySelector(".c1")
const min=document.querySelector(".c2")
const sec=document.querySelector(".c3")
const ampm=document.querySelector(".ampm")
console.log(sec)

setInterval(() => {
    const time= new Date()
const h=time.getHours()*30
const m=time.getMinutes()*6
const s=time.getSeconds()*6

hours.style.transform=`translate(-50%,-50%)rotate(${h}deg)`
min.style.transform=`translate(-50%,-50%)rotate(${m}deg)`
sec.style.transform=`translate(-50%,-50%)rotate(${s}deg)` 

document.querySelector(".dhour").textContent=h/30;
if ((h/30)>12) {
    document.querySelector(".dhour").textContent=(h/30)-12;
}
if ( document.querySelector(".dhour").textContent< 10) {
    document.querySelector(".dhour").textContent="0"+ document.querySelector(".dhour").textContent;
}
document.querySelector(".dminutes").textContent=m/6;
if ( document.querySelector(".dminutes").textContent< 10) {
    document.querySelector(".dminutes").textContent="0"+ document.querySelector(".dminutes").textContent;
}
document.querySelector(".dseconds").textContent=s/6;
if ( document.querySelector(".dseconds").textContent< 10) {
    document.querySelector(".dseconds").textContent="0"+ document.querySelector(".dseconds").textContent;
}
if ((h/30)>12) {
    ampm.textContent="pm"
}
}, 100);