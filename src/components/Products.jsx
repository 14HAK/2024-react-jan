import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from './productSlice';
import { useEffect, useState } from 'react';

function Products() {
  const products = useSelector((state) => state?.productSlice?.entities);
  // console.log(products);

  return (
    <div className='m-20 grid grid-cols-3 gap-5'>
      {products?.map((product) => {
        return <Product key={product?.model} product={product} />;
      })}
    </div>
  );
}

const Product = ({ product }) => {
  const [random, setRandom] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 6) + 0.6;
    setRandom(randomNum);
  }, [dispatch]);

  const handleAddProduct = () => {
    return dispatch(
      addProduct({
        payload: {
          name: 'iphone',
          model: `${random}.${random}`,
          price: 120000,
        },
      })
    );
  };

  const handleRemoveProduct = () => {
    return dispatch(removeProduct());
  };

  return (
    <div className='p-3 border border-blue-600  rounded-md bg-slate-200'>
      <h3 className='pb-4 text-red-900 text-3xl'>{product?.name}</h3>
      <p className='p-1 text-gray-700 text-xl'>{product?.model}</p>
      <p className='p-1 text-gray-700 text-xl'>{product?.price} $$</p>

      <button
        onClick={handleAddProduct}
        className='py-1 px-3 border rounded-lg bg-green-500 hover:bg-green-400 text-slate-600'
      >
        Add Dummy Product
      </button>

      <button
        onClick={handleRemoveProduct}
        className='py-1 px-3 border rounded-lg bg-red-500 hover:bg-red-400 text-slate-600'
      >
        Delete Product
      </button>
    </div>
  );
};

export default Products;
