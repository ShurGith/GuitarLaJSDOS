// @ts-nocheck
import { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  useEffect(() => {
    // Guardar carrito en localStorage cada vez que cambie
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅   Añadir un producto al carrito
  const addToCart = (item) => {
    const index = cart.findIndex(itemInCart => itemInCart.id === item.id);
    if (index !== -1) {
      const actualCart = [...cart];
      actualCart[index].quantity++;
      setCart(actualCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  // ⤵️ Nueva función para restar un producto
  const decreaseItem = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0));
  };

  // ❌ Eliminar un producto del carrito
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart)
  }

  // 🆑 Vaciar el carrito
  const clearCart = () => {
    //setCart([]);
    localStorage.removeItem('cart');

  };

  return (
    <CartContext.Provider value={{
      cart, setCart, addToCart, decreaseItem, removeFromCart, clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
} 