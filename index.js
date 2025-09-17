let myleads = []
const inputel = document.querySelector("#input-el")
const inputbtn = document.querySelector("#input-btn")
const dltbtn = document.querySelector("#dlt-btn")
const tabbtn = document.querySelector("#tab-btn")
const ulel = document.querySelector("#ulel")

let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))

if (leadsfromlocalstorage) {
    myleads = leadsfromlocalstorage
    render(myleads)
}

inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value)
    inputel.value = "" // optional: clear input after adding
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
})

dltbtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myleads = []
    render(myleads)

})



tabbtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {


        myleads.push(tabs[0].value)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        render(myleads)
    })

})


function render(leads) {
    listitems = ""
    for (let i = 0; i < leads.length; i++) {
        listitems += `
            <li>
            <a target='_blank' href="${myleads[i]}">
            ${myleads[i]}
            </a>
            </li>
            `
    }
    
    ulel.innerHTML = listitems
}
