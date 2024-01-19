import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './Navbar';

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);

  const isLoading = navigation?.state === 'loading';

  return (
    <>
      {isLoading && (
        <h1 className='text-4xl flex justify-center items-center align-middle py-5 text-blue-700 font-semibold'>
          loading...
        </h1>
      )}
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
