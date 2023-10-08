import { FormEvent, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTodoContext, ITodoContext } from '../context/TodoContext';


const NewTodoForm = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const { handleTodoAdd }: ITodoContext = useTodoContext();

  useEffect(() => {
    todoRef.current?.focus();
  }, [])

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: string | undefined = todoRef.current?.value;
    
    if (newTodo === '' || newTodo?.trim() === '') {
      return;
    }
    
    handleTodoAdd(newTodo || '');
    if (todoRef.current?.value) {
      todoRef.current.value = '';
    }
  };


  return (
    <Form onSubmit={handleFormSubmit} className='flex justify-content-end mb-5'>
      <Form.Group className="mb-3" controlId="TodoForm">
        <Form.Label hidden>To do</Form.Label>
        <Form.Control 
          ref={todoRef}
          type="text" 
          placeholder="Add todo" />
      </Form.Group>

      <Button 
        className='w-100'
        variant="secondary" 
        type="submit"
      >
        Submit
      </Button>
    </Form>
  )
}

export default NewTodoForm;