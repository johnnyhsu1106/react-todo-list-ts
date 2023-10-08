import Wrapper from './components/Wrapper';
import NewTodoForm from './components/NewTodoForm';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';

import { TodoProvider } from './context/TodoContext';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


const App = () => {
  return (
    <TodoProvider>
      <Wrapper>
        <SearchBar />
        <NewTodoForm />
        <TodoList />
      </Wrapper>
    </TodoProvider>
  )
}

export default App;