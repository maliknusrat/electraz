import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsCart3 } from "react-icons/bs";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const { user } = useContext(AuthContext);
  const { refetch } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Category" ||
      product.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      product.productName.toLowerCase().includes(searchTerm) ||
      product.price.toString().includes(searchTerm) ||
      product.Rating.toString().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  return (
    <div className="max-w-7xl mx-auto py-20">
      <p className="text-center text-3xl my-10 font-bold uppercase">
        Our Products
      </p>

      <div className="mb-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <input
              type="text"
              placeholder="Search by name, price, or rating"
              className="px-4 py-2 border rounded-lg w-80"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div>
            <select
              className="px-4 py-2 border rounded-lg"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option>Category</option>
              <option value="SmartPhones">Smart Phones</option>
              <option value="Laptop">Laptop</option>
              <option value="Watches">Watches</option>
              <option value="HeadPhones">Head Phones</option>
              <option value="Tablet">Tablet</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <motion.div
            key={product._id}
            className="card bg-white shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <figure>
              <img
                src={product.image}
                alt={product.productName}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body p-6">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {product.productName}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg text-gray-500 font-medium">
                  {product.category}
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <span className="font-semibold">{product.Rating} ★</span>
                </div>
              </div>

              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-4">
                $ {product.price}
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
                  className="btn btn-primary text-white py-2 px-4 rounded-md"
                >
                  Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <nav>
          <ul className="pagination flex gap-3">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / productsPerPage) },
              (_, index) => (
                <li key={index + 1} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`page-link py-2 px-4 rounded-md ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Product;
