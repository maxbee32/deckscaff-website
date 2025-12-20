// import Image from 'next/image'

// interface Service {
//   title: string
//   description: string
//   image: string
//   features: string[]
// }

// const services: Service[] = [
//   {
//     title: "Access Scaffolding",
//     description: "Kwikstage type scaffolding systems for safe and efficient access",
//     image: "/images/services/access-scaffolding.jpeg",
//     features: ["Kwikstage Systems", "Full Boarding", "Safety Compliant", "Quick Installation"]
//   },
//   {
//     title: "Formwork Solutions",
//     description: "Professional formwork for concrete structures and construction",
//     image: "/images/services/formwork.jpeg",
//     features: ["Custom Formwork", "Concrete Support", "Structural Integrity", "Precision Engineering"]
//   },
//   {
//     title: "Equipment Rental",
//     description: "High-quality scaffolding equipment rental with full support",
//     image: "/images/services/rental.jpeg",
//     features: ["Quality Equipment", "Maintenance Included", "Flexible Rental", "Delivery Service"]
//   },
//   {
//     title: "Civil Engineering",
//     description: "Complete building and civil engineering solutions",
//     image: "/images/services/civil-enginering.png",
//     features: ["Project Management", "Structural Design", "Quality Assurance", "Timely Delivery"]
//   }
// ]

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive scaffolding and construction solutions tailored to your project needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-2"
//             >
//               {/* Service Image */}
//               <div className="h-48 relative overflow-hidden">
//                 <Image 
//                   src={service.image} 
//                   alt={service.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-sm text-gray-700">
//                       <div className="size-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category?: string;
  duration?: string;
  price?: string;
  icon?: string;
  color?: string;
  status?: "ACTIVE" | "INACTIVE" | "COMING_SOON" | "MAINTENANCE";
  createdAt?: string;
  updatedAt?: string;
}

// Default colors for services if not provided by API
const availableColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-orange-100 text-orange-800",
  "bg-purple-100 text-purple-800",
  "bg-red-100 text-red-800",
  "bg-indigo-100 text-indigo-800",
];

// Default service images
const defaultServiceImages = [
  "/images/services/access-scaffolding.jpeg",
  "/images/services/formwork.jpeg",
  "/images/services/rental.jpeg",
  "/images/services/civil-enginering.png"
];

// Helper function to get image URL
const getServiceImageUrl = (imagePath: string | null | undefined, apiBaseUrl: string, index: number): string => {
  // If no image path, use a default placeholder
  if (!imagePath || imagePath.trim() === "" || imagePath === "null" || imagePath === "undefined") {
    return defaultServiceImages[index % defaultServiceImages.length];
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
  // Otherwise, assume it's in /images/services/
  else {
    finalPath = `${apiBaseUrl}/images/services/${imagePath}`;
  }
  
  return encodeURI(finalPath);
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // API base URL from environment variable
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://deckstaff-website-be.onrender.com";

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(`${API_BASE_URL}/api/auth/get-services`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch services: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Map backend data to frontend Service interface
        const servicesWithFeatures = Array.isArray(data)
          ? data.map((service: any, index: number) => {
              // Handle status - be more flexible
              let status: "ACTIVE" | "INACTIVE" | "COMING_SOON" | "MAINTENANCE" = "ACTIVE";
              if (service.status) {
                const statusStr = String(service.status).toUpperCase();
                if (statusStr === "ACTIVE" || statusStr === "INACTIVE" || 
                    statusStr === "COMING_SOON" || statusStr === "MAINTENANCE") {
                  status = statusStr as any;
                }
              }
              
              // Construct proper image URL
              const imageUrl = getServiceImageUrl(service.image, API_BASE_URL, index);
              
              // Parse features if it's a string
              let features: string[] = [];
              if (Array.isArray(service.features)) {
                features = service.features;
              } else if (service.features && typeof service.features === 'string') {
                // Try to parse as JSON or split by commas
                try {
                  features = JSON.parse(service.features);
                } catch {
                  features = service.features.split(',').map((f: string) => f.trim());
                }
              }
              
              return {
                id: service.id?.toString() || `service-${index}`,
                title: service.title || "Untitled Service",
                description: service.description || "No description available",
                image: imageUrl,
                features: features,
                category: service.category || "Scaffolding Installation",
                duration: service.duration || "Varies",
                price: service.price || "Contact for quote",
                icon: service.icon || "scaffolding.png",
                color: availableColors[index % availableColors.length],
                status: status,
                createdAt: service.createdAt,
                updatedAt: service.updatedAt,
              };
            })
          : [];

        setServices(servicesWithFeatures);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching services:", err);
        setError(`Failed to load services. Please try again later.`);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [API_BASE_URL]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedService(null);
  };

  // Loading state
  if (loading) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
            <p className="text-gray-600 mt-4">Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-lg mx-auto">
              <p className="text-red-600 font-semibold">{error}</p>
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive scaffolding and construction solutions tailored to your project needs
          </p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No services found in the database.</p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Refresh
              </button>
              <a
                href="#contact"
                className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Service Image */}
                  <div className="h-48 relative overflow-hidden bg-gray-100">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = defaultServiceImages[index % defaultServiceImages.length];
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-50 to-orange-50 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No image available</span>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Status Badge - Show for all statuses including ACTIVE */}
                    {service.status && (
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          service.status === "ACTIVE"
                            ? "bg-green-100 text-green-800" 
                            : service.status === "COMING_SOON" 
                            ? "bg-yellow-100 text-yellow-800" 
                            : service.status === "MAINTENANCE"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {service.status === "ACTIVE" ? "Available" :
                           service.status === "COMING_SOON" ? "Coming Soon" : 
                           service.status === "MAINTENANCE" ? "Maintenance" : 
                           "Inactive"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      {service.category && (
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${service.color || availableColors[0]}`}>
                          {service.category}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{service.description}</p>
                    
                    {/* Additional Info */}
                    {(service.duration || service.price) && (
                      <div className="flex flex-col gap-2 text-sm mb-4">
                        {service.duration && (
                          <span className="text-gray-500">
                            <span className="font-semibold">Duration:</span> {service.duration}
                          </span>
                        )}
                        {service.price && (
                          <span className="text-green-600 font-semibold">
                            {service.price}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Features Preview */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <div className="size-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-gray-500">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    )}
                    
                    {/* View Details Button */}
                    <button 
                      className="mt-auto w-full text-center bg-orange-50 text-orange-600 hover:bg-orange-100 font-medium text-sm transition-colors duration-300 py-3 rounded-lg"
                      onClick={() => handleServiceClick(service)}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Service Details Modal */}
      {showDetailsModal && selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50" onClick={closeDetailsModal}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Service Details</h3>
                <button
                  onClick={closeDetailsModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Service Image */}
              <div className="mb-6">
                <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = defaultServiceImages[0];
                    }}
                  />
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                {/* Service Name */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{selectedService.title}</h4>
                  <p className="text-gray-600 text-lg">{selectedService.description}</p>
                </div>

                {/* Service Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-semibold text-gray-900">{selectedService.category || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-semibold text-green-600">{selectedService.price || "Contact for quote"}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedService.status === "ACTIVE"
                          ? "bg-green-100 text-green-800" 
                          : selectedService.status === "COMING_SOON" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : selectedService.status === "MAINTENANCE"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          selectedService.status === "ACTIVE"
                            ? "bg-green-500" 
                            : selectedService.status === "COMING_SOON" 
                            ? "bg-yellow-500" 
                            : selectedService.status === "MAINTENANCE"
                            ? "bg-red-500"
                            : "bg-gray-500"
                        }`}></span>
                        {selectedService.status === "ACTIVE" ? "Active" :
                         selectedService.status === "COMING_SOON" ? "Coming Soon" : 
                         selectedService.status === "MAINTENANCE" ? "Maintenance" : 
                         "Inactive"}
                      </span>
                    </div>
                    {selectedService.duration && (
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-900">{selectedService.duration}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                {selectedService.features && selectedService.features.length > 0 && (
                  <div>
                    <h5 className="text-lg font-bold text-gray-900 mb-4">Features</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={closeDetailsModal}
                    className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                  >
                    Request This Service
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