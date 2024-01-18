import { useDispatch, useSelector } from 'react-redux';
import { postsData } from './postSlice';

function Posts() {
  const dispatch = useDispatch();

  const allPost = useSelector((state) => {
    return state?.posts?.entities;
  });

  console.log(allPost);

  const handleGetPosts = () => {
    return dispatch(postsData());
  };

  return (
    <div className='text-2xl p-5 m-5 bg-cyan-900 text-white rounded-lg '>
      <p className='mb-5'>
        get All Post Length:{' '}
        <span className='text-red-400 font-bold text-7xl'>
          {allPost?.length}
        </span>
      </p>
      <button
        onClick={handleGetPosts}
        className='px-2  border rounded-lg bg-green-500 hover:bg-green-400 text-slate-600'
      >
        Get All Posts
      </button>
    </div>
  );
}

export default Posts;
