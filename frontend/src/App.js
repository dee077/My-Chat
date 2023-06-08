import './css/App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './pages/HomePage';
import ChatsPage from './pages/ChatsPage';

function App() {
  return (
    <div className="App">
        <Route path='/' component={HomePage} exact />
        <Route path='/chats' component={ChatsPage} exact />
    </div>
  );
}

export default App;
