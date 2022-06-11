import './App.css';
import Home from './components/Home/Home.tsx';
import Workspace from './components/Workspace/Workspace.tsx';

import {UserContext, UserState} from './context/UserContext';


function App() {
  return (
    <div className="App">
      <Workspace />
    </div>
  );
}

export default App;
