// @ts-nocheck
import { CartContext } from "@/context/CartContext";
import { db } from "@/data/guitarData";
import { useContext, useEffect } from "react";
import GuitarCard from "./partials/GuitarCard";

function Main() {
  const { cart, addToCart } = useContext(CartContext);


  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <main className="container-xl mt-5">
      <h2 className="text-center text-primaryColor font-black text-6xl font-primary  pb-2">Nuestra Colección</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {db.map(guitar => {
          return (
            <div key={guitar.id} className="flex p-4 justify-center items-center">
              <GuitarCard
                guitar={guitar}
                addToCart={addToCart}
              />
            </div>
          );
        })}

      </div>

    </main>
  )
}
export default Main