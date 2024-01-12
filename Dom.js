//DOM - Document Oblect Model  
 
                       
const title = document.getElementById("main-heading");
console.log(title)

const listItem = document.getElementsByClassName("title")
console.log(listItem)
const list = document.getElementsByTagName("li")
console.log(list)
const container = document.querySelector("div") // this select the first div of the the html page
console.log(container)
//if selecting all divs, you should use queryselectorAll

//to change the text content of the main-heading
title.textContent = "Favorite Movie List" // Favorite Movie List

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


