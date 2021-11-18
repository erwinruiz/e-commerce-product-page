import React, { ReactNode, useState } from "react";
import { Product } from "../Types/types";

const initialState = [
  {
    id: 1,
    image: "./images/image-product-1-thumbnail.jpg",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    currentprice: 125,
    oldPrice: 250,
    totalItems: 0,
  },
];

const Context = React.createContext({
  cartItems: initialState,
  totalCartItems: 0,
  addProductToCart: (product: Product, totalItems: number) => {},
  removeItem: (itemId: number) => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

function ContextProvider({ children }: ContextProviderProps) {
  const [cartItems, setCartItems] = useState(initialState);
  const [totalCartItems, setTotalCartItems] = useState(0);

  const cartItemsHandler = (product: Product, totalItems: number) => {
    setTotalCartItems(totalItems);
    setCartItems([{ ...product, totalItems }]);
  };

  const removeItemHandler = (itemId: number) => {
    setCartItems((state) => state.filter((prodcut) => prodcut.id !== itemId));
    setTotalCartItems(0);
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalCartItems,
        addProductToCart: cartItemsHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
