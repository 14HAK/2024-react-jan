import { createContext } from 'react';
import Home from './components/Home';
import Manu from './components/Manu';

export const myContext = createContext();

function App() {
  const myContextData = {
    entities: [
      { name: 'jonas', age: 32 },
      { name: 'dulon', age: 28 },
    ],
    loading: 'idle',
  };

  return (
    <myContext.Provider value={myContextData}>
      <Home />
      {/* <Manu /> */}
    </myContext.Provider>
  );
}

export default App;
