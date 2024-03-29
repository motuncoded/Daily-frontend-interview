//DOM - Document Oblect Model

const title = document.getElementById("main-heading");
console.log(title);

const listItem = document.getElementsByClassName("title");
console.log(listItem);
const list = document.querySelector("li");
console.log(list);
const container = document.querySelector("div"); // this select the first div of the the html page
console.log(container);
//if selecting all divs, you should use queryselectorAll

//to change the text content of the main-heading
title.textContent = "Favorite Movie List"; // Favorite Movie List
// to use css styles
title.style.color = "red";

//to loop throught element
for (let i = 0; i < list.length; i++) {
  // will increses fontsize of the list element
  list[i].style.fontSize = "3rem";
}

//create element

//const ul = document.querySelector("ul");
const li = document.createElement("li");

// to add elements
//ul.appendChild(li);

//to modify text in html

console.log(list.innerText); //MotunThe matrix
console.log(list.textContent); //MotunThe matrix
console.log(list.innerHTML); //<span>Motun</span>The matrix

//modify attributes
li.setAttribute("id", "main-heading");
li.style.color = "purple"
console.log(li)

//to remove attribute
li.removeAttribute("id");
console.log(li);

li.classList.remove("list");
console.log(li)
console.log(li.classList.contains("list")) // false

li.classList.add("list");
console.log(li.classList.contains("list")) //true

// remove elements
li.remove()
let ul = document.querySelector("ul")
console.log(ul.parentNode) // the div container
console.log(ul.parentElement) // the div parent
//child node 

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.color = "blue";
console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)



//sibling
console.log(ul.previousSibling) 
console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)


//to add a new element after the paragraph

document.addEventListener("DOMContentLoaded", function () {
    

const newElement = document.createElement("li");
newElement.textContent = "Black Men";
// to append the child in the div-container
    //container.appendChild(newElement)
    // to place it under the ul
    const listTitle = document.querySelector("ul");
    console.log(listTitle)
    listTitle.appendChild(newElement)  // Black Men

    //to acesss a nested  elements
    const nestedElement = container.querySelector(".nested")
    console.log(nestedElement) //<p class="nested">List of movies that I like</p>
    // to change the innerHtml
    nestedElement.innerHTML = '<strong><i>This is my favourite movies </i></strong>'
    
    //adding a click event Listener
    nestedElement.addEventListener("click", function () {
        alert("Paragraph clicked")
    })



})

//EventListeners
/*const btn = document.querySelector("button")
btn.addEventListener("click", () => {
  alert("hi");

})*/

const btn = document.querySelector("button");
function alertBtn() {
  alert("Hi")
}
btn.addEventListener("click", alertBtn)

//mouseover event
function changeBackground() {
  btn.style.backgroundColor = "blue";
}
btn.addEventListener("mouseover", changeBackground)