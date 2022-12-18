const img=document.querySelector("img")
const paragrape=document.querySelector(".text")
const username=document.querySelector(".username")

const testimonials=[
    {
        name:"- Frederick P.",
        text:"I am really satisfied with my apple. Just what I was looking for. The best on the net!",
        profileurl:"https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    }
    ,
    {
        name:"- Tiler R.",
        text:" really Not able to tell you how happy I am with apple.with my apple. Just what I was looking for. The best on the net!",
        profileurl:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    }
    ,  
     {
        name:"- Kariotta N.",
        text:"II will refer everyone I know. I am really satisfied with my apple. Apple saved my business.",
        profileurl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    }
    ,
]

let ind=0;
setInterval(() => {
   const {name , text , profileurl}=testimonials[ind]
   const usernamet=name;
   const textt=text;
   const urlt=profileurl;
   paragrape.textContent=textt
   img.setAttribute("src",urlt)
   username.textContent=usernamet
  text.in
   
   ind++
   if (ind===testimonials.length) {
    ind=0
   }
 
   
}, 2000);

