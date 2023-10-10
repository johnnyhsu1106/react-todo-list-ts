import { InputGroup, Form, Stack } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext'
import ControlButtons from './ControlButtons';

const SearchBar = () => {
  const {
    query,
    handleSearchQueryClear,
    hangleSearchQueryChange
  } = useTodoContext();

  return (
    <Stack 
      className='flex m-3 position-absolute top-0 end-0'
      gap={3} 
      direction='horizontal'
    >
      <InputGroup>
        <Form.Control
          type='text'
          placeholder="Search todo"
          aria-label="search"
          value={query}
          onChange={(e) => { hangleSearchQueryChange(e.target.value) }}
        />
        <InputGroup.Text
          className='clear-search-btn'
          onClick={handleSearchQueryClear}
        >
          &times;
        </InputGroup.Text>
      </InputGroup>
      <ControlButtons />
    </Stack>
  )
}

export default SearchBar