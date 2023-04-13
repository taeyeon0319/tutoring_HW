import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoListBack from './components/TodoListBack';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';


function App() {
  return (
    <div id='app'>
      <TodoProvider>
        <TodoTemplate>
          <TodoHead />

          <TodoListBack>
            <TodoList />
          </TodoListBack>

          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>

    </div>
  );
}

export default App;
