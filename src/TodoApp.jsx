import { useState } from "react"
import { useGetTodoQuery } from "./store/apis"

export const TodoApp = () => {

    const [todoId, settodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoQuery(todoId)

    const nexTtodo = () => {
        settodoId(todoId + 1)
    }

    const prevTodo = () => {
        settodoId(todoId - 1)
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prevTodo}>
                Prev Todo
            </button>

            <button onClick={nexTtodo}>
                Next Todo
            </button>

            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{ todo.completed ? 'DONE ' : 'Pending '}</strong>
                        {todo.title}
                    </li>
                ))}
            </ul> */}


        </>
    )
}

