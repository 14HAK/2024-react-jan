import { useLoaderData } from 'react-router-dom';

function Posts() {
  const allPost = useLoaderData();

  return (
    <div>
      <p className='text-5xl font-bold px-10 py-10 text-orange-700'>
        ALL POST LENGTH: {allPost?.length}
      </p>
    </div>
  );
}

export default Posts;
