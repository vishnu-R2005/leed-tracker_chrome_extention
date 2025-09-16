# Leads Tracker

A simple web app to save and display leads/URLs. Users can add new leads through an input field and view them in a clickable list.

## Features

- Add new leads/URLs using an input field.
- Display all saved leads in a list.
- Each lead is clickable and opens in a new tab.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)

## How to Use

1. Open `index.html` in a web browser.
2. Enter a lead or URL in the input field.
3. Click the **Save** button to add it to the list.
4. The list updates dynamically with all saved leads.

## Example HTML

```html
<input type="text" id="input-el" placeholder="Enter a lead or URL">
<button id="input-btn">Save Lead</button>
<ul id="ulel"></ul>
```

## Example JavaScript

```javascript
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
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
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
```

## License

This project is open-source and free to use.

