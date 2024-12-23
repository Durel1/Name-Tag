let wrapper = document.getElementsByClassName("wrapper")[0]
let template = document.getElementsByTagName("template")[0]


let names = ["durel", "naomie", "asthree"]

let colors = [
    "#FF0000", "#00FF00", "0000FF", "#00FF00", "#FF00FF","#FF0000", "#00FF00", "#800000",
    "#8B0000", "#00008B", "#FFF700","#2243B6", "#5946B2", "#FFAA1D","#7CFC00"
]
 let sticker= function(name){
    let div = template.content.querySelector("div")
    let nameOfSticker = div.querySelector(".name")

    nameOfSticker.innerHTML = name
    div.style.background = colors[Math.floor(Math.random() * colors.length)]
    div.style.transform = "rotate(" + (Math.random() * 40 -20) + "deg)"

    let node = document.importNode(div,true);
    wrapper.appendChild(node)


 }

 setTimeout(refereshpage,1000);
 function refereshpage(){
    location.reload();
 }


 names.forEach(sticker)