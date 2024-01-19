import { NavLink } from 'react-router-dom';
import './link.css';

function Navbar() {
  return (
    <div className='flex justify-center items-center bg-slate-700 py-2 px-5'>
      <NavLink
        to={'/'}
        className={`${({ isActive }) => {
          return isActive && 'active';
        }} px-2 text-xl text-white font-bold hover:text-green-300 transition-transform`}
      >
        Home
      </NavLink>
      <NavLink
        to={'/manu'}
        className='px-2 text-xl text-white font-bold hover:text-green-300 transition-transform'
      >
        Manu
      </NavLink>
      <NavLink
        to={'/cart'}
        className='px-2 text-xl text-white font-bold hover:text-green-300 transition-transform'
      >
        Cart
      </NavLink>
      <NavLink
        to={'/posts'}
        className='px-2 text-xl text-white font-bold hover:text-green-300 transition-transform'
      >
        Post
      </NavLink>
      <NavLink
        to={'/newpost'}
        className='px-2 text-xl text-white font-bold hover:text-green-300 transition-transform'
      >
        New Post
      </NavLink>
      <NavLink
        to={'/search'}
        className='px-2 text-xl text-white font-bold hover:text-green-300 transition-transform'
      >
        Search
      </NavLink>
    </div>
  );
}

export default Navbar;
