let todoList = JSON.parse(localStorage.getItem('todoList')) || [
{
    name : 'make dinner',
    dueDate : '2025-02-06'
},{
    name : 'watch youtube',
    dueDate : '2025-02-06'
}
   
];

     renderTodoList();
    
    
            function renderTodoList(){
    
                let todoListHTML = '';

    
                for(let i = 0;i<todoList.length;i++){

                    const todoObject = todoList[i];

                    //const name = todoObject.name;
                    const { name } = todoObject;
                    //const dueDate = todoObject.dueDate;
                    const {dueDate} = todoObject;

                    const html = `<div>
                             <p class="todo-text">${name} ${dueDate}</p>
                             
                             <button class="delete-button" onclick="
                                todoList.splice(${i}, 1);
                                renderTodoList();
                             "
                             >Delete
                             </button>
                        </div>`;
                    todoListHTML += html;
                }
    
                document.querySelector('.add-todo').innerHTML = todoListHTML;

                localStorage.setItem('todoList', JSON.stringify(todoList));
    
            }
    
            function addTodo(){
    
                let todoInput = document.querySelector('.side-bar');
                let name = todoInput.value;

                let todoDate = document.querySelector('.todo-date');
                let dueDate = todoDate.value;

    
                todoList.push(
                    {
                    //name : name,
                    //date : dueDate
                    name,
                    dueDate
                }
            );
    
                todoInput.value = '';
               
    
                
                renderTodoList();
    
            }