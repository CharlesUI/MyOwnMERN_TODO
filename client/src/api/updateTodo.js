import { API_URL } from "./config"

const updateTodo = (todo) => {
    return fetch(`${API_URL}/todos/${todo._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: todo.text,
            completed: todo.completed
        })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default updateTodo