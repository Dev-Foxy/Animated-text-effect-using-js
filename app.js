const text = "My viwers on Youtube are the best"
let i =0

function textAnimation(){
    document.body.innerText = text.slice(0,i)
    i++
    if(i>text.length){
        i=0
    }
}

setInterval(textAnimation,100)