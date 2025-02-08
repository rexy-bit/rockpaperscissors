let todoList = JSON.parse(localStorage.getItem("todoList")) || [
    {
        name : 'Go to school',
        date : '2025-02-08'
    },
    {
        name : 'make dinner',
        date : '2025-02-08'
    }
    
];


const addButton = document.querySelector(".add-button");
renderTodoList();
addButton.addEventListener("click", ()=>{

    addTodo();
});

function renderTodoList(){
    let todoListHTML = "";

    todoList.forEach(function(todoObject, i){
       
      //let name = todoObject.name;
      //let date = todoObject.name;

      const {name, date} = todoObject;

      const html = `
          <div class="displays">
              <div class="name">${name}</div>
              <div class="date">${date}</div>
              <button class="delete-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
              ">
                  Delete
              </button>
          </div>
      `;
     
    
      todoListHTML += html;
    });

    document.querySelector(".todos").innerHTML = todoListHTML;
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addTodo(){

    let nameInput = document.querySelector(".input-todo");
    let dateInput = document.querySelector(".input-date");
    let name = nameInput.value ;
    let date = dateInput.value;

    todoList.push({
        name,
        date,
    });

    renderTodoList();

    nameInput.value = "";

}



