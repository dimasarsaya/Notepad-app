const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML= localStorage.getItem("notes");
};
showNotes();

// LocalStorage
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


// Function to create a new note
createBtn.addEventListener("click", () => {  
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";                
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});


// function to delete a note and use of local storage functionality
notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } 
    else if(e.target.tagName === "p"){
     notes = document.querySelectorAll(".input-box");
     notes.forEach(nt =>{
        nt.onkeyup = function(){
            updateStorage();
        }
     } )
    }
});


// Add 1 line break on note
document.addEventListener("keydown", event => {
    if (event === "enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
