let body=document.getElementById("body")


let sehwag=document.getElementById("sehwag")
let sehwagImg=document.getElementById("Sehwag")

sehwag.addEventListener("click",function() {
    sehwagImg.style.display="block"
    sehwagImg.style.transform="translate(5em,-26em)"

    sehwagImg.onmouseleave=()=>{
        sehwagImg.style.display="none"
    }
})

let sachin=document.getElementById("sachin")
let SachinImg=document.getElementById("Sachin")

sachin.addEventListener("click",function() {
    SachinImg.style.display="block"
    SachinImg.style.transform="translate(5em,-23.5em)"

    SachinImg.onmouseleave=()=>{
        SachinImg.style.display="none"
    }
})

let gambhir=document.getElementById("gambhir")
let GambhirImg=document.getElementById("Gambhir")

gambhir.addEventListener("click",function() {
    GambhirImg.style.display="block"
    GambhirImg.style.transform="translate(5em,-21em)"

    GambhirImg.onmouseleave=()=>{
        GambhirImg.style.display="none"
    }
})

let virat=document.getElementById("virat")
let ViratImg=document.getElementById("Virat")

virat.addEventListener("click",function() {
    ViratImg.style.display="block"
    ViratImg.style.transform="translate(3.5em,-18.5em)"

    ViratImg.onmouseleave=()=>{
        ViratImg.style.display="none"
    }
})


let dhoni=document.getElementById("dhoni")
let dhoniImg=document.getElementById("Dhoni")

dhoni.addEventListener("click",function() {
    console.log("dhoni clicked")
    dhoniImg.style.display="block"
    dhoniImg.style.transform="translate(3.5em,-16em)"

        dhoniImg.onmouseleave=()=>{
            dhoniImg.style.display="none"
        }
})

let yuvraj=document.getElementById("yuvraj")
let YuvrajImg=document.getElementById("Yuvraj")

yuvraj.addEventListener("click",function() {
    console.log("dhoni clicked")
    YuvrajImg.style.display="block"
    YuvrajImg.style.transform="translate(4em,-13.5em)"

    YuvrajImg.onmouseleave=()=>{
        YuvrajImg.style.display="none"
    }
})

let suresh=document.getElementById("suresh")
let SureshImg=document.getElementById("Suresh")

suresh.addEventListener("click",function() {
    console.log("dhoni clicked")
    SureshImg.style.display="block"
    SureshImg.style.transform="translate(16em,-4.7em)"

    SureshImg.onmouseleave=()=>{
        SureshImg.style.display="none"
    }
})

let harbajan=document.getElementById("harbajan")
let HarbhajanImg=document.getElementById("Harbhajan")

harbajan.addEventListener("click",function(){
    HarbhajanImg.style.display="block"
    HarbhajanImg.style.transform="translate(22em,-4.7em)"
    HarbhajanImg.onmouseout=()=>{
        HarbhajanImg.style.display="none"
    }
})

let zaheer=document.getElementById("zaheer")
let ZaheerImg=document.getElementById("Zaheer")

zaheer.addEventListener("click",zaheerShow)
// zaheer.onclick=()=>{}

function zaheerShow(){
    ZaheerImg.style.display="block"
    ZaheerImg.style.transform="translate(29em,-4.7em)"     
        ZaheerImg.onclick=()=>{
            ZaheerImg.style.display="none"
        }
} 
      
let munaf=document.getElementById("munaf")
let MunafImg=document.getElementById("Munaf")

munaf.addEventListener("click",function(){
    MunafImg.style.display="block"
    MunafImg.style.transform="translate(34em,-4.7em)"
        MunafImg.onmouseout=()=>{
            MunafImg.style.display="none"
        }
})

let sreesanth=document.getElementById("sreesanth")
let SreesanthImg=document.getElementById("Sreesanth")

sreesanth.addEventListener("mouseenter",function(){
    SreesanthImg.style.display="inline"
    SreesanthImg.style.transform="translate(40em,-4.7em)"

    SreesanthImg.onmouseleave = () => {
        SreesanthImg.style.display="none"
    }
})




 