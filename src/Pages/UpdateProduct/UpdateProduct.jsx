import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const { id } = useParams();
    const n = useNavigate();
    const [product, setProduct] = useState(null);
    useEffect(() => {
      fetch(`http://localhost:5000/product/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);

    const handleUpdate = (event) => {
      event.preventDefault();

      const form = event.target;
      const productName = form.productName.value;
      const category = form.category.value;
      const price = form.price.value;
      const Rating = form.rating.value;
      const brandName = form.brandName.value;
      const details = form.details.value;

      const newproduct = {
        productName,
        price,
        category,
        Rating,
        brandName,
        details
      };
      console.log(newproduct);

      //send data to server
      fetch(`http://localhost:5000/update-product/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newproduct),
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            form.reset();
            Swal.fire({
              title: "Success!",
              text: "product updated Successfully",
              icon: "success",
              confirmButtonText: "Cool!!!",
            }).then((result) => {
              if (result.isConfirmed) {
                n("/");
              }
            });
          }
        })
      );
    };

    return (
      <div>
        <div className="max-w-5xl mx-auto py-20 ">
          <div>
            <h2 className="text-3xl text-center my-7 italic font-thin ">
              Update Your Product
            </h2>
          </div>
          <div className="flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-lg mx-auto rounded-none shadow-2xl">
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    className="input input-bordered border-black rounded-none"
                    required
                    defaultValue={product?.productName}
                  />
                </div>

                <div className="form-control">
                  <label className="">
                    <select
                      className="select input input-bordered border-black rounded-none  w-full "
                      name="category"
                      defaultValue={product?.category}
                    >
                      <option value="SmartPhones">Smart Phones</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Watches">Watchs</option>
                      <option value="HeadPhones">Head Phones</option>
                      <option value="Tablet">Tablet</option>
                    </select>
                  </label>
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    defaultValue={product?.price}
                    className="input input-bordered border-black rounded-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="rating"
                    defaultValue={product?.Rating}
                    placeholder="Rating"
                    className="input input-bordered border-black rounded-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="brandName"
                    defaultValue={product?.brandName}
                    placeholder="Brand Name"
                    className="input input-bordered border-black rounded-none"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    name="details"
                    defaultValue={product?.details}
                    placeholder="Details"
                    className="input input-bordered border-black rounded-none"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-neutral rounded-none">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateProduct;