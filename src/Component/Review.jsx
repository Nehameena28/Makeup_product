const Review = ({ img, name, rating, whatsay }) => {
    return (
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl hover:shadow-2xl 
                        rounded-3xl text-center transition-all duration-500 hover:-translate-y-3 
                        max-w-sm w-full border border-gray-100 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full 
                                border-4 border-rose-gold/20 shadow-lg bg-gradient-to-br from-white to-gray-100">
                    <img 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        src={img} 
                        alt={name}
                    />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">
                    {name}
                </h3>
                <div className="text-3xl mb-4 filter drop-shadow-sm">
                    {rating}
                </div>
                <div className="w-12 h-0.5 bg-rose-gold mx-auto mb-4 opacity-30"></div>
                <p className="text-gray-700 text-base leading-relaxed font-medium">
                    "{whatsay}"
                </p>
            </div>
        </div>
    )
}

export default Review