import './App.css';
import { Login } from './pages/Login/login';
import { GlobalStyle } from './globalStyles.js';

function App() {
  return (
    <div className="App">
      <Login/>
      <GlobalStyle />
    </div>
  );
}

export default App;
