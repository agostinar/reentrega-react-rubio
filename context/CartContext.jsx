import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const isProduct = (id) => cartList.findIndex((prod) => prod.id === id);

    const addProduct = (newProduct) => {
        const index = isProduct(newProduct.id);
        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, newProduct]);
        }
    };

    const reduceQuantity = (pid) => {
        const updatedCartList = [...cartList];
        const index = updatedCartList.findIndex((prod) => prod.id === pid);

        if (index !== -1) {
            if (updatedCartList[index].quantity > 1) {
                updatedCartList[index].quantity -= 1;
                setCartList(updatedCartList);
            } else {
                
            }
        }
    };

    const totalQuantity = () =>
        cartList.reduce((totalQuantity, objProduct) => totalQuantity + objProduct.quantity, 0);

    const totalPrice = () =>
        cartList.reduce((totalPrice, objProduct) => totalPrice + objProduct.price * objProduct.quantity, 0);

    const deleteCart = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                addProduct,
                deleteCart,
                totalQuantity,
                totalPrice,
                reduceQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};