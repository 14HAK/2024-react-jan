import { Provider } from 'react-redux';
import Products from './components/products';
import store from './components/store';
import Posts from './components/Posts';

function App() {
  return (
    <Provider store={store}>
      <Products />
      <Posts />
    </Provider>
  );
}

export default App;
