/* eslint-disable no-unused-vars */
// @ts-nocheck

import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

function GuitarCard({ guitar }) {
  const { addToCart } = useContext(CartContext)
  const { id, name, description, image, price } = guitar

  return (
    <>
      <img className="w-1/3 h-auto px-3 hover:scale-[1.5] transition-all duration-500 ease-in-out " src={`./public/img/${image}.jpg`} alt="imagen guitarra" />

      <div className="flex flex-col gap-y-2 font-primary">
        <h3 className="text-black text-2xl font-black uppercase mb-2">{name}</h3>
        <p className='font-forum mb-4'>{description}</p>
        <p className="text-4xl text-orange-400 font-black mb-4">${price}</p>

        <button
          type="button"
          onClick={() => addToCart(guitar)}
          className="w-full px-4 py-2  bg-black text-white cursor-pointer text-lg uppercase  font-bold hover:bg-black/70 transition-all duration-100 ease-in-out "
        >Agregar al Carrito</button>
      </div >
    </>
  )
}
export default GuitarCard