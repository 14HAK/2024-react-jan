import { useEffect } from 'react';
import { useRef } from 'react';

function Temo() {
  const anyRef = useRef();

  useEffect(() => {
    console.log(anyRef.current);
    anyRef.current.classList.add('text-7xl');
  }, []);

  return (
    <div>
      <p ref={anyRef} className='text-2xl font-bold text-red-700'>
        Temo
      </p>
      <h1 className='text-2xl font-bold text-green-700'>lipo</h1>
    </div>
  );
}

export default Temo;
