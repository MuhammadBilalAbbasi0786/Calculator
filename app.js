let textNew = document.getElementById("text")

function numberClick(newData){
    console.log("test")
    textNew.value += newData
}

function calculate(){
    textNew.value = eval(textNew.value)
}

function clear(){
    textNew.value = ""
    console.log(textNew.value)
    console.log('test')
}

function newC(){
    textNew.value = ""
}