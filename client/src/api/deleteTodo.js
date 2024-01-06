import { API_URL } from "./config"

const deleteTodo = (todo) => {
    return fetch(`${API_URL}/todos/${todo._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default deleteTodo