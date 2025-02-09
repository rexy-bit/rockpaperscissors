let todoList = JSON.parse(localStorage.getItem("todoList")) ||
 [{
    name : "make dinner",
    date : "09-02-2025"
},{
    name : "Watch youtube",
    date : "09-02-2025"
}
];



let addButton = document.querySelector(".add-todo");

addButton.addEventListener("click", ()=>{
    addTodo();
});

renderTodoList();



function renderTodoList(){
    let todoListHTML = "";

    todoList.forEach((todoObject, i)=>{
        let name = todoObject.name;
        let date = todoObject.date;

        const html = `
           <div class="displays2">
                <div class="name">
                   ${name}
                </div>
                <div class="date">
                   ${date}
                </div>

                 <button class="delete-button"
                   onclick="
                     todoList.splice(${i}, 1);
                     renderTodoList();
                   "
                 >
                    Delete
                 </button>
            </div>
        `;
        todoListHTML += html;

        

    });

    document.querySelector(".displays").innerHTML = todoListHTML;
        
        localStorage.setItem("todoList", JSON.stringify(todoList));
}
function addTodo(){

    let nameInput = document.querySelector(".input-bar");
    let name = nameInput.value;

    let dateInput = document.querySelector(".input-date");
    let date = dateInput.value;

    todoList.push({
        name,
        date
    });

      renderTodoList();
     

    nameInput.value = "";


}