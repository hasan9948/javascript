const body =document.body;
const ul=document.querySelector(".todo-ul")
const form=document.querySelector(".todo-form")
 const input=document.querySelector(".todo-form input[type=\"text\"]")
 const msg=document.querySelector(".msg")
 console.log(msg)
 const remove_msg=document.querySelector(".remove-msg")



form.addEventListener("submit", (e)=>{
    e.preventDefault();
// console.log(e.target)
const li=document.createElement("li")
const text=input.value;
const newli=`  <span> ${text}</span>
<div class="btns"><button class="btn done">done</button> <button class="btn remove"> remove</button></div>`
li.innerHTML=newli
console.log(li)
ul.prepend(li);
li.classList.add('todo-li')
setInterval(() => {
  msg.style.display="none"
}, 3000);

msg.style.display="block"
input.value=""
})


ul.addEventListener("click",(e)=>{
  if(e.target.classList.contains("done")){
    const d= e.target.parentNode.parentNode;
    d.style.textDecoration="line-through"
  }
  if(e.target.classList.contains("remove")){
    const r= e.target.parentNode.parentNode;
    r.remove();
    remove_msg.style.display="block"
setInterval(() => {
  remove_msg.style.display="none"
}, 3000);

  }
})


