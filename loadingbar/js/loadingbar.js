const count =document.querySelector(".count")
const front =document.querySelector(".front")


let ind=0

const id=setInterval(() => {
    count.textContent=ind+'%'
    front.style.width=ind+"%"
    ind++
    if(ind>100){
        clearInterval(id)
    }
}, 10);