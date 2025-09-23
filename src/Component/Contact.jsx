import { useState } from "react";
import { toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! 📩");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
      <div className="bg-white  rounded-3xl w-full max-w-6xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center text-rose-gold">Contact Us</h2>
        <p className="text-gray-600 text-center mt-4">
          We'd love to hear from you! Send us your message 💌
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

          <div className="space-y-8">
            <img src="contact.jpg" className="rounded"></img>
          </div>




          <form onSubmit={handleSubmit} className="space-y-12 p-8 mt-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 outline-none"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 outline-none resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-rose-gold hover:bg-pink-200  hover:text-black text-white py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
