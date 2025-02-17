let todoList = JSON.parse(localStorage.getItem('todoList')) || 
[
    {
        name : 'make dinner',
        dete : '2025-02-07'
    },{
        name : 'Watch youtube',
        date : '2025-02-09'
    }
];

renderTodoList();

function renderTodoList(){

     let todoListHTML = '';

     todoList.forEach(function(todoObject, index){
         
         const { name } = todoObject;
         const { date } = todoObject;

         const html  =  `
         <div class="inputs">
            <div class="name">
                ${name}
            </div>

            <div class="date">
              ${date}
            </div>

            <button class="delete-button" onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            ">
               Delete
            </button>
         
         </div>
      `;

      todoListHTML += html;
            
         

     });
     /*

     for(let i = 0;i<todoList.length;i++){
        let todoObject = todoList[i];

        //let name = todoObject.name;
        //let date = todoObject.date;
        let {name} = todoObject;
        let {date} = todoObject;

        let html = `
           <div class="inputs">
              <div class="name">
                  ${name}
              </div>

              <div class="date">
                ${date}
              </div>

              <button class="delete-button" onclick="
                 // todoList.splice(${i}, 1);
                  renderTodoList();
              ">
                 Delete
              </button>
           
           </div>
        `;

       // todoListHTML += html;
     }
        */

     document.querySelector('.display-todo').innerHTML = todoListHTML;

     localStorage.setItem('todoList', JSON.stringify(todoList));


}


function addTodo(){

    let todoInput = document.querySelector('.input-bar');
    let name = todoInput.value;
    
    let dateInput = document.querySelector('.input-date');
    let date = dateInput.value;

    todoList.push({
            //name : name,
            //date : date

            name,
            date,
        });

     renderTodoList();

    todoInput.value = '';

}