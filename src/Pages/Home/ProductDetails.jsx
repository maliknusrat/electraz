import  { useEffect, useState } from 'react';
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
          <div className="flex items-center justify-between">
            <div>
              <figure>
                <img
                  src={product?.image}
                  alt="Shoes"
                  className="w-[500px]"
                />
              </figure>
            </div>
            <div className="w-[450px] pt-16">
              <h2 className="font-bold text-3xl">{product?.productName}</h2>
              <p className="pt-3 font-semibold text-2xl">Price: <span className='text-zinc-500 font-normal'>{product?.price}</span></p>
              <p className="pt-3 font-semibold text-xl">Brand Name: <span className='text-zinc-500 font-normal'>{product?.brandName}</span></p>
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