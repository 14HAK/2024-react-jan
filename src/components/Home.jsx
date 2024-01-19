import { useContext } from 'react';
import { myContext } from '../App';

function Home() {
  const data = useContext(myContext);
  console.log(data);
  return (
    <div>
      <p className='text-5xl font-bold px-10 py-10 text-green-700'>HOME PAGE</p>
    </div>
  );
}

export default Home;
