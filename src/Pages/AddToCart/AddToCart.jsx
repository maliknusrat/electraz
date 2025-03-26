import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from '../../hooks/useCart';

const AddToCart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const { refetch } = useCart();

  const fetchCart = () => {
    fetch(`http://localhost:5000/addToCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    if (user?.email) {
      fetchCart();
    }
  }, [user]);

  const handleQuantityChange = async(id, inc) => {
    const email = user?.email;

    if (!email) return;

    await fetch("http://localhost:5000/update-quantity", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email, inc }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          fetchCart();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update Cart Quantity",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.error("Quantity update failed:", err));
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Item has been removed.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });

              // Update local state
              const filtered = products.filter((item) => item._id !== id);
              setProducts(filtered);
            } else {
              Swal.fire(
                "Error!",
                data.message || "Failed to remove item",
                "error"
              );
            }
          })
          .catch((err) => {
            Swal.fire("Oops!", "Something went wrong!", "error");
            console.error("Remove error:", err);
          });
      }
    });
  };


  const handleCheckout = () => {
    if (!user?.email || products.length === 0) return;

    const orderData = {
      email: user.email,
      items: products,
      total: products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          fetchCart();
          refetch();
          Swal.fire("Order placed!", "Thank you for your purchase.", "success");
        }
      })
      .catch((err) => {
        console.error("Checkout error:", err);
        Swal.fire("Error", "Something went wrong. Please try again.", "error");
      });
  };

  const calculateTotal = (price, qty) => (price * qty).toFixed(2);

  const grandTotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center my-10 uppercase">
        My Cart
      </h2>

      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="table w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-bold">{item.productName}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </td>
                <td className="p-4 text-lg text-gray-800 font-semibold">
                  ${item.price}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => handleQuantityChange(item._id, -1)}
                    >
                      –
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => handleQuantityChange(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 font-semibold text-green-600">
                  ${calculateTotal(item.price, item.quantity)}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end p-6 border-t bg-gray-50 text-xl font-bold">
          Grand Total:{" "}
          <span className="ml-3 text-green-600">${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <Link
          to="/product"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
        <button
          onClick={handleCheckout}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
