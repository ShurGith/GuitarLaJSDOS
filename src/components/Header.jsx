// @ts-nocheck

import { useContext, useMemo } from "react";
import { CartContext } from "../context/cartContext";
function Header() {
  const { cart, setCart, addToCart, decreaseItem, removeFromCart } = useContext(CartContext);
  const totalToPay = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  //const isEmpty = !cart.length;

  return (
    <header className="bg-cover relative py-6 w-full h-auto bg-gray-700 bg-center " style={{
      backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../img/header.jpg")'
    }}
    >
      <div className="flex justify-between items-center container px-6 w-2/3 mx-auto">
        <a href="index.html">
          <img className="w-full px-3 py-2" src="./public/img/logo.svg" alt="imagen logo" />
        </a>
        <nav className="relative group">
          <img className="w-8" src="./public/img/carrito.png" alt="imagen carrito" />
          <div id="carrito" className="absolute min-w-[350px] shadow-lg group-hover:block bg-white p-2.5 fit-content top-full right-0 rounded-md">
            {isEmpty &&
              <p className="text-center">El carrito esta vacio</p>
            }
            {!isEmpty &&
              <div className="w-full bg-white ">
                <div className="border-b border-b-gray-400 grid grid-cols-5 font-bold">
                  <h4 className="font-semibold text-sm">Imagen</h4>
                  <h4 className="font-semibold text-sm">Nombre</h4>
                  <h4 className="font-semibold text-sm">Precio</h4>
                  <h4 className="font-semibold text-sm">Cantidad</h4>
                </div>
                {cart.map(item => (
                  <div key={item.id} >
                    <div className="grid grid-cols-5 gap-y-2 items-center py-2 border-b border-b-gray-300 last-of-type:mb-6">
                      <img className="h-16" src={`/public/img/${item.image}.jpg`} alt="imagen guitarra" />
                      <p>{item.name} </p>
                      <p className="font-bold">
                        ${item.price}
                      </p>
                      <div className="flex h-full  items-center justify-center  gap-4">
                        <button
                          onClick={() => decreaseItem(item.id)}
                          type="button"
                          className="bg-black text-white px-1 cursor-pointer hover:bg-black/70" >
                          -
                        </button>
                        {item.quantity}
                        <button
                          type="button"
                          onClick={() => addToCart(item)}
                          className="bg-black text-white px-1 cursor-pointer hover:bg-black/70" >
                          +
                        </button>
                      </div>
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 hover:bg-red-600 w-8 h-8  transition-colors cursor-pointer font-bold text-xs  rounded-full"
                          type="button" >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <p className="text-end">Total pagar: <span className="font-bold">{totalToPay}</span></p>
                <button className="w-full bg-black mt-3 p-2 text-white uppercase font-bold cursor-pointer hover:bg-black/80 transition-colors">Vaciar Carrito</button>
              </div>}
          </div>
        </nav>
      </div >
    </ header >

  )
}
export default Header