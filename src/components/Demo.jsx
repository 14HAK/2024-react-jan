import { useReducer } from 'react';

const initialState = [
  { name: 'josim', age: 33 },
  { name: 'masud', age: 56 },
  { name: 'roman', age: 17 },
];

const reducer = (state, action) => {
  const data = state.filter((el) => el.name !== 'masud');
  data.push(action?.payload);
  return [...data];
};

function Demo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <h1 className='text-2xl font-bold'>{state[0]?.age}</h1>
      <button
        onClick={() =>
          dispatch({ type: 'demo', payload: { name: 'mina', age: 21 } })
        }
        className='bg-red-700 text-white py-2 px-5 border-green-950'
      >
        click to increment age
      </button>
    </div>
  );
}

export default Demo;
