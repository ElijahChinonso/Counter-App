// document.getElementById("count-el").innerText = 10
let saveEl = document.getElementById("save_el")
let countEl = document.getElementById("count_el")


//Initialize the count as 0, Listen for clicks on the increment button, Increment the count variable when the button is clicked (log it out)
//Change the count-el in the html to reflect the new count.
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

//Create a function, save, that logs out the count when it's called
function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
 }

 console.log("Lets count people on the subway")





