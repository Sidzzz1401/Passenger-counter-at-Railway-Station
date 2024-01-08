let countEl = document.getElementById("count-el") //pass in arguements
let count = 0
let saveEl = document.getElementById("save-el")

function increment()
{
    count += 1
    countEl.textContent = count 
}

function save(){
    let ct = count + " - "
    saveEl.textContent += ct //textContent instead of innerText as it only gives human readable things and rejects hidden styling 
    countEl.textContent = 0
    count = 0
}






