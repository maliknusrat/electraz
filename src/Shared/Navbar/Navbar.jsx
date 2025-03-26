import {
  ShoppingCartOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../../assets/technology_4257487.png";
import useCart from "../../hooks/useCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const { cartCount, refetch } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);

    return () => clearInterval(interval);
  }, [refetch]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(user?.displayName);
  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-600 underline font-bold" : "text-black"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive }) =>
            isActive ? "text-red-600 underline font-bold" : "text-black"
          }
        >
          ADD PRODUCT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "text-red-600 underline font-bold" : "text-black"
          }
        >
          PRODUCT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive ? "text-red-600 underline font-bold" : "text-black"
          }
        >
          ORDERS
        </NavLink>
      </li>
      <li>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
    </>
  );
  const navEndlinks = (
    <>
      <NavLink className="text-2xl" to="/addToCart">
        <div className="relative w-fit">
          <ShoppingCartOutlined />
          <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">
            {cartCount ?? 0}
          </span>
        </div>
      </NavLink>
      {user ? (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 ">
          <p className="w-[150px] text-black">{user?.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                // width={200}
                src={user?.photoURL}
              />
            </div>
          </label>
          <UserDeleteOutlined
            onClick={logoutHandler}
            className=" text-2xl hover:text-slate-800"
          ></UserDeleteOutlined>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-600 underline" : ""
          }
        >
          {" "}
          <UserOutlined className="text-2xl"></UserOutlined>
        </NavLink>
      )}
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-amber-500 bg-opacity-60 fixed z-10 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 "
            >
              {navlinks}
              {navEndlinks}
            </ul>
          </div>
          <Link className="flex items-center gap-2" to="/">
            <img className="w-10" src={img} alt="" />
            <h1 className="text-3xl">
              <span className="font-black text-cyan-900">Electra</span>Z
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-6">{navEndlinks}</div>
      </div>
    </div>
  );
};

export default Navbar;
