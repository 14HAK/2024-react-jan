import { useState } from 'react';
import { useCallback } from 'react';

function Temo() {
  const [data, setData] = useState({ name: 'lobo', age: '10' });
  console.log('normal component');

  const handleFunc = useCallback(() => {
    setData({ name: 'tosi', age: '35' });
    console.log('useCallback');
  }, []);

  return (
    <div>
      <button
        onClick={() => handleFunc()}
        className='border border-red-700 py-2 px-5 m-5'
      >
        {data?.name}
      </button>
    </div>
  );
}

const Moll = () => {
  return <div>calosa</div>;
};

export default Temo;
