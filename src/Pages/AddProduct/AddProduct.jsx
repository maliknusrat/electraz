import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    
    const handleProduct = event =>{
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const image = form.image.value;
        const category = form.category.value;
        const price = form.price.value;
        const Rating = form.rating.value;
        const brandName = form.brandName.value;
        const details = form.details.value;
        const email = user?.email;
        const userName = user?.displayName;
        const userPhoto = user?.photoURL
        
        const newproduct = {productName,image,price,category,Rating,brandName,details,email,userName,userPhoto}
        console.log(newproduct);

        //send data to server
        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newproduct),
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);
            if (data.insertedId) {
              form.reset();
              Swal.fire({
                title: "Success!",
                text: "product Added Successfully",
                icon: "success",
                confirmButtonText: "Cool!!!",
              });
            }
          })
        );
    }
    return (
        <div>
        <div className="max-w-5xl mx-auto py-20 ">
            <div>
                <h2 className="text-3xl text-center my-7 italic font-thin ">Add Your Product</h2>
            </div>
            <div className="flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-lg mx-auto rounded-none shadow-2xl">
                    <form onSubmit={handleProduct} className="card-body">

                        <div className="form-control">
                            <input type="text" name='productName' placeholder="Product Name" className="input input-bordered border-black rounded-none" required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='image' placeholder="Image Url" className="input input-bordered border-black rounded-none" required />
                        </div>

                        <div className="form-control">
                        <label className="">
                            <select className="select input input-bordered border-black rounded-none  w-full " name="category">
                                <option>Type</option>
                                <option value='SmartPhones'>Smart Phones</option>
                                    <option value='Laptop'>Laptop</option>
                                    <option value='Watches'>Watchs</option>
                                    <option value='HeadPhones'>Head Phones</option>
                                    <option value='Tablet'>Tablet</option>
                            </select>
                        </label>
                    </div>

                        <div className="form-control">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered border-black rounded-none" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered border-black rounded-none" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='brandName' placeholder="Brand Name" className="input input-bordered border-black rounded-none" required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered border-black rounded-none" required />
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddProduct;