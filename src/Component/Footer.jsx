const Footer = () => {
  return (
    <footer className="bg-light-pink text-dark-grey py-6 sm:py-8">
      <div className="container mx-auto text-center px-4">


        <h2 className="text-xl sm:text-2xl font-semibold text-rose-gold">Glow Cosmetics</h2>


        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-dark-grey max-w-2xl mx-auto px-4">
          Glow Cosmetic is dedicated to providing high-quality, cruelty-free makeup products that enhance your natural beauty.
        </p>


        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <a href="/home" className="hover:text-rose-gold">Home</a>
          <a href="/shop" className="hover:text-rose-gold">Product</a>
          <a href="/contact" className="hover:text-rose-gold">Contact</a>

        </div>

        <div className="mt-4 sm:mt-6 flex justify-center items-center gap-3 sm:gap-4">
          <a href="https://www.instagram.com" className="hover:text-rose-gold">
            <img className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" src="./insta.png"></img>
          </a>
          <a href="https://www.facebook.com" className="hover:text-rose-gold">
            <img className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 border-white rounded-full" src="./f.jpg"></img>
          </a>
          <a href="https://www.pinterest.com" className="hover:text-rose-gold">
            <img className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 border-white rounded-full" src="./p.jpeg"></img>
          </a>
        </div>


        <div className="mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-dark-grey px-4">
            📧 Email: support@glowcosmetic.com | 📞 Phone: +91 9876543210
          </p>
        </div>


        <div className="mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm text-dark-grey px-4">We accept: Visa, MasterCard, PayPal, UPI, COD</p>
        </div>

        <div className="mt-8 w-full">
          <img
            src="/footer.png"
            alt="Makeup Illustration"
            className="w-full h-auto object-contain"
          />
        </div>


        <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-dark-grey px-4">
          © {new Date().getFullYear()} Glow Cosmetic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
