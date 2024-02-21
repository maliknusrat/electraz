import { ShoppingCartOutlined, UserDeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import img from '../../assets/technology_4257487.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
  }
 console.log(user);
  const navlinks = <>
    <li><NavLink to='/' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Home</NavLink></li>
    <li><NavLink to='/addProduct' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Add Product</NavLink></li>
  </>
  const navEndlinks = <>
    {user ? <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 ">
      <p className='w-[150px]'>{user.displayName}</p>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            // width={200}
            src={user.photoURL}
          />
        </div>
      </label>
      <UserDeleteOutlined onClick={logoutHandler} className=" text-2xl hover:text-slate-800"></UserDeleteOutlined></div> : <NavLink to='/login' className={({ isActive }) => isActive ? "text-red-600 underline" : ''}> <UserOutlined className="text-2xl"></UserOutlined></NavLink>}
    <NavLink className="text-2xl" to=''><ShoppingCartOutlined /></NavLink>

  </>

  return (
    <div className=''>
      <div className="navbar bg-amber-500 bg-opacity-25 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 ">
              {navlinks}
              {navEndlinks}
            </ul>
          </div>
          <Link className='flex items-center gap-2' to='/'><img className='w-10' src={img} alt="" />
          <h1 className="text-3xl"><span className='font-black text-cyan-900'>Electra</span>Z</h1>
          </Link>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-6">
          
          {navEndlinks}

        </div>
      </div>
    </div>
  );
};

export default Navbar;