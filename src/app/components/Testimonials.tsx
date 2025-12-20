// interface Testimonial {
//   name: string;
//   company: string;
//   project: string;
//   content: string;
//   rating: number;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Rhythmz Africa",
//     company: "Event Management Company",
//     project: "Major Event Productions",
//     content:
//       "Deckscaff Ghana Ltd provided exceptional scaffolding services for our large-scale events. Their team was incredibly professional, punctual, and delivered exactly what we needed on time. The quality of their equipment and their attention to safety standards gave us complete confidence throughout our event productions.",
//     rating: 5,
//   },
//   {
//     name: "First Sky Construction",
//     company: "Infrastructure Development",
//     project: "Aburi - Ketease Road to Kwabenya",
//     content:
//       "Working with Deckscaff on the Aburi-Ketease Road project has been outstanding. Their scaffolding solutions have been crucial for our bridge and road construction work. Their team's expertise in providing safe, reliable access solutions has significantly contributed to keeping our project on schedule and maintaining the highest safety standards.",
//     rating: 5,
//   },
//   {
//     name: "Ronbrak Construction",
//     company: "Real Estate Development",
//     project: "Residential Apartments - Cantonments",
//     content:
//       "Deckscaff has been our trusted scaffolding partner for our luxury residential apartments in Cantonments. Their professionalism, reliable equipment, and consistent on-time delivery have been invaluable. The quality of their formwork systems and scaffolding solutions has directly contributed to the superior finish of our high-end residential projects.",
//     rating: 5,
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Don&apos;t just take our word for it. Here&apos;s what our satisfied
//             clients have to say about working with us.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors duration-300"
//             >
//               {/* Rating Stars */}
//               <div className="flex mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="size-5 text-orange-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>

//               <p className="text-gray-300 mb-6 italic">
//                 &quot;{testimonial.content}&quot;
//               </p>

//               <div className="border-t border-gray-700 pt-4">
//                 <div className="font-semibold text-white">
//                   {testimonial.name}
//                 </div>
//                 <div className="text-orange-400 text-sm">
//                   {testimonial.company}
//                 </div>
//                 <div className="text-gray-400 text-sm">
//                   {testimonial.project}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Indicators */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center justify-center space-x-8 text-gray-400">
//             <div className="flex items-center space-x-2">
//               <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="text-sm">Trusted by Industry Leaders</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="text-sm">Timely Project Delivery</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//               </svg>
//               <span className="text-sm">Quality Equipment</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  clientImage: string;
  project: string;
  projectValue: number;
  projectDuration: string;
  location: string;
  completionDate: string;
  rating: number;
  testimonial: string;
  category: string;
  status?: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  media: string[];
  featured?: boolean;
  approved?: boolean;
  createdAt?: string;
}

// Helper function to get image URL
const getClientImageUrl = (imagePath: string | null | undefined, apiBaseUrl: string): string => {
  if (!imagePath || imagePath.trim() === "" || imagePath === "null" || imagePath === "undefined") {
    // Default avatar image
    return "/images/testimonials/default-avatar.jpg";
  }
  
  // If it's already a full URL, return it as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  // Try different patterns for backend images
  let finalPath = imagePath;
  
  // If it starts with /uploads/, use it as is
  if (imagePath.startsWith('/uploads/')) {
    finalPath = `${apiBaseUrl}${imagePath}`;
  }
  // If it starts with /images/, use it as is
  else if (imagePath.startsWith('/images/')) {
    finalPath = `${apiBaseUrl}${imagePath}`;
  }
  // If it starts with /, use it as is
  else if (imagePath.startsWith('/')) {
    finalPath = `${apiBaseUrl}${imagePath}`;
  }
  // Otherwise, assume it's in /images/testimonials/
  else {
    finalPath = `${apiBaseUrl}/images/testimonials/${imagePath}`;
  }
  
  return encodeURI(finalPath);
};

// Helper to format date
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://deckstaff-website-be.onrender.com";

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(`${API_BASE_URL}/api/auth/get-testimonials`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch testimonials: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched testimonials data:", data);
        console.log("Number of testimonials:", Array.isArray(data) ? data.length : 0);
        
        // Map backend data to frontend Testimonial interface
        const testimonialsData = Array.isArray(data)
          ? data.map((testimonial: any, index: number) => {
              // Get client image URL
              const clientImageUrl = getClientImageUrl(testimonial.clientImage, API_BASE_URL);
              
              return {
                id: testimonial.id?.toString() || `testimonial-${index}`,
                clientName: testimonial.clientName || "Anonymous Client",
                clientPosition: testimonial.clientPosition || "",
                clientCompany: testimonial.clientCompany || "Unknown Company",
                clientImage: clientImageUrl,
                project: testimonial.project || "Project not specified",
                projectValue: testimonial.projectValue || 0,
                projectDuration: testimonial.projectDuration || "Duration not specified",
                location: testimonial.location || "Location not specified",
                completionDate: testimonial.completionDate || "",
                rating: testimonial.rating || 5,
                testimonial: testimonial.testimonial || "No testimonial content available",
                category: testimonial.category || "COMMERCIAL",
                status: testimonial.status || "COMPLETED",
                challenges: Array.isArray(testimonial.challenges) ? testimonial.challenges : [],
                solutions: Array.isArray(testimonial.solutions) ? testimonial.solutions : [],
                results: Array.isArray(testimonial.results) ? testimonial.results : [],
                media: Array.isArray(testimonial.media) ? testimonial.media : [],
                featured: testimonial.featured || false,
                approved: testimonial.approved || true,
                createdAt: testimonial.createdAt || new Date().toISOString(),
              };
            })
              // Sort by rating (highest first)
              .sort((a: Testimonial, b: Testimonial) => b.rating - a.rating)
          : [];

        console.log("Mapped testimonials:", testimonialsData);
        setTestimonials(testimonialsData);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching testimonials:", err);
        setError(`Failed to load testimonials. Please try again later.`);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [API_BASE_URL]);

  const openTestimonialDetails = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedTestimonial(null);
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category.toUpperCase()) {
      case 'COMMERCIAL':
        return 'bg-blue-100 text-blue-800';
      case 'INDUSTRIAL':
        return 'bg-green-100 text-green-800';
      case 'RESIDENTIAL':
        return 'bg-purple-100 text-purple-800';
      case 'INFRASTRUCTURE':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get category text
  const getCategoryText = (category: string) => {
    switch (category.toUpperCase()) {
      case 'COMMERCIAL':
        return 'Commercial';
      case 'INDUSTRIAL':
        return 'Industrial';
      case 'RESIDENTIAL':
        return 'Residential';
      case 'INFRASTRUCTURE':
        return 'Infrastructure';
      default:
        return category;
    }
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
            <p className="text-gray-300 mt-4">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="bg-red-900/20 border border-red-700 rounded-lg p-6 max-w-lg mx-auto">
              <p className="text-red-300 font-semibold">{error}</p>
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

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about working with us.
          </p>
          
          {/* Show count of testimonials */}
          {testimonials.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm">
              <span className="font-semibold text-orange-400">{testimonials.length}</span> client testimonials
            </div>
          )}
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No testimonials available yet.</p>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Be the first to share your experience working with Deckscaff Ghana Ltd.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.slice(0, 6).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 group hover:transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => openTestimonialDetails(testimonial)}
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`size-5 ${i < testimonial.rating ? 'text-orange-400' : 'text-gray-700'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-300 text-sm">
                      {testimonial.rating}.0 rating
                    </span>
                  </div>

                  {/* Testimonial excerpt */}
                  <p className="text-gray-300 mb-6 italic line-clamp-4">
                    &quot;{testimonial.testimonial}&quot;
                  </p>

                  {/* Client info */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-white">
                        {testimonial.clientName}
                      </div>
                      {/* Category badge */}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(testimonial.category)}`}>
                        {getCategoryText(testimonial.category)}
                      </span>
                    </div>
                    
                    <div className="text-orange-400 text-sm">
                      {testimonial.clientCompany}
                    </div>
                    
                    {testimonial.clientPosition && (
                      <div className="text-gray-400 text-xs mt-1">
                        {testimonial.clientPosition}
                      </div>
                    )}
                    
                    {/* Project info */}
                    <div className="mt-3 text-gray-400 text-sm">
                      <div className="font-medium text-white mb-1">
                        {testimonial.project}
                      </div>
                      <div className="flex items-center text-xs">
                        <svg className="w-3 h-3 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {testimonial.location}
                      </div>
                      <div className="flex items-center text-xs mt-1">
                        <svg className="w-3 h-3 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {testimonial.projectDuration}
                      </div>
                    </div>
                    
                    {/* Read more link */}
                    <div className="mt-4 text-xs text-orange-400 group-hover:text-orange-300 transition-colors flex items-center justify-between">
                      <span>Read full testimonial</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show more button if there are more testimonials */}
            {testimonials.length > 6 && (
              <div className="text-center mt-12">
                <button 
                  className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                  onClick={() => {
                    // Show all testimonials
                    console.log("View all testimonials");
                  }}
                >
                  View All Testimonials ({testimonials.length})
                </button>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Trusted by Industry Leaders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Timely Project Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm">Quality Equipment</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Testimonial Details Modal */}
      {showDetailsModal && selectedTestimonial && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90" onClick={closeDetailsModal}>
          <div className="relative max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeDetailsModal}
                className="absolute top-4 right-4 z-10 text-white hover:text-orange-400 transition-colors bg-black/50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Client Testimonial</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(selectedTestimonial.category)}`}>
                    {getCategoryText(selectedTestimonial.category)}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`size-6 ${i < selectedTestimonial.rating ? 'text-orange-400' : 'text-gray-700'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-300">{selectedTestimonial.rating}.0 out of 5</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client info */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">About the Client</h4>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="font-semibold text-white text-lg">{selectedTestimonial.clientName}</div>
                    <div className="text-orange-400">{selectedTestimonial.clientCompany}</div>
                    {selectedTestimonial.clientPosition && (
                      <div className="text-gray-400 text-sm mt-1">{selectedTestimonial.clientPosition}</div>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Project Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Project Name</p>
                      <p className="font-semibold text-white">{selectedTestimonial.project}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold text-white">{selectedTestimonial.location}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-semibold text-white">{selectedTestimonial.projectDuration}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Completion Date</p>
                      <p className="font-semibold text-white">{formatDate(selectedTestimonial.completionDate)}</p>
                    </div>
                  </div>
                </div>

                {/* Full testimonial */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Client Feedback</h4>
                  <div className="bg-gray-900 rounded-lg p-5 border-l-4 border-orange-500">
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                      &quot;{selectedTestimonial.testimonial}&quot;
                    </p>
                  </div>
                </div>

                {/* Additional details */}
                {(selectedTestimonial.challenges.length > 0 || 
                  selectedTestimonial.solutions.length > 0 || 
                  selectedTestimonial.results.length > 0) && (
                  <div className="space-y-6">
                    {selectedTestimonial.challenges.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Project Challenges</h4>
                        <ul className="space-y-3">
                          {selectedTestimonial.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <div className="bg-red-500/10 p-2 rounded-lg mr-3 flex-shrink-0">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.5 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                              </div>
                              <span className="pt-1">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedTestimonial.solutions.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Our Solutions</h4>
                        <ul className="space-y-3">
                          {selectedTestimonial.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <div className="bg-green-500/10 p-2 rounded-lg mr-3 flex-shrink-0">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="pt-1">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedTestimonial.results.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Project Results</h4>
                        <ul className="space-y-3">
                          {selectedTestimonial.results.map((result, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <div className="bg-blue-500/10 p-2 rounded-lg mr-3 flex-shrink-0">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span className="pt-1">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA */}
                <div className="pt-6 border-t border-gray-700">
                  <a
                    href="#contact"
                    onClick={closeDetailsModal}
                    className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                  >
                    Start Your Project With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}