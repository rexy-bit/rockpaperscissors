
let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
        name : 'make dinner',
        date : '2025-02-06'
    },{
        name : 'Wash dishes',
        date : '2025-02-06'
    }
];

renderTodoList();

  function renderTodoList(){

    let todoListHTML = '';

    for(let i = 0;i<todoList.length;i++){
        const todoObject = todoList[i];

        //const name = todoObject.name;
        //const date = todoObject.date;

        const {name} = todoObject;
        const {date} = todoObject;

        let html = `
         <div class="displays-todos">
           
               <div class="name">
                   ${name} 
               </div>

               <div class="date">
                  ${date}
               </div>

               <button class="delete-button" onclick="
                   todoList.splice(${i}, 1);
                   renderTodoList();

               ">
                  Delete
               </button>

           
           </div>
        `;

        todoListHTML += html;
    }

  
    document.querySelector('.display-todo').innerHTML = todoListHTML;

    localStorage.setItem('todoList', JSON.stringify(todoList));

      
  }
function addTodo(){
      
    const inputTodo = document.querySelector('.input-bar');
    let name = inputTodo.value;
    
    const inputDate = document.querySelector('.input-date');
    let date = inputDate.value;

    todoList.push({
        //name : name,
        //date : date
        name,
        date
    });

   renderTodoList();

    inputTodo.value = '';

    


}