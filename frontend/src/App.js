import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import homePage from './pages/homePage';
import chatsPage from './pages/chatsPage';

function App() {
  return (
    <div className="App">
        <Route path='/' component={homePage} exact />
        <Route path='/chats' component={chatsPage} exact />
    </div>
  );
}

export default App;
