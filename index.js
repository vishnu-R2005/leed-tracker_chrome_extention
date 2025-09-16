let myleads = []
const inputel = document.querySelector("#input-el")
const inputbtn = document.querySelector("#input-btn")
const ulel = document.querySelector("#ulel")

inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value)
    inputel.value = "" // optional: clear input after adding
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
