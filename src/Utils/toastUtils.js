import { toast } from "react-toastify";

export const showToast = (message, type) => {
    const config = {
        addToCart: { color: "#F48FB1", position: "top-left" },     
        likedProduct: { color: "#F48FB1", position: "top-right" },
        createdProfile: { color: "#F48FB1", position: "top-center" }, 
        sentMessage: { color: "#F48FB1", position: "bottom-left" }, 
        removedFromCart: { color: "#D32F2F", position: "bottom-right" } 
    };

    toast(message, {
        position: config[type]?.position || "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
            background: config[type]?.color || "#212121", // Default to black theme
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
        }
    });
};
