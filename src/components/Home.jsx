import { useForm } from 'react-hook-form';

function Home() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  // console.log(errors);
  console.log(getValues()?.price);

  const mySubmit = (data) => console.log(data);
  return (
    <div>
      <p className='text-5xl font-bold px-10 py-10 text-green-700'>HOME PAGE</p>
      <br />
      <form onSubmit={handleSubmit(mySubmit)}>
        <div className='flex justify-start items-center'>
          <input
            type='text'
            {...register('firstName', { required: true })}
            className='border border-green-800 m-1 p-1 text-xl'
          />
          <p className='text-red-500 m-1 p-1 text-sm'>
            {errors?.firstName && 'firstName is required!'}
          </p>
        </div>
        {/* <br /> */}
        <div className='flex justify-start items-center'>
          <input
            type='text'
            {...register('lastName', { required: true })}
            className='border border-green-800 m-1 p-1 text-xl'
          />
          <p className='text-red-500 m-1 p-1 text-sm'>
            {errors?.lastName && 'lastName is required!'}
          </p>
        </div>
        {/* <br /> */}
        <div className='flex justify-start items-center'>
          <input
            type='number'
            {...register('price', {
              required: 'price is required!',
              min: {
                value: 10,
                message: 'price value minimum 10',
              },
            })}
            className='border border-green-800 m-1 p-1 text-xl'
          />
          <p className='text-red-500 m-1 p-1 text-sm'>
            {errors?.price?.message}
          </p>
        </div>
        {/* <br /> */}
        <div className='flex justify-start items-center'>
          <input
            type='number'
            {...register('discount', {
              required: 'discount is required!',
              validate: (value) => {
                const discountPrice = value <= getValues()?.price;
                return discountPrice
                  ? discountPrice
                  : 'Discount Should not be Grater than Price!';
              },
            })}
            className='border border-green-800 m-1 p-1 text-xl'
          />
          <p className='text-red-500 m-1 p-1 text-sm'>
            {errors?.discount?.message}
          </p>
        </div>
        {/* <br /> */}
        <input
          type='submit'
          value='submit form'
          className='border border-green-800 m-1 p-1 text-xl cursor-pointer hover:bg-orange-500'
        />
      </form>
    </div>
  );
}

export default Home;
