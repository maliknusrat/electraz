import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddToCart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/addToCart")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <div className="max-w-5xl mx-auto py-20">
        <p className="text-center text-3xl mb-5 font-bold uppercase mt-20">
          My Cart
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {products.map((product) => (
              <div key={product._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src={product.image} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.category}</p>
                    <p>{product.brandName}</p>
                    <div className="card-actions justify-end gap-5">
                      <Link
                        to={`/productDetails/${product.id}`}
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

export default AddToCart;