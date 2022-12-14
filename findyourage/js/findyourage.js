const body=document.body
const btn=document.querySelector(".btn")
const date=document.querySelector(".date")
const before=document.querySelector(".before")
const after=document.querySelector(".after")

btn.addEventListener("click",()=>{
  
   clearInterval(id)
    if(date.value){
        // const datestring=date.value
        // const dob=new Date(datestring)
        console.log(date.value)
        before.classList.add("hide")
        after.classList.remove("hide")
    document.querySelector(".yy").innerHTML=""
        document.querySelector(".mo").innerHTML=""
        document.querySelector(".dd").innerHTML=""
        document.querySelector(".hh").innerHTML=""
        document.querySelector(".mm").innerHTML=""
        document.querySelector(".ss").innerHTML=""
        // console.log(currentdate,"cc")z
        
        var id= setInterval(() => {  
            const datestring=date.value
            const dob=new Date(datestring)
            const currentdate=new Date()
            const datediff=currentdate-dob; 
    //         const datestring=date.value
    //  dob=new Date(datestring)
        
        const s=Math.floor(datediff/(1000)%60) 
        const m=Math.floor(datediff/(1000*60)%60)
        const h=Math.floor(datediff/(1000*60*60)%24)
        const d=Math.floor(datediff/(1000*60*60*24)%30)
        const mo=Math.floor(datediff/(1000*60*60*24*30)%12)
        const y=Math.floor(datediff/(1000*60*60*24*365))
        // document.(".yy").innerHTML=""
        // document.(".mo").innerHTML=""
        // document.(".dd").innerHTML=""
        // document.(".hh").innerHTML=""
        // document.(".mm").innerHTML=""
        // document.(".ss").innerHTML=""
        // console.log(y,mo,d,h,m,s)
        document.querySelector(".yy").innerHTML=y
        document.querySelector(".mo").innerHTML=mo
        document.querySelector(".dd").innerHTML=d
        document.querySelector(".hh").innerHTML=h
        document.querySelector(".mm").innerHTML=m
        document.querySelector(".ss").innerHTML=s
        // console.log('yy',y)
        
    }, 100);

}
    else{
        before.classList.remove("hide")
        after.classList.add("hide")
        console.log("hello")
    }

})

const update=(dob)=>{
    // console.log("dob",dob,"dob")
   
    
}