let todoList = JSON.parse(localStorage.getItem("todoList")) ||  [
    {
        name : "Make dinner",
        date : "2025-02-14"
    },{
        name : "Take a shower",
        date : "2025-02-14"
    }
];

const add = document.querySelector(".add");



add.addEventListener("click", ()=>{
    addTodo();
});

renderTodoList();

function renderTodoList(){
    let todoListHTML = "";

    todoList.forEach((todoObject, i)=>{
        let name = todoObject.name;
        let date = todoObject.date;

        const html = `
          
          <div class="display-ouputs">

             <div class="name">${name}</div>
             <div class="date">${date}</div>
             <button class="delete-button" data-index = "${i}">
                Delete
             </button>
          </div>
        
        `;

        todoListHTML += html;
    });

    document.querySelector(".display-todo").innerHTML = todoListHTML;
    localStorage.setItem("todoList", JSON.stringify(todoList));

    document.querySelectorAll(".delete-button").forEach((button)=>{
        button.addEventListener("click", (event)=>{
            let index = event.target.dataset.index;

            todoList.splice(index, 1);
            renderTodoList();
        });
    });

 



}


function addTodo(){

     let todoInput = document.querySelector(".input-bar");
     let dateInput = document.querySelector(".input-date");

     let name = todoInput.value;
     let date = todoInput.value;

     todoList.push({
        name,
        date
     });

     renderTodoList();

     todoInput.value = "";

}




