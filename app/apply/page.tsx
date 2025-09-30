// // app/apply/page.tsx
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function ApplyPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     amount: "",
//     duration: "",
//     purpose: "",
//   });
//   const [status, setStatus] = useState("");
//   const [isLoading, setIsLoading] = useState(false); // 🔹 Added

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("");
//     setIsLoading(true); // 🔹 Added

//     try {
//       const res = await fetch("/api/apply-loan", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus("✅ Application submitted successfully! We’ll contact you soon.");
//         setFormData({
//           name: "",
//           phone: "",
//           email: "",
//           amount: "",
//           duration: "",
//           purpose: "",
//         });
//       } else {
//         throw new Error("Failed to send application");
//       }
//     } catch (error) {
//       setStatus("❌ Failed to submit. Please try again.");
//     } finally {
//       setIsLoading(false); // 🔹 Added
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 py-16 px-4">
//       <div className="max-w-3xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6"
//         >
//           Apply for a Loan
//         </motion.h1>
//         <p className="text-center text-gray-700 mb-10">
//           Fill in your details below and our team will get in touch to process your loan application.
//         </p>

//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-lg shadow-lg space-y-6"
//         >
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-semibold text-blue-900">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-semibold text-blue-900">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-semibold text-blue-900">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Loan Amount */}
//           <div>
//             <label className="block text-sm font-semibold text-blue-900">
//               Loan Amount (₦)
//             </label>
//             <input
//               type="number"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//               min={10000}
//               step={10000}
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Duration */}
//           <div>
//             <label className="block text-sm font-semibold text-blue-900">
//               Duration (Months)
//             </label>
//             <input
//               type="number"
//               name="duration"
//               value={formData.duration}
//               onChange={handleChange}
//               required
//               min={1}
//               max={24}
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Purpose */}
//           <div>
//             <label className="block text-sm font-semibold text-blue-900">
//               Purpose of Loan
//             </label>
//             <textarea
//               name="purpose"
//               value={formData.purpose}
//               onChange={handleChange}
//               rows={4}
//               required
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={isLoading} // 🔹 disable when loading
//             className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-md transition duration-200 disabled:bg-blue-700 disabled:cursor-not-allowed flex justify-center items-center"
//           >
//             {isLoading ? (
//               <span className="flex items-center gap-2">
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                   ></path>
//                 </svg>
//                 Submitting...
//               </span>
//             ) : (
//               "Submit Application"
//             )}
//           </button>

//           {status && (
//             <p className="text-center mt-4 text-sm text-blue-900">{status}</p>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// }


//----------------------------
// app/apply/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
    duration: "",
    purpose: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setIsLoading(true);

    try {
      console.log("📤 Submitting loan application with data:", formData);

      const res = await fetch("/api/apply-loan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("📥 Raw response:", res);

      if (!res.ok) {
        let errorMsg = `HTTP ${res.status} - ${res.statusText}`;
        try {
          const errorBody = await res.json();
          console.error("❌ Backend error body:", errorBody);
          errorMsg += ` | ${JSON.stringify(errorBody)}`;
        } catch (jsonError) {
          console.warn("⚠️ Could not parse error body as JSON");
        }
        throw new Error(errorMsg);
      }

      const data = await res.json().catch(() => null);
      console.log("✅ Backend success response:", data);

      setStatus("✅ Application submitted successfully! We’ll contact you soon.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        amount: "",
        duration: "",
        purpose: "",
      });
    } catch (error) {
      console.error("🚨 Submission failed:", error);
      setStatus("❌ Failed to submit. Please check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6"
        >
          Apply for a Loan
        </motion.h1>
        <p className="text-center text-gray-700 mb-10">
          Fill in your details below and our team will get in touch to process
          your loan application.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Loan Amount (₦)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              min={10000}
              step={10000}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Duration (Months)
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              min={1}
              max={24}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Purpose of Loan
            </label>
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              rows={4}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-md transition duration-200 disabled:bg-blue-700 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>

          {status && (
            <p className="text-center mt-4 text-sm text-blue-900">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
