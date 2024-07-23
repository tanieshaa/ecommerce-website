import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const HomeContextProvider = (props) => {
    const [CartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }
    const removeCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 0) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
            return prev;
        });
    }

    const getTotalAmt = () => {
        let totalAmt = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmt += itemInfo.new_price * CartItems[item];
                }
            }
        }
        return totalAmt;
    }

    const getTotalitems = () =>{
        let totalItem = 0;
        for(const item in CartItems)
        {
            if(CartItems[item]>0)
            {
                totalItem+=CartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalitems, getTotalAmt, all_product, CartItems, addToCart, removeCart };

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;
