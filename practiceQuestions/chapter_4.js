// 1. Basic DOM Manipulation: How do you select an element with the ID main-title and change its text content to "Welcome to the DOM World"?

let mainTitle = document.getElementById('main-title')
mainTitle.innerText = 'Welcome to the DOM World'

// 2. Event Handling: Write the JavaScript code to listen for a click event on a button with the ID submit-btn and alert "Button Clicked!".

let submitBtn = document.getElementById('submit-btn')

// submitBtn.addEventListener('click', () => alert('Submit button clicked!'))

// 3. Dynamic Styling: How can you change the background color of a <div> with the class highlight to yellow when a user hovers over it using JavaScript?

let highlightable = document.querySelector('.highlight') 

highlightable.addEventListener('mouseover', handleHover) 
highlightable.addEventListener('mouseout', handleExit) 

function handleHover() {
  highlightable.style.backgroundColor = 'yellow'
}
function handleExit() {
  highlightable.style.backgroundColor = 'unset'
}

// 4. Element Creation and Insertion: Describe how to create a new <li> element, set its text content to "New Item", and append it to an existing <ul> with the ID list-container.

let listContainer = document.getElementById('list')

for (let i = 0; i < 5; i++) {
  listContainer.innerHTML += `<li>New Item No. ${i + 1}</li>`
}

// 5. Form Handling: Write a script to prevent the default submission of a form with the ID form-example and instead console log the value of a text input field within the form when the submit button is clicked.

let form = document.getElementById('form-example')

function handleSubmitForm(e) {
  e.preventDefault()
}

form.addEventListener('submit', handleSubmitForm)

// 6. Understanding Event Bubbling: Provide an example of stopping event bubbling when clicking on a <button> contained within a <div> that both have click event listeners attached.

let exampleButton = document.querySelector('.button')

function stopBtnPropogation(e) {
  e.stopPropogation()
}

exampleButton.addEventListener('click', stopBtnPropogation)

// 7. Dynamic Page Styling: How can you toggle a class active on an element when it is clicked, ensuring that if the class is present it gets removed, and if it's not, it gets added?

// let openModalBtn = document.getElementById('open-modal-btn')

function toggleClass() {
  if (!openModalBtn.classList.contains('blueText')) {
    openModalBtn.classList.add('blueText')
    openModalBtn.style.color = 'blue'
  } else {
    openModalBtn.classList.remove('blueText')
    openModalBtn.style.color = 'unset'
  }
}

openModalBtn.addEventListener('click', toggleClass)


// 8. Advanced Event Handling: Write JavaScript code to change the text content of a paragraph element to display the current time when a button is clicked.

let timeBtn = document.getElementById('time')

function handleFetchTime() {
  timeBtn.innerText = new Date().toLocaleTimeString()
}

timeBtn.addEventListener('click', handleFetchTime)

// 9. Event Listener Removal: How do you remove an event listener from an element, and why might you need to do this?

// timeBtn.removeEventListener('click', handleFetchTime)

// 10. Manipulating Attributes and Properties: Write JavaScript code to change the src attribute of an <img> element and explain the difference between attributes and properties in the context of DOM elements.

// method 1

// let img = document.getElementById('img')

// img.src = '../assets/cat.jpg'
// img.alt = 'hehe image of cat :)'

// method 2

document.querySelector('img').setAttribute('src', '../assets/cat.jpg')
document.querySelector('img').setAttribute('alt', 'hehe image of cat :)')

// 11. Utilizing Dataset Attributes: Explain how to use data-* attributes within an HTML element to store extra information and how to access this information using JavaScript.

let infoDiv = document.getElementById('div')
console.log(infoDiv.dataset.userId)