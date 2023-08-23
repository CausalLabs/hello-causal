"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { ProductType } from "../product/data";

interface CartItem {
  item: ProductType;
  quantity: number;
}

interface Cart {
  [itemId: number]: CartItem;
}

interface CartContextValue {
  cart: Cart;
  totalItems: number;
  subTotalPrice: number;
  addToCart: (item: ProductType) => void;
  removeFromCart: (itemId: number) => void;
  getCartContents: () => (ProductType & { quantity: number })[];
  setItemQuantity: (itemId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextValue>({
  cart: {},
  totalItems: 0,
  subTotalPrice: 0,
  addToCart: () => {
    return {};
  },
  removeFromCart: () => {
    return {};
  },
  getCartContents: () => [],
  setItemQuantity: () => {
    return {};
  },
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>({});
  const [totalItems, setTotalItems] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  const addToCart = (item: ProductType) => {
    setCart((oldCart) => {
      const newCart = { ...oldCart };
      // If the item is already in the cart, increment the quantity
      if (newCart[item.id]) {
        newCart[item.id].quantity += 1;
      } else {
        // Otherwise, add the item to the cart with a quantity of 1
        newCart[item.id] = { item, quantity: 1 };
      }
      setTotalItems((oldTotalItems) => oldTotalItems + 1);
      setSubTotalPrice((oldSubTotalPrice) => oldSubTotalPrice + item.price);
      return { ...newCart };
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((oldCart) => {
      const newCart = { ...oldCart };
      const itemPrice = newCart[itemId].item.price;

      // If the item"s quantity is more than 1, decrement the quantity
      if (newCart[itemId].quantity > 1) {
        newCart[itemId].quantity -= 1;
      } else {
        // Otherwise, remove the item from the cart
        delete newCart[itemId];
      }
      if (totalItems > 0) {
        setTotalItems((oldTotalItems) => oldTotalItems - 1);
      }
      if (subTotalPrice > 0) {
        setSubTotalPrice((oldSubTotalPrice) => oldSubTotalPrice - itemPrice);
      }
      return newCart;
    });
  };

  const setItemQuantity = (itemId: number, quantity: number) => {
    setCart((oldCart) => {
      const newCart = { ...oldCart };
      // Check if the item exists in the cart
      if (newCart[itemId]) {
        // Calculate the difference to update the total items count
        const diffQuantity = quantity - newCart[itemId].quantity;
        const diffPrice = diffQuantity * newCart[itemId].item.price;

        newCart[itemId].quantity = quantity;
        setTotalItems((oldTotalItems) => oldTotalItems + diffQuantity);
        setSubTotalPrice((oldSubTotalPrice) => oldSubTotalPrice + diffPrice);
      }
      return newCart;
    });
  };

  const getCartContents = () => {
    return Object.values(cart).map((cartItem) => ({
      ...cartItem.item,
      quantity: cartItem.quantity,
    }));
  };

  // Load our cart from local storage when the component mounts
  useEffect(() => {
    const cartFromStorage = window.localStorage.getItem("cart");
    const totalItemsFromStorage = window.localStorage.getItem("totalItems");
    const subTotalPriceFromStorage =
      window.localStorage.getItem("subTotalPrice");
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
    if (totalItemsFromStorage) {
      setTotalItems(JSON.parse(totalItemsFromStorage));
    }
    if (subTotalPriceFromStorage) {
      setSubTotalPrice(JSON.parse(subTotalPriceFromStorage));
    }
  }, []);

  // Save our cart to local storage whenever it changes
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    window.localStorage.setItem("totalItems", JSON.stringify(totalItems));
    window.localStorage.setItem("subTotalPrice", JSON.stringify(subTotalPrice));
  }, [cart, totalItems]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        subTotalPrice,
        addToCart,
        removeFromCart,
        getCartContents,
        setItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
