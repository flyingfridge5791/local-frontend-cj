let todos = [
    {
        id: '1',
        title: 'Todo One',
        completed: false
    },    
    {
        id: '2',
        title: 'Todo Two',
        completed: false
    },    
    {
        id: '3',
        title: 'Todo Three',
        completed: false
    },
    {
        id: '4',
        title: 'Todo Four',
        completed: false
    },
]


const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addTodo');
const output = document.querySelector('#todos');

if(localStorage.getItem("todos") != null) {

    todos = JSON.parse(localStorage.getItem("todos"));
}

// fetch ('https://jsonplaceholder.typicode.com/todos?_start=1&_limit=10')
// .then(res => res.json())
// .then(data => {
//     todos = data;
//     listTodos();
// })

function listTodos() {
    output.innerHTML = '';
    todos.forEach(todo => {
        output.innerHTML +=
            `
        <div id="${todo.id}" class="border rounded bg-white d-flex justify-content-between align-items-center p-2 ">${todo.title}
         <button class="btn btn-danger px-3">X</button></div>
        `;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

listTodos()

input.addEventListener('keyup', () => { 
    input.classList.remove('is-invalid');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    
    if(input.value !== '') {

        let title = input.value;

        // fetch('https://jsonplaceholder.typicode.com/todos',{
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8'
        //     },
        //     body:  JSON.stringify({
        //         title: title,
        //         completed: false
        //     })
        // })
        // .then(res => res.json())
        // .then(data => console.log(data));



        let todo = {
            id: Date.now(),
            title: input.value,
            completed: false,
        }
        todos.push(todo);
        input.value = '';

        // localStorage.setItem("todos", JSON.stringify(todo));
        // if(old != null) {
        //     todos = old;
        // }

        // console.log(old);
        
        listTodos();

    } else 
    {
        input.classList.add('is-invalid');
        setTimeout(() => {
            input.classList.remove('is-invalid');
        },3000)
    }

    
    // listTodos();
})

output.addEventListener('click', (e) => {
    // console.log(e.target.parentNode.id)
    todos = todos.filter(todo => todo.id != e.target.parentNode.id);
    listTodos();
})