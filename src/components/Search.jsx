import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (value) => {
    searchParams.set('filter', value);
    setSearchParams(searchParams);
  };

  console.log(searchParams.get('filter'));

  return (
    <div>
      <button
        onClick={() => handleSearch('discount')}
        className='py-2 px-9 my-10 mx-2 flex justify-center items-center align-middle border border-red-900 hover:bg-green-900'
      >
        add filter to useSearchParams 1
      </button>

      <button
        onClick={() => handleSearch('miscount')}
        className='py-2 px-9 my-10 mx-2 flex justify-center items-center align-middle border border-red-900 hover:bg-orange-300'
      >
        add filter to useSearchParams 2
      </button>
    </div>
  );
}

export default Search;
