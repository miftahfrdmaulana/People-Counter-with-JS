// document.getElementById("count")
//Increment
let countEl = document.getElementById("count-el")
let count = 0

//Save
let saveEL = document.getElementById("save-el")



function increment() {
    count += 1
    console.log("Clicked")
    countEl.textContent = count
}

function save() {
    countSave = count + " - "
    saveEL.textContent += countSave
    console.log(count)
    count = 0
    countEl.textContent = count
}


