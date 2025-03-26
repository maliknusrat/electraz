import { useContext, useEffect, useState, useCallback } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = useCallback(() => {
    console.log('call fetchCart');
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:5000/addToCart/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    }
  }, [user]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let data = {
    cartItems: products,
    cartCount: products.length,
    refetch: fetchCart,
    loading,
  };

  console.log(data);

  return {
    cartItems: products,
    cartCount: products.length,
    refetch: fetchCart,
    loading,
  };
};

export default useCart;
