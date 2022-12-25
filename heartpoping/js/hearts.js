const body=document.querySelector("body")
// console.log(body)


body.addEventListener("mousemove",(e)=>{
    const xpos=e.offsetX
    const ypos=e.offsetY
   const el=document.createElement("span")
   el.style.left=xpos+"px"
   el.style.top=ypos+"px"
   body.append(el)
   const size=Math.random()*80
   el.style.width=size+"px"
   el.style.height=size+"px"
   // console.log("moved",e.offsetX,e.offsetY);
   setInterval(() => {
    el.remove()
   }, 3000);
})
