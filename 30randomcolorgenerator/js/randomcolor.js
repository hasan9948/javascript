const containerel=document.querySelector(".container")


for (let i = 0; i < 30; i++) {
    const div=document.createElement("div")
    div.classList.add("random-color")
    containerel.append(div)
const code= randomcodegenerator()
div.style.background=`#${code}`
div.textContent=`#${code}`
}

function randomcodegenerator(){
    var colorcode=""
    for (let i = 0; i <6; i++) {
        const reqaried="0123456789abcdef"
        const randomnumber=Math.floor(Math.random()*16)
        const code=reqaried.substring(randomnumber,randomnumber+1)
        colorcode = colorcode+code
    }
    // console.log(colorcode)
return colorcode
}
