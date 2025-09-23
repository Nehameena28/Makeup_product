const Category = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[120px] p-3 
                    bg-gradient-to-b from-pink-50 to-pink-100 
                    border border-pink-200 rounded-xl shadow-sm 
                    hover:shadow-md hover:scale-105 transition-all duration-300 
                    cursor-pointer group">
      <div className="w-20 h-20 mb-3 overflow-hidden rounded-full bg-white p-1 shadow-sm">
        <img 
          className="w-full h-full object-cover rounded-full 
                     group-hover:scale-110 transition-transform duration-300" 
          src={img} 
          alt={name}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 text-center leading-tight">
        {name}
      </span>
    </div>
  )
}

export default Category