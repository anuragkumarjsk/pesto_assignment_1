import './App.css';
import Form  from './components/form';
import Todolist from './components/list';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>To-do-list</h2>
       <Form/>
       <Todolist/>
      </header>
    </div>
  );
}

export default App;
