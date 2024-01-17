import { useDispatch, useSelector } from 'react-redux';
import { down, up } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();

  const handleUp = () =>
    dispatch(up({ typr: 'up', payload: { name: 'loyal', age: 11 } }));
  const handleDown = () =>
    dispatch(down({ type: 'down', payload: { name: 'moffol', age: 19 } }));

  const data = useSelector((state) => state);
  console.log(data.counter);

  return (
    <div>
      <p className='bg-yellow-500 p-5 m-10 text-2xl rounded-md font-bold'>
        state result
      </p>
      <button
        onClick={() => handleUp()}
        className='border border-green-700 hover:bg-green-700 transition-opacity mx-10 px-5 py-2 rounded-lg'
      >
        click-Up
      </button>
      <button
        onClick={() => handleDown()}
        className='border border-red-700 mx-2 hover:bg-red-700 transition-opacity px-5 py-2 rounded-lg'
      >
        click-Down
      </button>
    </div>
  );
}

export default Counter;
