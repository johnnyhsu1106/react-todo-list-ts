import { Button } from 'react-bootstrap';
import { useTodoContext,  ITodoContext  } from '../context/TodoContext';

const ControlButtons = () => {
  const {
    handleCompletedTodosDelete,
    handleAllTodosDelete
  }: ITodoContext = useTodoContext();
  
  return (
    <>
      <Button
        className='fs-0'
        size='sm'
        variant='outline-light'
        onClick={handleCompletedTodosDelete}
      >
        Clear Completed
      </Button>
      <div className='vr' />
      <Button 
        size='sm'
        variant='danger'
        onClick={handleAllTodosDelete}
      >
        Reset
      </Button>
    </>
  )
}

export default ControlButtons;