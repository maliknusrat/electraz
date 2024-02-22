import  { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AllProducts = () => {
    const { user } = useContext(AuthContext);
    const n = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    
    const handleAddToCart = (product) => {
        if (user?.email) {
            const image = product.image;
            const category = product.category;
            const price = product.price;
            const rating = product.rating;
            const brandName = product.brandName;
            const details = product.details;
            const id = product._id;
            const email = user?.email;
            fetch("http://localhost:5000/addToCart", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({image,category,price,rating,brandName,details,email,id}),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    title: "Success!",
                    text: "Cart Added Successfully",
                    icon: "success",
                    confirmButtonText: "Cool!!!",
                  });
                }
              });
        } else {
            Swal.fire({
              title: "Warning!",
              text: "Please login...!!",
              icon: "warning",
              confirmButtonText: "Cool!!!",
            }).then(result => {
                if (result.isConfirmed) {
                    n('/login');
                }
            });
        }
    }
    return (
      <div className="max-w-7xl mx-auto py-20">
        <p className="text-center text-3xl mb-10 font-bold uppercase">
          Our Products
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <div key={product._id}>
                <div className="card w-80 bg-base-100 shadow-xl">
                  <figure>
                    <img src={product.image} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.category}</p>
                    <p>{product.brandName}</p>
                    <div className="card-actions justify-end gap-5">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-warning"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to={`/productDetails/${product._id}`}
                        className="btn btn-primary"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AllProducts;