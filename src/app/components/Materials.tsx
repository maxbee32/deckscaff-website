// "use client";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// interface MaterialItem {
//   id: number;
//   name: string;
//   type: "rental" | "sale";
//   category: string;
//   image: string;
//   description: string;
//   features: string[];
//   status: "available" | "limited" | "coming-soon";
// }

// const materials: MaterialItem[] = [
//   {
//     id: 1,
//     name: "Kwikstage Scaffolding System",
//     type: "rental",
//     category: "Scaffolding",
//     image: "/images/kwikstage.png",
//     description:
//       "Complete Kwikstage scaffolding systems for safe and efficient access at height",
//     features: [
//       "Quick Assembly",
//       "Galvanized Finish",
//       "Load Tested",
//       "Safety Certified",
//     ],
//     status: "available",
//   },
//   {
//     id: 2,
//     name: "Cuplock Scaffolding",
//     type: "rental",
//     category: "Scaffolding",
//     image: "/images/services/acess-scaffolding.jpeg",
//     description:
//       "Versatile cuplock system ideal for complex structures and high-rise buildings",
//     features: [
//       "High Load Capacity",
//       "Versatile Configurations",
//       "Durable Steel",
//       "Easy Installation",
//     ],
//     status: "available",
//   },
//   {
//     id: 3,
//     name: "Yellow Boards",
//     type: "sale",
//     category: "Accessories",
//     image: "/images/yellow-board.png",
//     description:
//       "Premium quality scaffolding boards for safe working platforms",
//     features: [
//       "Pressure Treated",
//       "Graded Timber",
//       "Standard Sizes",
//       "Long Lasting",
//     ],
//     status: "available",
//   },
//   {
//     id: 4,
//     name: "Mobile Tower Scaffolds",
//     type: "rental",
//     category: "Scaffolding",
//     image: "/images/moving-scaffolds.jpeg",
//     description:
//       "Portable tower scaffolds for interior work and maintenance projects",
//     features: [
//       "Wheel Mounted",
//       "Quick Setup",
//       "Compact Storage",
//       "Height Adjustable",
//     ],
//     status: "limited",
//   },
//   {
//     id: 5,
//     name: "Scaffolding Couplers",
//     type: "sale",
//     category: "Fittings",
//     image: "/images/scaffolding couplers.jpg",
//     description: "High-strength steel couplers for secure tube connections",
//     features: [
//       "Drop Forged Steel",
//       "Zinc Plated",
//       "BS/EN Certified",
//       "Various Sizes",
//     ],
//     status: "available",
//   },
//   {
//     id: 6,
//     name: "Hollow Beams",
//     type: "rental",
//     category: "Structural",
//     image: "/images/hollow-beams.jpeg",
//     description:
//       "High-strength hollow beams for superior load-bearing capacity and structural support",
//     features: [
//       "High Load Capacity",
//       "Lightweight Design",
//       "Corrosion Resistant",
//       "Easy Installation",
//     ],
//     status: "available",
//   },
//   {
//     id: 7,
//     name: "Props Scaffolding",
//     type: "sale",
//     category: "Structural",
//     image: "/images/props.jpeg",
//     description:
//       "Adjustable steel props for temporary support and shoring systems",
//     features: [
//       "Height Adjustable",
//       "High Strength Steel",
//       "Easy to Install",
//       "Multiple Sizes",
//     ],
//     status: "available",
//   },
//   {
//     id: 8,
//     name: "Formwork Systems",
//     type: "rental",
//     category: "Formwork",
//     image: "/images/formwork-sales.jpeg",
//     description: "Advanced formwork systems for concrete construction projects",
//     features: [
//       "Reusable",
//       "Quick Strike",
//       "High Load Capacity",
//       "Precise Finish",
//     ],
//     status: "available",
//   },
//   {
//     id: 9,
//     name: "Wall Formwork",
//     type: "rental",
//     category: "Formwork",
//     image: "/images/wall formwork.jpeg",
//     description: "Specialized formwork systems for vertical concrete walls and structures",
//     features: [
//       "Modular Design",
//       "Quick Assembly",
//       "High Pressure Resistance",
//       "Smooth Surface Finish",
//     ],
//     status: "available",
//   },
//   {
//     id: 10,
//     name: "Panels for Wall Formwork",
//     type: "rental",
//     category: "Formwork",
//     image: "/images/panel.jpeg",
//     description: "High-quality formwork panels for efficient wall construction and concrete forming",
//     features: [
//       "Multiple Sizes Available",
//       "Easy to Handle",
//       "Durable Construction",
//       "Quick Assembly & Disassembly",
//     ],
//     status: "available",
//   },
//   {
//     id: 11,
//     name: "I-Beam",
//     type: "sale",
//     category: "Structural",
//     image: "/images/H-Beam.jpg",
//     description:
//       "Heavy-duty I-beams for major structural support and construction projects",
//     features: [
//       "High Load Bearing",
//       "Versatile Applications",
//       "Durable Steel",
//       "Various Sizes Available",
//     ],
//     status: "available",
//   },
//   {
//     id: 12,
//     name: "Timber Formwork",
//     type: "sale",
//     category: "Formwork",
//     image: "/images/timber-formwork.jpeg",
//     description:
//       "High-quality timber formwork for concrete molding and shaping",
//     features: [
//       "Premium Timber",
//       "Smooth Finish",
//       "Reusable",
//       "Easy to Cut & Shape",
//     ],
//     status: "available",
//   },
// ];

// export default function Materials() {
//   const [activeFilter, setActiveFilter] = useState<"all" | "rental" | "sale">(
//     "all"
//   );
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");
//   const [showCallOptions, setShowCallOptions] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(
//     null
//   );
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     projectDetails: "",
//     quantity: "1",
//   });

//   const categories = [
//     "all",
//     ...Array.from(new Set(materials.map((item) => item.category))),
//   ];

//   const filteredMaterials = materials.filter((item) => {
//     const typeMatch = activeFilter === "all" || item.type === activeFilter;
//     const categoryMatch =
//       selectedCategory === "all" || item.category === selectedCategory;
//     return typeMatch && categoryMatch;
//   });

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "available":
//         return "bg-green-500";
//       case "limited":
//         return "bg-yellow-500";
//       case "coming-soon":
//         return "bg-blue-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getStatusText = (status: string) => {
//     switch (status) {
//       case "available":
//         return "In Stock";
//       case "limited":
//         return "Limited Stock";
//       case "coming-soon":
//         return "Coming Soon";
//       default:
//         return status;
//     }
//   };

//   const handleCallClick = () => {
//     setShowCallOptions(true);
//   };

//   const handleQuoteRequest = (material: MaterialItem) => {
//     setSelectedMaterial(material);
//     setShowContactModal(true);
//     setError("");
//     setIsSubmitted(false);
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (error) setError("");
//   };

//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError("");

//     // EmailJS credentials from environment variables
//     const serviceID =
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ym97vfw";
//     const templateID =
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_47fiyww";
//     const publicKey =
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "WD_oOMLqiTWDD4V08";

//     try {
//       // Check if all credentials are properly set
//       if (!serviceID || !templateID || !publicKey) {
//         throw new Error(
//           "Email service not configured. Please contact us directly at deckscaffgh@outlook.com"
//         );
//       }

//       // Prepare template parameters
//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         phone: formData.phone,
//         company: formData.company || "Not provided",
//         project_type:
//           selectedMaterial?.type === "rental"
//             ? "Rental Request"
//             : "Purchase Quote",
//         material_name: selectedMaterial?.name || "Not specified",
//         material_category: selectedMaterial?.category || "Not specified",
//         quantity: formData.quantity,
//         message: formData.projectDetails,
//         to_email: "deckscaffgh@outlook.com",
//         subject: `${
//           selectedMaterial?.type === "rental"
//             ? "Rental Request"
//             : "Quote Request"
//         } - ${selectedMaterial?.name}`,
//         reply_to: formData.email,
//       };

//       // Send email using EmailJS
//       const result = await emailjs.send(
//         serviceID,
//         templateID,
//         templateParams,
//         publicKey
//       );

//       if (result.status === 200) {
//         // Reset form on success
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           company: "",
//           projectDetails: "",
//           quantity: "1",
//         });
//         setIsSubmitted(true);

//         // Hide success message after 8 seconds
//         setTimeout(() => {
//           setIsSubmitted(false);
//           setShowContactModal(false);
//           setSelectedMaterial(null);
//         }, 8000);
//       } else {
//         throw new Error("Failed to send email");
//       }
//     } catch (err) {
//       console.error("Email sending error:", err);
//       setError(
//         "There was an error sending your request. Please try again or contact us directly at deckscaffgh@outlook.com"
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Close dropdown when clicking outside
//   const handleBackdropClick = (e: React.MouseEvent) => {
//     if (e.target === e.target) {
//       setShowCallOptions(false);
//       setShowContactModal(false);
//     }
//   };

//   return (
//     <section id="materials" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Scaffolding Materials
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             High-quality scaffolding equipment available for rent or purchase.
//             Browse our extensive inventory of certified materials.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
//           <div className="flex flex-wrap gap-4">
//             <button
//               onClick={() => setActiveFilter("all")}
//               className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                 activeFilter === "all"
//                   ? "bg-orange-500 text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-gray-100 shadow"
//               }`}
//             >
//               All Materials
//             </button>
//             <button
//               onClick={() => setActiveFilter("rental")}
//               className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                 activeFilter === "rental"
//                   ? "bg-orange-500 text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-gray-100 shadow"
//               }`}
//             >
//               For Rent
//             </button>
//             <button
//               onClick={() => setActiveFilter("sale")}
//               className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                 activeFilter === "sale"
//                   ? "bg-orange-500 text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-gray-100 shadow"
//               }`}
//             >
//               For Sale
//             </button>
//           </div>

//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white shadow"
//           >
//             {categories.map((category) => (
//               <option key={category} value={category}>
//                 {category === "all" ? "All Categories" : category}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Materials Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {filteredMaterials.map((material) => (
//             <div
//               key={material.id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-2"
//             >
//               {/* Header with Image */}
//               <div className="relative">
//                 <div className="h-48 bg-gray-100 overflow-hidden">
//                   <img
//                     src={material.image}
//                     alt={material.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Status Badge */}
//                 <div
//                   className={`absolute top-4 right-4 ${getStatusColor(
//                     material.status
//                   )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
//                 >
//                   {getStatusText(material.status)}
//                 </div>

//                 {/* Type Badge */}
//                 <div
//                   className={`absolute top-4 left-4 ${
//                     material.type === "rental" ? "bg-blue-500" : "bg-green-500"
//                   } text-white px-3 py-1 rounded-full text-xs font-semibold`}
//                 >
//                   {material.type === "rental" ? "FOR RENT" : "FOR SALE"}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm text-gray-500 font-medium">
//                     {material.category}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
//                   {material.name}
//                 </h3>

//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                   {material.description}
//                 </p>

//                 {/* Features */}
//                 <ul className="space-y-2 mb-6">
//                   {material.features.slice(0, 3).map((feature, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center text-sm text-gray-700"
//                     >
//                       <svg
//                         className="size-4 text-orange-500 mr-2 flex-shrink-0"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3">
//                   <button
//                     onClick={() => handleQuoteRequest(material)}
//                     className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 text-sm"
//                   >
//                     {material.type === "rental"
//                       ? "Request Rental"
//                       : "Get Quote"}
//                   </button>
//                   <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm">
//                     Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="bg-white rounded-2xl p-8 shadow-lg relative">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Can&apos;t Find What You Need?
//             </h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               We source and supply custom scaffolding solutions. Contact us for
//               specialized equipment or bulk orders.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#contact"
//                 className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
//               >
//                 Request Custom Quote
//               </a>

//               {/* Teams Call Button with Options */}
//               <div className="relative">
//                 <button
//                   onClick={handleCallClick}
//                   className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 16.057V7.943c0-.742.484-1.348 1.2-1.348.715 0 1.2.606 1.2 1.348v8.114c0 .742-.485 1.348-1.2 1.348-.716 0-1.2-.606-1.2-1.348z" />
//                   </svg>
//                   Call via Teams
//                 </button>

//                 {/* Call Options Dropdown */}
//                 {showCallOptions && (
//                   <div
//                     className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//                     onClick={handleBackdropClick}
//                   >
//                     <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full mx-4 p-6">
//                       <h4 className="font-bold text-gray-900 mb-4 text-lg text-center">
//                         Choose Call Method
//                       </h4>
//                       <div className="space-y-3 mb-4">
//                         <a
//                           href="https://teams.live.com/meet/9349626922813?p=wvBRx3ZSN9A4iz925h"
//                           className="flex items-center gap-3 w-full text-left px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           onClick={() => setShowCallOptions(false)}
//                         >
//                           <svg
//                             className="w-5 h-5"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13.5v-7a.5.5 0 01.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5a.5.5 0 01-.8-.4z" />
//                           </svg>
//                           Join Teams Meeting (Web)
//                         </a>

//                         <a
//                           href="https://teams.microsoft.com/l/chat/0/0?users=deckscaffgh@outlook.com"
//                           className="flex items-center gap-3 w-full text-left px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           onClick={() => setShowCallOptions(false)}
//                         >
//                           <svg
//                             className="w-5 h-5"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
//                           </svg>
//                           Start Teams Chat
//                         </a>
//                       </div>
//                       <button
//                         onClick={() => setShowCallOptions(false)}
//                         className="w-full px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 font-semibold border border-gray-300"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form Modal */}
//       {showContactModal && selectedMaterial && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={handleBackdropClick}
//         >
//           <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   {selectedMaterial.type === "rental"
//                     ? "Request Rental"
//                     : "Get Quote"}
//                 </h3>
//                 <button
//                   onClick={() => setShowContactModal(false)}
//                   className="text-gray-400 hover:text-gray-600 transition-colors"
//                   disabled={isSubmitting}
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Success Message */}
//               {isSubmitted && (
//                 <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-2xl">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0">
//                       <svg
//                         className="size-6 text-green-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <h3 className="text-sm font-bold text-green-800">
//                         Request Sent Successfully!
//                       </h3>
//                       <p className="text-green-700 mt-1 text-sm">
//                         Thank you for your request. We&apos;ll contact you
//                         within 2 hours.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Error Message */}
//               {error && (
//                 <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-2xl">
//                   <div className="flex items-start">
//                     <svg
//                       className="size-6 text-red-500 mr-3 flex-shrink-0"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       ></path>
//                     </svg>
//                     <div>
//                       <h3 className="text-sm font-bold text-red-800">
//                         Unable to Send Request
//                       </h3>
//                       <p className="text-red-700 mt-1 text-sm">{error}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={selectedMaterial.image}
//                     alt={selectedMaterial.name}
//                     className="w-12 h-12 object-cover rounded"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">
//                       {selectedMaterial.name}
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {selectedMaterial.category}
//                     </p>
//                     <p className="text-xs text-gray-500 capitalize">
//                       {selectedMaterial.type}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     disabled={isSubmitting || isSubmitted}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     disabled={isSubmitting || isSubmitted}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     disabled={isSubmitting || isSubmitted}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     disabled={isSubmitting || isSubmitted}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
//                     placeholder="Your company name"
//                   />
//                 </div>

//                 {selectedMaterial.type === "sale" && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Quantity
//                     </label>
//                     <select
//                       name="quantity"
//                       value={formData.quantity}
//                       onChange={handleInputChange}
//                       disabled={isSubmitting || isSubmitted}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
//                     >
//                       {[1, 2, 3, 4, 5, 10, 15, 20, 25, 50].map((num) => (
//                         <option key={num} value={num}>
//                           {num}
//                         </option>
//                       ))}
//                       <option value="custom">Custom Quantity</option>
//                     </select>
//                   </div>
//                 )}

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project Details *
//                   </label>
//                   <textarea
//                     name="projectDetails"
//                     value={formData.projectDetails}
//                     onChange={handleInputChange}
//                     required
//                     rows={3}
//                     disabled={isSubmitting || isSubmitted}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
//                     placeholder="Tell us about your project requirements, timeline, and any specific needs..."
//                   />
//                 </div>

//                 <div className="flex gap-3 pt-2">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting || isSubmitted}
//                     className={`flex-1 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center ${
//                       isSubmitting || isSubmitted
//                         ? "bg-gray-400 cursor-not-allowed text-white"
//                         : "bg-orange-500 hover:bg-orange-600 text-white"
//                     }`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-3 size-5 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Sending...
//                       </>
//                     ) : isSubmitted ? (
//                       "Request Sent!"
//                     ) : (
//                       "Submit Request"
//                     )}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setShowContactModal(false)}
//                     disabled={isSubmitting}
//                     className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitted ? "Close" : "Cancel"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface MaterialItem {
  id: number;
  name: string;
  description: string;
  specifications: string[];
  category: string;
  quantity: number;
  price: string;
  unit: string;
  icon: string;
  color: string;
  status: string;
  supplier: string;
  location: string;
  materialType: string; // "FOR_SALE" | "FOR_RENT"
  image: string;
}

// Interface for the API response
interface ApiMaterial {
  id: number;
  name: string;
  description: string;
  specifications: string[];
  category: string;
  quantity: number;
  availableQuantity: number;
  price: string;
  unit: string;
  icon: string;
  color: string;
  status: string;
  supplier: string;
  location: string;
  materialType: string;
  image: string;
}

// Helper functions outside component
const getMaterialImageUrl = (imagePath: string, apiBaseUrl: string): string => {
  if (!imagePath) {
    return getDefaultImageUrl();
  }
  
  // If it's already a full URL, return it as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Remove any leading slashes or prefixes
  const cleanPath = imagePath.replace(/^\/+|^uploads\/+|^images\/+/gi, '');
  
  // Construct the full URL
  return `${apiBaseUrl}/uploads/images/project/${cleanPath}`;
};

const getDefaultImageUrl = (): string => {
  // Placeholder service
  return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80";
};

export default function Materials() {
  const [materials, setMaterials] = useState<MaterialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  
  const [activeFilter, setActiveFilter] = useState<"all" | "FOR_RENT" | "FOR_SALE">(
    "all"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    quantity: "1",
  });

  // API base URL from environment variable
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://deckstaff-website-be.onrender.com";

  // Fetch materials from API
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/auth/all-materials`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch materials: ${response.status}`);
        }
        
        const data: ApiMaterial[] = await response.json();
        
        // Map and construct proper image URLs
        const mappedMaterials: MaterialItem[] = data.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          specifications: item.specifications || [],
          category: item.category,
          quantity: item.quantity || item.availableQuantity || 0,
          price: item.price || "Contact for quote",
          unit: item.unit || "unit",
          icon: item.icon,
          color: item.color,
          status: item.status || "IN_STOCK",
          supplier: item.supplier,
          location: item.location,
          materialType: item.materialType || "FOR_SALE",
          // Construct proper image URL
          image: item.image 
            ? getMaterialImageUrl(item.image, API_BASE_URL)
            : getDefaultImageUrl()
        }));
        
        setMaterials(mappedMaterials);
        setFetchError(null);
      } catch (err) {
        console.error("Error fetching materials:", err);
        setFetchError("Failed to load materials. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [API_BASE_URL]);

  // Extract unique categories from materials
  const categories = [
    "all",
    ...Array.from(new Set(materials.map((item) => item.category))),
  ].filter(Boolean); // Remove empty/null categories

  const filteredMaterials = materials.filter((item) => {
    const typeMatch = activeFilter === "all" || item.materialType === activeFilter;
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  // Map backend status to frontend status
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "IN_STOCK":
        return { color: "bg-green-500", text: "In Stock" };
      case "LOW_STOCK":
        return { color: "bg-yellow-500", text: "Limited Stock" };
      case "OUT_OF_STOCK":
        return { color: "bg-red-500", text: "Out of Stock" };
      case "RENTED_OUT":
        return { color: "bg-blue-500", text: "Rented Out" };
      case "DISCONTINUED":
        return { color: "bg-gray-500", text: "Discontinued" };
      default:
        return { color: "bg-gray-500", text: status };
    }
  };

  const getStatusColor = (status: string) => {
    return getStatusInfo(status).color;
  };

  const getStatusText = (status: string) => {
    return getStatusInfo(status).text;
  };

  const handleCallClick = () => {
    setShowCallOptions(true);
  };

  const handleQuoteRequest = (material: MaterialItem) => {
    // Don't allow requests for out of stock or discontinued items
    if (material.status === "OUT_OF_STOCK" || material.status === "DISCONTINUED") {
      return;
    }
    
    setSelectedMaterial(material);
    setShowContactModal(true);
    setFormError("");
    setIsSubmitted(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formError) setFormError("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    const serviceID =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ym97vfw";
    const templateID =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_47fiyww";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "WD_oOMLqiTWDD4V08";

    try {
      if (!serviceID || !templateID || !publicKey) {
        throw new Error(
          "Email service not configured. Please contact us directly at deckscaffgh@outlook.com"
        );
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || "Not provided",
        project_type:
          selectedMaterial?.materialType === "FOR_RENT"
            ? "Rental Request"
            : "Purchase Quote",
        material_name: selectedMaterial?.name || "Not specified",
        material_category: selectedMaterial?.category || "Not specified",
        quantity: formData.quantity,
        message: formData.projectDetails,
        to_email: "deckscaffgh@outlook.com",
        subject: `${
          selectedMaterial?.materialType === "FOR_RENT"
            ? "Rental Request"
            : "Quote Request"
        } - ${selectedMaterial?.name}`,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectDetails: "",
          quantity: "1",
        });
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setShowContactModal(false);
          setSelectedMaterial(null);
        }, 8000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("Email sending error:", err);
      setFormError(
        "There was an error sending your request. Please try again or contact us directly at deckscaffgh@outlook.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.target) {
      setShowCallOptions(false);
      setShowContactModal(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <section id="materials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scaffolding Materials
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
            <p className="text-gray-600 mt-4">Loading materials...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (fetchError) {
    return (
      <section id="materials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scaffolding Materials
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-lg mx-auto">
              <p className="text-red-600 font-semibold">{fetchError}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (materials.length === 0) {
    return (
      <section id="materials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scaffolding Materials
            </h2>
            <p className="text-gray-600">No materials available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="materials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Scaffolding Materials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality scaffolding equipment available for rent or purchase.
            Browse our extensive inventory of certified materials.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              All Materials
            </button>
            <button
              onClick={() => setActiveFilter("FOR_RENT")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === "FOR_RENT"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              For Rent
            </button>
            <button
              onClick={() => setActiveFilter("FOR_SALE")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === "FOR_SALE"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              For Sale
            </button>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white shadow"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-2"
            >
              {/* Header with Image */}
              <div className="relative">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = getDefaultImageUrl();
                    }}
                  />
                </div>

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 ${getStatusColor(
                    material.status
                  )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {getStatusText(material.status)}
                </div>

                {/* Type Badge */}
                <div
                  className={`absolute top-4 left-4 ${
                    material.materialType === "FOR_RENT" ? "bg-blue-500" : "bg-green-500"
                  } text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {material.materialType === "FOR_RENT" ? "FOR RENT" : "FOR SALE"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 font-medium">
                    {material.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {material.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {material.description}
                </p>

                {/* Features/Specifications */}
                <ul className="space-y-2 mb-6">
                  {material.specifications?.slice(0, 3).map((spec, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <svg
                        className="size-4 text-orange-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Price and Quantity Info */}
                <div className="mb-4 flex items-center justify-between text-sm">
                  {material.price && (
                    <div className="text-green-600 font-semibold">
                      {material.price} {material.unit && `per ${material.unit}`}
                    </div>
                  )}
                  <div className={`text-sm font-medium ${
                    material.quantity > 10 ? "text-green-600" : 
                    material.quantity > 0 ? "text-yellow-600" : 
                    "text-red-600"
                  }`}>
                    {material.quantity > 0 ? `${material.quantity} available` : "Out of stock"}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleQuoteRequest(material)}
                    disabled={material.status === "OUT_OF_STOCK" || material.status === "DISCONTINUED"}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-sm ${
                      material.status === "OUT_OF_STOCK" || material.status === "DISCONTINUED"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    {material.materialType === "FOR_RENT"
                      ? "Request Rental"
                      : "Get Quote"}
                  </button>
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t Find What You Need?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We source and supply custom scaffolding solutions. Contact us for
              specialized equipment or bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                Request Custom Quote
              </a>

              {/* Teams Call Button with Options */}
              <div className="relative">
                <button
                  onClick={handleCallClick}
                  className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 16.057V7.943c0-.742.484-1.348 1.2-1.348.715 0 1.2.606 1.2 1.348v8.114c0 .742-.485 1.348-1.2 1.348-.716 0-1.2-.606-1.2-1.348z" />
                  </svg>
                  Call via Teams
                </button>

                {/* Call Options Dropdown */}
                {showCallOptions && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleBackdropClick}
                  >
                    <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full mx-4 p-6">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg text-center">
                        Choose Call Method
                      </h4>
                      <div className="space-y-3 mb-4">
                        <a
                          href="https://teams.live.com/meet/9349626922813?p=wvBRx3ZSN9A4iz925h"
                          className="flex items-center gap-3 w-full text-left px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setShowCallOptions(false)}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13.5v-7a.5.5 0 01.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5a.5.5 0 01-.8-.4z" />
                          </svg>
                          Join Teams Meeting (Web)
                        </a>

                        <a
                          href="https://teams.microsoft.com/l/chat/0/0?users=deckscaffgh@outlook.com"
                          className="flex items-center gap-3 w-full text-left px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setShowCallOptions(false)}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                          </svg>
                          Start Teams Chat
                        </a>
                      </div>
                      <button
                        onClick={() => setShowCallOptions(false)}
                        className="w-full px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 font-semibold border border-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactModal && selectedMaterial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedMaterial.materialType === "FOR_RENT"
                    ? "Request Rental"
                    : "Get Quote"}
                </h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isSubmitting}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-2xl">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="size-6 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-bold text-green-800">
                        Request Sent Successfully!
                      </h3>
                      <p className="text-green-700 mt-1 text-sm">
                        Thank you for your request. We&apos;ll contact you
                        within 2 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formError && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-2xl">
                  <div className="flex items-start">
                    <svg
                      className="size-6 text-red-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="text-sm font-bold text-red-800">
                        Unable to Send Request
                      </h3>
                      <p className="text-red-700 mt-1 text-sm">{formError}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedMaterial.image}
                    alt={selectedMaterial.name}
                    className="w-12 h-12 object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.src = getDefaultImageUrl();
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {selectedMaterial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {selectedMaterial.category}
                    </p>
                    <p className="text-xs text-gray-500">
                      {selectedMaterial.materialType === "FOR_RENT" ? "FOR RENT" : "FOR SALE"}
                    </p>
                    <p className="text-xs font-semibold text-green-600 mt-1">
                      {selectedMaterial.price} {selectedMaterial.unit && `per ${selectedMaterial.unit}`}
                    </p>
                    <p className="text-xs mt-1">
                      Status: <span className={`font-semibold ${getStatusColor(selectedMaterial.status).replace('bg-', 'text-')}`}>
                        {getStatusText(selectedMaterial.status)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your company name"
                  />
                </div>

                {selectedMaterial.materialType === "FOR_SALE" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      disabled={isSubmitting || isSubmitted}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      {[1, 2, 3, 4, 5, 10, 15, 20, 25, 50].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                      <option value="custom">Custom Quantity</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center ${
                      isSubmitting || isSubmitted
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 size-5 text-white"
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
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      "Request Sent!"
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    disabled={isSubmitting}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitted ? "Close" : "Cancel"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}