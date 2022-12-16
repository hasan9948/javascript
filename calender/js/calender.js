const time = new Date()
const h1=document.querySelector("h1")
const p=document.querySelector("p")
const mo=time.getUTCMonth();
const lastday=new Date(new Date().getFullYear(),mo+1,0).getDate()
console.log(lastday)
const firstday=new Date(new Date().getFullYear(),mo,1).getDay()
console.log(firstday)
const days=document.querySelector(".days")
const months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// const date=tgetVarDate
// console.log(div[15])

h1.textContent=months[mo];
p.textContent=time.toDateString()


/////days
let day=""
for (let i = firstday; i >0; i--) {
   
    day += `<div class="empty"></div>` 
    
}
for (let i = 1; i <= lastday; i++) {
    if (i===new Date().getDate()) {
    day += `<div class="currentday">${i}</div>` 
        
    }else{

        day += `<div>${i}</div>` 
    }
    
}
days.innerHTML=day
console.log(days.outerHTML)
const div=document.querySelectorAll(".days div")


/////currentdate
// for (let i = 0; i < div.length; i++) {
//     const cday=time.getDate()
//     if (cday==div[i].textContent) {
//         div[i].classList.add("currentday")
//         console.log("hep",i,div[i].textContent)
//     }
// }
 