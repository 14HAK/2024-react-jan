import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import Cart from './components/Cart';
import Manu from './components/Manu';
import Posts from './components/Posts';
import { getPostData } from './fetures/getPost';
import CreatePost from './components/CreatePost';
import Search from './components/Search';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <p>error in home router</p>,
      },
      {
        path: '/manu',
        element: <Manu />,
        errorElement: <p>error in home router</p>,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <p>error in home router</p>,
      },
      {
        path: '/posts',
        element: <Posts />,
        errorElement: <p>error in home router</p>,
        loader: () => getPostData(),
      },
      {
        path: '/newpost',
        element: <CreatePost />,
        errorElement: <p>error in home router</p>,
        // action: createSinglePost,
      },
      {
        path: '/search',
        element: <Search />,
        errorElement: <p>error in home router</p>,
        // action: createSinglePost,
      },
    ],
  },
  {
    path: '*',
    element: <p> global error happen!</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
