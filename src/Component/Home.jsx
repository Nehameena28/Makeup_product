import Category from "./Category"
import Product from "./Product"
import Review from "./Review"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Categories Section */}
      <section className="py-4 sm:py-6 lg:py-8 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="relative overflow-hidden">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg
                          overflow-x-auto scrollbar-hide animate-scroll
                          md:justify-center md:flex-wrap md:overflow-visible">
              <Category img="./catagory/BBcream.jpeg" name="BB Cream" />
              <Category img="./catagory/blush.jpeg" name="Blush" />
              <Category img="./catagory/eyeshadow.jpeg" name="Eyeshadow" />
              <Category img="./catagory/maybeline.jpeg" name="Maybelline" />
              <Category img="./catagory/lip_plumber.jpeg" name="Lip Plumper" />
              <Category img="./catagory/fluid_f.jpeg" name="Foundation" />
              <Category img="./catagory/valvet.jpeg" name="Velvet Shadow" />
              <Category img="./catagory/lip_oil.jpeg" name="Lip Oil" />
              <Category img="./catagory/BBcream.jpeg" name="BB Cream" />
              <Category img="./catagory/blush.jpeg" name="Blush" />
              <Category img="./catagory/eyeshadow.jpeg" name="Eyeshadow" />
              <Category img="./catagory/maybeline.jpeg" name="Maybelline" />
              <Category img="./catagory/lip_plumber.jpeg" name="Lip Plumper" />
              <Category img="./catagory/fluid_f.jpeg" name="Foundation" />
              <Category img="./catagory/valvet.jpeg" name="Velvet Shadow" />
              <Category img="./catagory/lip_oil.jpeg" name="Lip Oil" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800 font-monoton">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            <Product
              img="/product/product_1.jpg"
              name="Irresistible Givenchy"
              description="Perfume, lipstick, and cream for elegance."
              button="Buy Now"
            />
            <Product
              img="/product/product_2.jpg"
              name="Becca Lipstick"
              description="Smooth, creamy, and richly pigmented."
              button="Buy Now"
            />
            <Product
              img="/product/product_3.jpg"
              name="Baby Brown Kit"
              description="Foundation, Highlighter, Lipstick."
              button="Buy Now"
            />
            <Product
              img="/product/product_5.jpg"
              name="Foundation Kit"
              description="Flawless coverage for a radiant, smooth finish."
              button="Buy Now"
            />
            <Product
              img="/product/product_4.jpg"
              name="Baby Brown Lipstick"
              description="Hydrating, smooth, nourishing, and rich color."
              button="Buy Now"
            />
            <Product
              img="/product/perfume.jpg"
              name="Eau de Parfum"
              description="Timeless, elegant, and iconic fragrance."
              button="Buy Now"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800 font-monoton">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            <Review
              img="./Review/customer_1.avif"
              name="Emily Johnson"
              rating="⭐⭐⭐⭐⭐"
              whatsay="Love the lipsticks! The quality is amazing and lasts all day!"
            />
            <Review
              img="./Review/customer_2.avif"
              name="Olivia Brown"
              rating="⭐⭐⭐⭐⭐"
              whatsay="Amazing blush colors! Perfect for my skin tone."
            />
            <Review
              img="./Review/customer_3.png"
              name="Sophia Lee"
              rating="⭐⭐⭐⭐⭐"
              whatsay="Glow Cosmetics never disappoints! The foundation is flawless."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;