//drag and drop

let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#todo");


addCardBtn.addEventListener("click",addTask);
let card = 100000
function addTask() {
    let card = document.createElement("div");
    //add id
    card.id = `card - ${count++}`
    card.className = "card"
    card.innerText = "Test Card";
    //contenteditable
    card.setAttribute("contenteditable", "true")
    //allow drag-draggable
    card.setAttribute("draggable", "true")
    todoContainer.append(card)
    //pointer will be in editable mode automatically
    card.focus()

   //step1=> start the dragging

   //drag start
   card.addEventListener("dragstart", (eventDetails) => {
     let draggedCard = eventDetails.target
     //we store unique of the element

     eventDetails.dataTransfer.setData("text/plain", draggedCard.id)
     draggedCard.style.opacity = 0.5; //opacity means element is partially visible
})

// dragend
  card.addEventListener("dragend", (eventDetails) => {
    let draggedCard = eventDetails.target
    draggedCard.style.opacity = 1; //it means element is clearly visible
  })

//these 3 events are for sections.

//dragover - from drag start to drag end
//dragenter - once it enters the drag zone
//drop - when it moved to its final destination

// let todo = document.querySelector("todo");
// let progress = document.querySelector("progress");
// let done = document.querySelector("#done")

// todo.addEventListener("dragover", (eventDetails) => {
//     eventDetails.preventDefault();
// })

// todo.addEventListener("dragenter", (eventDetails) => {
//     eventDetails.preventDefault();
// })

// todo.addEventListener("drop", (eventDetails) => {
//     eventDetails.preventDefault();
// })

//forEach Loop

let dragevents = ["dragover", "dragenter", "drop"];

dragevents.forEach((dropEvent) => {
    let columns = document.querySelector(".column");
    for (let c of columns) { //todo, progress, done
       c.addEventListener(dropEvent, (eventDetails) => {
        eventDetails.preventDefault ()

        if (dropEvent == "drop") {
        //get the id of the card that has been dragged here.
        let cardId = eventDetails.dataTransfer.getData("text/plain");
        let draggedCard = document.querySelector(`#${cardId}`);
        let currentColumn = eventDetails.target
        currentColumn.append(draggedCard);    
        }
       })
    }
})
}