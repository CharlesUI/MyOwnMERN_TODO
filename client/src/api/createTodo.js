import { API_URL } from "./config"

const createTodo = (todo) => {
    return fetch(`${API_URL}/todos`, {
        method: 'POST',
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

export default createTodo