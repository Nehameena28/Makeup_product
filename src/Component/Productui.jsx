import Productcard from "./Productcard"
import { useState, useEffect } from 'react';

const Productui = ({ likedProducts, setLikedProducts }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const cosmeticsProducts = [
        { name: "Lakme Powder Foundation", query: "powder foundation bottle product" },
        { name: "Color Bar Lipstick", query: "lipstick tube product cosmetic" },
        { name: "Eye Liner Golden", query: "eyeliner pen golden product" },
        { name: "FaceCanada Foundation", query: "foundation bottle liquid product" },
        { name: "Gloss Nail Polish", query: "nail polish bottle gloss product" },
        { name: "Matte Lips", query: "lipstick matte tube product" },
        { name: "Lip Cheek Tint", query: "lip tint bottle product cosmetic" },
        { name: "Makeup Revolution", query: "eyeshadow palette product cosmetic" },
        { name: "Matte Lipstick", query: "red lipstick tube matte product" },
        { name: "Moisturizer", query: "moisturizer jar cream product" },
        { name: "Compact Powder", query: "compact powder case product" },
        { name: "Oil Primer", query: "primer bottle oil product" },
        { name: "Eye Palette", query: "eyeshadow palette colors product" },
        { name: "Eye Liner", query: "eyeliner black pen product" },
        { name: "Tinted Powder", query: "powder compact tinted product" },
        { name: "Concealer", query: "concealer tube product cosmetic" },
        { name: "Pencil Liner", query: "eyeliner pencil product cosmetic" },
        { name: "Mono Blush", query: "blush compact pink product" },
        { name: "BB Cream", query: "bb cream tube product" },
        { name: "CC Cream", query: "cc cream bottle product" },
        { name: "Highlighter Palette", query: "highlighter palette product cosmetic" },
        { name: "Bronzer Compact", query: "bronzer compact product" },
        { name: "Setting Spray", query: "setting spray bottle product" },
        { name: "Makeup Remover", query: "makeup remover bottle product" },
        { name: "Face Serum", query: "face serum bottle product" },
        { name: "Lip Balm", query: "lip balm tube product" },
        { name: "Mascara", query: "mascara tube product black" },
        { name: "Brow Gel", query: "eyebrow gel tube product" },
        { name: "Lip Gloss", query: "lip gloss tube product" },
        { name: "Face Mask", query: "face mask jar product" },
        { name: "Sunscreen", query: "sunscreen tube product" },
        { name: "Night Cream", query: "night cream jar product" },
        { name: "Eye Cream", query: "eye cream tube product" },
        { name: "Toner", query: "toner bottle product" },
        { name: "Micellar Water", query: "micellar water bottle product" },
        { name: "Lip Liner", query: "lip liner pencil product" }
    ];

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imagePromises = cosmeticsProducts.map(async (product, index) => {
                    const response = await fetch(
                        `https://api.unsplash.com/search/photos?query=${product.query}&per_page=1&client_id=h6qKDdiozlqZNhUZAZhtiAge7Bka95QZdHYG0ikhjjc`
                    );
                    const data = await response.json();
                    return {
                        id: index + 1,
                        name: product.name,
                        img: data.results[0]?.urls?.regular || `/products_view/${product.name.toLowerCase().replace(/\s+/g, '_')}.webp`,
                        price: Math.floor(Math.random() * 500) + 300
                    };
                });
                
                const productData = await Promise.all(imagePromises);
                setProducts(productData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching images:', error);
                // Fallback to original images
                const fallbackProducts = cosmeticsProducts.map((product, index) => ({
                    id: index + 1,
                    name: product.name,
                    img: `/products_view/${product.name.toLowerCase().replace(/\s+/g, '_')}.webp`,
                    price: Math.floor(Math.random() * 500) + 300
                }));
                setProducts(fallbackProducts);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-2xl font-monoton text-gray-600">Loading HD Products...</div>
            </div>
        );
    }

    return (
        <>
            <h1 className="font-monoton text-center mx-4 my-6 sm:my-8 lg:my-12 text-2xl sm:text-3xl">Product's</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-12 px-2 sm:px-4 max-w-7xl mx-auto justify-items-center">
                {products.map((product) => (
                    <Productcard
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        like=""
                        price={product.price.toString()}
                        atc=""
                        buy="Shop"
                        likedProducts={likedProducts}
                        setLikedProducts={setLikedProducts}
                    />
                ))}
            </div>
        </>
    )
}


export default Productui;



