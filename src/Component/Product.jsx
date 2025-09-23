const Product = ({ img, name, description, button }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-2 
                    flex flex-col items-center text-center 
                    max-w-sm w-full border border-gray-100 group">
      <div className="w-full h-64 mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          src={img} 
          alt={name}
        />
      </div>
      <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2">
        {name}
      </h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
        {description}
      </p>
      <button className="bg-rose-gold hover:bg-rose-gold/80 
                         text-white font-semibold px-8 py-3 rounded-full 
                         transition-all duration-300 hover:shadow-lg 
                         transform hover:scale-105 w-full">
        {button}
      </button>
    </div>
  )
}

export default Product;