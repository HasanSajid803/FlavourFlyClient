import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [showCart, setShowCart] = useState(false);
  const url = "https://flavour-fly-server.vercel.app"
  const [token, setToken] = useState("")
  const [food_list, setFoodList] = useState([])

  // Add item to cart
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));

    if (token) {
      await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}})
    }
  };

  // Remove one item from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
    if (token) {
      await axios.post(url+"/api/cart/remove", {itemId}, {headers: {token}})
    }
  };

  // Remove item completely from cart
  const removeItemCompletely = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems({});
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    console.log(cartItems)
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  // Get total items count
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      totalItems += cartItems[itemId];
    }
    return totalItems;
  };

  // Get cart items as array with details
  const getCartItemsArray = () => {
    const cartArray = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) {
          cartArray.push({
            ...itemInfo,
            quantity: cartItems[itemId]
          });
        }
      }
    }
    return cartArray;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{} ,{headers: {token}})
    setCartItems(response.data.cartData)
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      await loadCartData(localStorage.getItem("token"))
    }
    }
    loadData();
  }, [])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    removeItemCompletely,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    getCartItemsArray,
    showCart,
    setShowCart,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreContextProvider');
  }
  return context;
};