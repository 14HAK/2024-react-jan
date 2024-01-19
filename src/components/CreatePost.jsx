function CreatePost() {
  return (
    <div>
      <p className='text-3xl font-bold px-10 py-10 underline text-red-700 mb-2'>
        CREATE NEW POST
      </p>
      <br />
      <form action='posts/new' method='post'>
        <label htmlFor='inputTitle' className='text-xl m-2 px-2'>
          Title
        </label>
        <input
          type='text'
          id='inputTitle'
          className='border py-1 px-3 m-2 rounded-md text-lg border-orange-300'
        />

        <label htmlFor='inputBody' className='text-xl m-2 px-2'>
          Body
        </label>
        <input
          type='text'
          id='inputBody'
          className='border py-1 px-3 m-2 rounded-md text-lg border-orange-300'
        />

        <label htmlFor='inputUserid' className='text-xl  m-2 px-2'>
          Userid
        </label>
        <input
          type='text'
          id='inputUserid'
          className='border py-1 px-3 m-2 rounded-md text-lg border-orange-300'
        />

        <button
          disabled
          className='border border-green-400 py-1 px-5 m-2 rounded-md text-lg'
        >
          Post Posted Now{' '}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

// need to post data in normal way
