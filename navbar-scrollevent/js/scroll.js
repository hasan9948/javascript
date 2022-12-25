const as=document.querySelectorAll("a")
const sec=document.querySelectorAll("section")

console.log(as)
window.addEventListener("scroll",()=>{
    len=sec.length
   
 while(--len&&(window.scrollY)<sec[len].offsetTop){}

 console.log(window.scrollY,sec[len].offsetTop)
 as.forEach(a => {
        a.classList.remove("active")
        
    });
    as[len].classList.add("active")
    sec[len].style.filter="blur(0px) hue-rotate(calc(300deg * var(--i)))"
    sec[len].style.transform="translate(0%)"
})