let myleads = []
const inputel = document.querySelector("#input-el")
const inputbtn = document.querySelector("#input-btn")
const dltbtn = document.querySelector("#dlt-btn")
const ulel = document.querySelector("#ulel")

let leadsfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))

if (leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    renderleads()
}

inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value)
    inputel.value = "" // optional: clear input after adding
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads()
})

dltbtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myleads=[]
    renderleads()
    
})


function renderleads() {
    listitems=""
    // ulel.innerHTML = "" // clear old list before re-rendering
    for (let i = 0; i < myleads.length; i++) {
        // const li = document.createElement("li")
        // li.textContent = myleads[i]
        // ulel.append(li)

        listitems+=`
            <li>
            <a target='_blank' href="${myleads[i]}">
            ${myleads[i]}
            </a>
            </li>
            `
    }
    ulel.innerHTML=listitems
}
