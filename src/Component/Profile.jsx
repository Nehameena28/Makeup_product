// import { ToastContainer } from "react-toastify";
// import { showToast } from "../Utils/toastUtils";
// const Profile = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault(); // 
//     showToast("Profile created successfully!", "createdProfile");
//   };
//   return (
//     <div className="min-h-screen  flex items-center justify-center px-6 py-12 bg-[url('pbg.jpg')] bg-cover bg-center  h-screen">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">
//         <h2 className="text-4xl font-semibold text-rose-gold text-center mb-8">
//           Create Your Profile
//         </h2>

//         <form className="space-y-6">

//           <div>
//             <label className="block text-sm text-dark-grey mb-1">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
//             />
//           </div>


//           <div>
//             <label className="block text-sm text-dark-grey mb-1">Email</label>
//             <input
//               type="text"
//               placeholder="Enter your email or phone"
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-dark-grey mb-1">Password</label>
//             <input
//               type="Password"
//               placeholder="Password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
//             />
//           </div>


//           <button
//             type="submit"
//              onClick = {handleSubmit}
//             // onClick={() => showToast("Profile created successfully!", "createdProfile")}
//             className="w-full bg-rose-gold text-white py-3 rounded-xl hover:bg-pink-200  hover:text-black transition duration-300 text-lg font-semibold"
//           >
//             Create Profile
//           </button>
//         </form>


//       </div>
//     </div>
//   );
// };

// export default Profile;


import { ToastContainer } from "react-toastify";
import { showToast } from "../Utils/toastUtils";

const Profile = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    showToast("Profile created successfully!", "createdProfile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 bg-[url('pbg.jpg')] bg-cover bg-center">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-gold text-center mb-6 sm:mb-8">
          Create Your Profile
        </h2>

        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-dark-grey mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-grey mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-grey mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-gold text-white py-2 sm:py-3 rounded-xl hover:bg-pink-200 hover:text-black transition duration-300 text-base sm:text-lg font-semibold"
          >
            Create Profile
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
