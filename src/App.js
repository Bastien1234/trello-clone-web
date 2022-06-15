import './App.css';
import Home from './components/Home/Home.tsx';
import Workspace from './components/Workspace/Workspace.tsx';
import Signup from './components/Signup/Signup';

import {UserContext, UserState} from './context/UserContext';


function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
