
import React, { useContext } from 'react';
import { LikedContext } from './LikedContext';
import Productcard from './Productcard';

const Addtocard = () => {
  const { cart, removeFromCart } = useContext(LikedContext);

  return (
    <div className="p-4">
      <h1 className="font-monoton text-center m-12 text-3xl">Your Beauty Basket 🧴✨</h1>
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 animate-bounce h-48 text-[100px] w-full">🛒
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {cart.map((product) => (
            <Productcard
              key={product.id}
              {...product}
              isCartPage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Addtocard;
