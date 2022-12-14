const btn =document.querySelector(".btn")
const body=document.body;
const butn=document.querySelector(".butn")
const c=document.querySelector(".c")
console.log(butn)
console.log(btn.textContent)

btn.addEventListener("click",function(){
    if(body.classList.contains("darkmode")){
// body.classList.remove("darkmode")
btn.textContent="dark mode"
    }
    else{
        // body.classList.add("darkmode")
        btn.textContent="light mode"
    }
console.log("hello")
c.classList.toggle("t")
body.classList.toggle("darkmode")

})

butn.addEventListener("click",()=>{
console.log("hello")
if(body.classList.contains("darkmode")){
    // body.classList.remove("darkmode")
    btn.textContent="dark mode"
        }
        else{
            // body.classList.add("darkmode")
            btn.textContent="light mode"
        }
c.classList.toggle("t")
body.classList.toggle("darkmode")

})

