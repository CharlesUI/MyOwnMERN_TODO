import { API_URL } from "./config"

const getAllTodos = () => {
    return fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data.todos)
    .catch(err => console.log(err))
}

export default getAllTodos