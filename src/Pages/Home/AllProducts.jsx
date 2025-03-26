import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";
import { BsCart3 } from "react-icons/bs";
import useCart from "../../hooks/useCart";

const AllProducts = () => {
  const { user } = useContext(AuthContext);
  const n = useNavigate();
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);
  const { refetch } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    if (user?.email) {
      const {
        productName,
        image,
        category,
        price,
        Rating,
        brandName,
        details,
        _id,
      } = product;
      const email = user?.email;
      fetch("http://localhost:5000/addToCart", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          productName,
          image,
          category,
          price,
          Rating,
          brandName,
          details,
          email,
          id: _id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "Cart Added Successfully",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Warning!",
        text: "Please login...!!",
        icon: "warning",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          n("/login");
        }
      });
    }
  };

  const handleLoadMore = () => {
    setVisibleProducts(visibleProducts + 3);
  };

  return (
    <div className="max-w-7xl mx-auto py-20">
      <p className="text-center text-3xl mb-10 font-bold uppercase">
        Our Products
      </p>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.slice(0, visibleProducts).map((product) => (
            <motion.div
              key={product._id}
              className="card bg-base-100 shadow-xl rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <figure>
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold text-gray-800">
                    {product.productName}
                  </div>
                  <motion.div
                    className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 10px rgba(255,255,255,0.7)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.category}
                  </motion.div>
                </div>

                <motion.p
                  className="text-xl text-gray-500 mt-2"
                  whileHover={{
                    scale: 1.05,
                    color: "#FF6347",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-semibold">
                    {product.brandName}
                  </span>
                </motion.p>
                <div className="flex items-center justify-between">
                  <div className="text-xl ">{product.Rating} ★</div>
                  <div className="text-xl font-bold text-gray-800">
                    $ {product.price}
                  </div>
                </div>

                <div className="card-actions justify-between mt-5">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-warning text-white py-2 px-4 rounded-md"
                  >
                    <BsCart3 className="w-20 h-6 text-black" />
                  </button>
                  <Link
                    to={`/productDetails/${product._id}`}
                    className="btn bg-black text-white py-2 px-4 rounded-md"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-10">
        <div>
          {visibleProducts < products.length && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="w-36 h-16 mt-8 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"
              >
                <span className="absolute w-12 group-hover:w-[88%] duration-300 flex  rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                Load More...
              </button>
            </div>
          )}
        </div>
        <div>
          <Link to="/product">
            <button className="w-36 h-16 mt-8 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group">
              <span className="absolute w-12 group-hover:w-[88%] duration-300 flex  rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
