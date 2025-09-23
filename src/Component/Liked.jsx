
import React, { useContext } from 'react';
import { LikedContext } from './LikedContext';
import Productcard from './Productcard';

const Liked = () => {
  const { likedProducts } = useContext(LikedContext);

  return (
    <div className="p-4">
      <h1 className="font-monoton text-center m-12 text-3xl">Liked Product</h1>
      {likedProducts.length === 0 ? (
        <p className="text-center animate-bounce h-48 text-[100px] w-full text-gray-500">💌</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {likedProducts.map((product) => (
            <Productcard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Liked;


