import React from 'react';
import { product } from './products'; 

  return (
    <div className="pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6 relative">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-cover mb-4 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => handleClick(product.image)}
            />
            <h3 className="text-greenTextPrincipal text-center font-bold mb-2">{product.title}</h3>
            <p className="text-gray-700 text-center mb-2">${product.price}</p>
            <p className="text-gray-600 text-center">{product.description}</p>
            <button 
              className="block mx-auto bg-pinkPrincipal text-beige font-bold py-2 px-4 rounded mt-4"
              onClick={() => handleAddToCart(product.id)}>Agregar</button>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center" onClick={() => setSelectedImage(null)}>
          <img 
            src={selectedImage} 
            alt="Full Size Image" 
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
