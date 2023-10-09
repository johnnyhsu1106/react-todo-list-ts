import { createContext, useContext, useState, useMemo, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
  id: string,
  title: string, 
  isCompleted: boolean
};

export interface ITodoContext {
  query: string
  filteredTodos: ITodo[];
  handleTodoAdd: (title: string) => void; 
  handleTodoToggle: (id: string) => void; 
  handleTodoDelete: (id: string) => void; 
  handleCompletedTodosDelete: () => void; 
  handleAllTodosDelete: () => void;
  hangleSearchQueryChange: (query: string) => void;
  handleSearchQueryClear: () => void;
};

const TodoContext = createContext<ITodoContext | null>(null);

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}

const TodoProvider = ({ children } : { children: ReactNode}) => {
  const [query, setQuery] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const filteredTodos: ITodo[] = useMemo(() => {
    return todos.filter((todo: ITodo) => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [todos, query]);

  const handleTodoAdd = (title: string) => {
    setTodos((prevTodos: ITodo[]) => {
      return [...prevTodos, {id: uuidv4(), title, isCompleted: false}];
    });
  };

  const handleTodoToggle = (id: string): void => {
    setTodos((prevTodos: ITodo[]) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo;
      });
    });
  };

  const handleTodoDelete = (id: string): void => {
    setTodos((prevTodos: ITodo[]) => {
      return prevTodos.filter((todo) => { 
        return todo.id !== id;
      });
    });
  };

  const handleCompletedTodosDelete = (): void => {
    setTodos((prevTodos: ITodo[]) => {
      return prevTodos.filter((todo) => {
        return !todo.isCompleted;
      }); 
    })
  };

  const handleAllTodosDelete = (): void => {
    setTodos([]);
    setQuery('');
  };

  const hangleSearchQueryChange = (query: string) => {
    setQuery(query);
  };

  const handleSearchQueryClear = (): void => {
    setQuery('');
  };

  const value: ITodoContext = {
    query,
    filteredTodos,
    handleTodoAdd,
    handleTodoToggle,
    handleTodoDelete,
    handleCompletedTodosDelete,
    handleAllTodosDelete,
    hangleSearchQueryChange,
    handleSearchQueryClear
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export { useTodoContext, TodoProvider };
