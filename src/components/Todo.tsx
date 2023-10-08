import { Form, Button, FormCheck  } from 'react-bootstrap';
import { useTodoContext, ITodoContext } from '../context/TodoContext';
import { ITodo } from '../context/TodoContext';

interface TodoProps {
  filteredTodo: ITodo;
};

const Todo = ({ filteredTodo }: TodoProps) => {
  const {
    handleTodoToggle,
    handleTodoDelete
  }: ITodoContext = useTodoContext();

  const { id, title, isCompleted }: ITodo = filteredTodo;

  return (
    <div className='d-flex align-items-center justify-content-between mb-2'>
      <Form.Check
        className='me-5 fs-6'
        id={id}
      >
        <FormCheck.Input 
          type="checkbox" 
          onChange={() => {handleTodoToggle(id)}} 
        />
        <FormCheck.Label className={isCompleted ? 'text-decoration-line-through' : ''}>
          {title}
        </FormCheck.Label>

      </Form.Check>
      <Button
        size='sm' 
        variant="outline-danger"
        onClick={() => (handleTodoDelete(id))}
      >
        delete
      </Button>

    </div>
  );
}

export default Todo;