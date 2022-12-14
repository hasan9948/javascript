const hours=document.querySelector(".hour")
const min=document.querySelector(".minutes")
const sec=document.querySelector(".seconds")


setInterval(() => {
    const time= new Date()
const h=time.getHours()*30
const m=time.getMinutes()*6
const s=time.getSeconds()*6

hours.style.transform=`rotate(${h}deg)`
min.style.transform=`rotate(${m}deg)`
sec.style.transform=`rotate(${s}deg)` 
}, 100);