import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const { id } = useParams();
    const n = useNavigate();
    const [product, setProduct] = useState(null);
    useEffect(() => {
      fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then((data) => setProduct(data));
    }, []);

    const handleDelete = id => {
        fetch(`http://localhost:5000/delete-product/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Success!",
                  text: "product deleted Successfully",
                  icon: "success",
                  confirmButtonText: "Cool!!!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    n("/");
                  }
                });
            }
        })
    }

    return (
      <div className="max-w-5xl mx-auto py-20">
        <div>
          <div className="">
            <div>
              <figure>
                <img
                  src={product?.image}
                  alt="Shoes"
                  className="rounded-lg w-[70%]"
                />
              </figure>
            </div>
            <div className="pt-16">
              <h2 className="font-bold text-3xl">{product?.productName}</h2>
              <p className="pt-3 text-2xl">{product?.price}</p>
              <p className="pt-3 text-xl">{product?.brandName}</p>
              <p className="pt-3 text-xl text-justify">{product?.details}</p>
              <div className="pt-16 flex justify-end gap-7">
                <Link to={`/updateProduct/${product?._id}`} className="btn btn-primary text-xl">Update</Link>
                <button onClick={()=>handleDelete(product?._id)} className="btn btn-error text-xl">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;