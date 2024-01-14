import { useState } from 'react';

export default function Home() {
  const [stateNum, setStateNum] = useState(0);
  console.log(stateNum);

  const handleStateManage = (command) => {
    if (command === 'inc') setStateNum(stateNum + 1);
    if (command === 'dec' && stateNum > 0) setStateNum(stateNum - 1);
  };

  return (
    <div className='w-10/12 p-10 m-auto'>
      <button
        onClick={() => handleStateManage('inc')}
        className='py-2 px-6 bg-green-700 hover:bg-green-400 border-amber-900 rounded mr-5'
      >
        increase +
      </button>
      <button
        onClick={() => handleStateManage('dec')}
        className='py-2 px-6 bg-red-700 hover:bg-red-400 border-amber-900 rounded'
      >
        decrease -
      </button>

      <h1 className='mt-10 p-5 bg-yellow-900 text-white rounded-md text-5xl font-bold'>
        state view: {stateNum}
      </h1>
    </div>
  );
}
