let todoList = JSON.parse(localStorage.getItem("todoList")) || [
    {
        name : "Go to the grocery store",
        date : "2025-02-14"
    },
    {
        name : "Cleane the house",
        date : "2025-02-14"
    }
];

const addButton = document.querySelector(".add");


addButton.addEventListener("click", ()=>{
    addTodo();
});

function renderTodoList(){
     
    let todoListHTML = "";

    todoList.forEach((todoObject, i)=>{

        let name = todoObject.name;
        let date = todoObject.date;

        const html = `
        
           <div class="displays">
            <div class="name">${name}</div>
            <div class="date">${date}</div>
            <button class="delete" data-index = "${i}">Delete</button>
         </div>     

        `;

        todoListHTML += html;
    });

    
    document.querySelector(".display").innerHTML = todoListHTML;
    localStorage.setItem("todoList", JSON.stringify(todoList));




    document.querySelectorAll(".delete").forEach((button)=>{
        button.addEventListener("click", (event)=>{
            let index = event.target.dataset.index;

            todoList.splice(index, 1);
            renderTodoList();
        });
    });

    

    
}

function addTodo(){

    let nameInput = document.querySelector(".input-bar");
    let dateInput = document.querySelector(".input-date");

    let name = nameInput.value;
    let date = dateInput.value;

    todoList.push({
        name,
        date
    });

    renderTodoList();

    nameInput.value = "";


    
}





