import { Form } from 'react-bootstrap';
import { useTodoContext, ITodoContext } from '../context/TodoContext';
import Todo from './Todo';


const TodoList = () => {
  const { filteredTodos }: ITodoContext = useTodoContext();

  return (
    <>
      <h1 className='fs-2 mb-4'>To Do ......</h1>

      <Form>
        {filteredTodos.map((filteredTodo) => {
          const {id} = filteredTodo;
          return (
            <Todo
              key={id}
              filteredTodo={filteredTodo}
            />
          )
        })}
      </Form>
    </>
  )
}

export default TodoList;