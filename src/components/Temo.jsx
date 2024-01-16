import { useEffect, useMemo } from 'react';

function Temo() {
  useEffect(() => {
    console.log('parent components');
  }, []);

  const memoizedComponent = useMemo(() => {
    return <Child />;
  }, []);

  const handleClick = () => {
    console.log('handle clicked');
  };
  return (
    <div>
      <button
        onClick={() => handleClick()}
        className='border border-red-700 py-2 px-5 m-5'
      >
        click-me
      </button>
      {memoizedComponent}
    </div>
  );
}

const Child = () => {
  useEffect(() => {
    console.log('child components');
  }, []);
  return (
    <div>
      <p>i am child</p>
    </div>
  );
};

export default Temo;
