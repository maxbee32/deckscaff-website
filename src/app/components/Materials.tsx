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
  location: string;
  materialType: string;
  image: string;
}

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
  location: string;
  materialType: string;
  image: string;
  currentlyRented: number;
  createdAt: string;
  updatedAt: string;
}

const getMaterialImageUrl = (imagePath: string, apiBaseUrl: string): string => {
  if (!imagePath || imagePath.trim() === "") {
    return getDefaultImageUrl();
  }
  
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  if (imagePath.startsWith('/')) {
    const encodedPath = encodeURI(imagePath);
    return `${apiBaseUrl}${encodedPath}`;
  }
  
  const encodedPath = encodeURI(imagePath);
  return `${apiBaseUrl}/images/${encodedPath}`;
};

const getDefaultImageUrl = (): string => {
  return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80";
};

// Professional Empty State Component with Worker Organizing Inventory
function EmptyMaterialsState() {
  return (
    <div className="text-center py-16 px-4 max-w-2xl mx-auto">
      {/* Professional Animated SVG Illustration */}
      <div className="relative mb-8">
        <svg
          className="w-64 h-64 mx-auto"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="150" cy="150" r="140" fill="#FFF7ED" />
          
          {/* Worker body */}
          <rect x="130" y="120" width="40" height="50" rx="5" fill="#FF6B35" className="animate-bounce" style={{ animationDuration: '2s' }} />
          
          {/* Worker head */}
          <circle cx="150" cy="105" r="20" fill="#E55A2B" />
          
          {/* Hard hat */}
          <path d="M130 100 Q130 80 150 80 Q170 80 170 100" fill="#FFD700" />
          <rect x="128" y="98" width="44" height="6" rx="3" fill="#FFD700" />
          
          {/* Eyes (happy/focused) */}
          <circle cx="142" cy="105" r="3" fill="#333" />
          <circle cx="158" cy="105" r="3" fill="#333" />
          <path d="M145 112 Q150 115 155 112" stroke="#333" strokeWidth="2" fill="none" />
          
          {/* Arms reaching to organize */}
          <path d="M130 135 L100 120" stroke="#FF6B35" strokeWidth="8" strokeLinecap="round" className="animate-swing" style={{ animationDuration: '1.5s' }} />
          <path d="M170 135 L200 120" stroke="#FF6B35" strokeWidth="8" strokeLinecap="round" className="animate-swing" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
          
          {/* Hands */}
          <circle cx="98" cy="118" r="5" fill="#E55A2B" />
          <circle cx="202" cy="118" r="5" fill="#E55A2B" />
          
          {/* Shelf being stocked */}
          <rect x="70" y="150" width="160" height="8" rx="2" fill="#D4AF37" />
          
          {/* Boxes on shelf */}
          <rect x="80" y="130" width="25" height="20" rx="3" fill="#FF8C42" />
          <rect x="110" y="135" width="25" height="15" rx="3" fill="#FFA559" />
          <rect x="165" y="130" width="25" height="20" rx="3" fill="#FF8C42" />
          <rect x="195" y="135" width="25" height="15" rx="3" fill="#FFA559" />
          
          {/* Box being placed (in hand) */}
          <rect x="220" y="108" width="20" height="15" rx="3" fill="#FF8C42" className="animate-float" style={{ animationDuration: '2s' }} />
          
          {/* Clipboard/checklist */}
          <rect x="30" y="160" width="22" height="30" rx="3" fill="#D4AF37" />
          <line x1="35" y1="168" x2="47" y2="168" stroke="#FF6B35" strokeWidth="2" />
          <line x1="35" y1="174" x2="47" y2="174" stroke="#FF6B35" strokeWidth="2" />
          <line x1="35" y1="180" x2="42" y2="180" stroke="#FF6B35" strokeWidth="2" />
          
          {/* Checkmark on clipboard */}
          <path d="M32 190 L35 193 L41 187" stroke="#4CAF50" strokeWidth="2" fill="none" />
          
          {/* Small dots / particles (organized inventory) */}
          <circle cx="60" cy="180" r="2" fill="#FF8C42" className="animate-pulse" />
          <circle cx="240" cy="140" r="2" fill="#FF8C42" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="250" cy="180" r="2.5" fill="#FF8C42" className="animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Stars (positive energy) */}
          <path d="M50 100 L52 106 L58 106 L53 110 L55 116 L50 112 L45 116 L47 110 L42 106 L48 106 Z" fill="#FFD700" className="animate-twinkle" style={{ animationDuration: '2s' }} />
          <path d="M260 100 L261.5 104 L266 104 L262.5 107 L264 111 L260 108.5 L256 111 L257.5 107 L254 104 L258.5 104 Z" fill="#FFD700" className="animate-twinkle" style={{ animationDuration: '2s', animationDelay: '1s' }} />
          
          {/* Progress bar - showing catalog is being built */}
          <rect x="90" y="230" width="120" height="12" rx="6" fill="#E5E7EB" />
          <rect x="90" y="230" width="72" height="12" rx="6" fill="#FF6B35" className="animate-progress" style={{ animationDuration: '3s' }} />
          <text x="175" y="240" fontSize="10" fill="#FF6B35" fontWeight="bold" className="animate-pulse">75%</text>
        </svg>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Organizing Our Materials Catalog
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        Our team is carefully organizing and updating our materials inventory. 
        We're adding high-quality scaffolding equipment to serve you better.
      </p>

      {/* Info Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Certified Quality</h4>
          <p className="text-xs text-gray-500">All materials meet international safety standards</p>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Fast Delivery</h4>
          <p className="text-xs text-gray-500">Rapid deployment across Ghana</p>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
          <p className="text-xs text-gray-500">Round-the-clock expert assistance</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact Sales Team
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Request Custom Quote
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Need immediate assistance? Call us: +233 (0) 24 544 6160
      </p>
    </div>
  );
}

export default function Materials() {
  const [materials, setMaterials] = useState<MaterialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  
  const [activeFilter, setActiveFilter] = useState<"all" | "FOR_RENT" | "FOR_SALE">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedDetailsMaterial, setSelectedDetailsMaterial] = useState<MaterialItem | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    quantity: "1",
  });

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
        
        const mappedMaterials: MaterialItem[] = data.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          specifications: item.specifications || [],
          category: item.category,
          quantity: item.availableQuantity || item.quantity || 0,
          price: item.price || "Contact for quote",
          unit: item.unit || "unit",
          icon: item.icon,
          color: item.color,
          status: item.status || "IN_STOCK",
          location: item.location,
          materialType: item.materialType || "FOR_SALE",
          image: getMaterialImageUrl(item.image, API_BASE_URL)
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

  const categories = [
    "all",
    ...Array.from(new Set(materials.map((item) => item.category))),
  ].filter(Boolean);

  const filteredMaterials = materials.filter((item) => {
    const typeMatch = activeFilter === "all" || item.materialType === activeFilter;
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "IN_STOCK": return { color: "bg-green-500", text: "In Stock" };
      case "LOW_STOCK": return { color: "bg-yellow-500", text: "Limited Stock" };
      case "OUT_OF_STOCK": return { color: "bg-red-500", text: "Out of Stock" };
      case "RENTED_OUT": return { color: "bg-blue-500", text: "Rented Out" };
      case "DISCONTINUED": return { color: "bg-gray-500", text: "Discontinued" };
      default: return { color: "bg-gray-500", text: status };
    }
  };

  const getStatusColor = (status: string) => getStatusInfo(status).color;
  const getStatusText = (status: string) => getStatusInfo(status).text;

  const handleDetailsClick = (material: MaterialItem) => {
    setSelectedDetailsMaterial(material);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedDetailsMaterial(null);
  };

  const handleCallClick = () => setShowCallOptions(true);

  const handleQuoteRequest = (material: MaterialItem) => {
    if (material.status === "OUT_OF_STOCK" || material.status === "DISCONTINUED") return;
    setSelectedMaterial(material);
    setShowContactModal(true);
    setFormError("");
    setIsSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ym97vfw";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_47fiyww";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "WD_oOMLqiTWDD4V08";

    try {
      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Email service not configured.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || "Not provided",
        project_type: selectedMaterial?.materialType === "FOR_RENT" ? "Rental Request" : "Purchase Quote",
        material_name: selectedMaterial?.name || "Not specified",
        material_category: selectedMaterial?.category || "Not specified",
        quantity: formData.quantity,
        message: formData.projectDetails,
        to_email: "deckscaffgh@outlook.com",
        subject: `${selectedMaterial?.materialType === "FOR_RENT" ? "Rental Request" : "Quote Request"} - ${selectedMaterial?.name}`,
        reply_to: formData.email,
      };

      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      if (result.status === 200) {
        setFormData({ name: "", email: "", phone: "", company: "", projectDetails: "", quantity: "1" });
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
      setFormError("There was an error sending your request. Please try again or contact us directly.");
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
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scaffolding <span className="text-orange-500">Materials</span>
            </h2>
          </div>
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
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
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scaffolding <span className="text-orange-500">Materials</span>
            </h2>
          </div>
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{fetchError}</span>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // EMPTY STATE - Show beautiful empty state when no materials
  if (materials.length === 0) {
    return (
      <section id="materials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scaffolding <span className="text-orange-500">Materials</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality equipment for rent and purchase
            </p>
          </div>
          
          {/* Beautiful Empty State */}
          <EmptyMaterialsState />
        </div>
      </section>
    );
  }

  // Main render with materials
  return (
    <section id="materials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Scaffolding <span className="text-orange-500">Materials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                <div className={`absolute top-4 right-4 ${getStatusColor(material.status)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {getStatusText(material.status)}
                </div>
                <div className={`absolute top-4 left-4 ${material.materialType === "FOR_RENT" ? "bg-blue-500" : "bg-green-500"} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {material.materialType === "FOR_RENT" ? "FOR RENT" : "FOR SALE"}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 font-medium">{material.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{material.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{material.description}</p>

                <ul className="space-y-2 mb-6">
                  {material.specifications?.slice(0, 3).map((spec, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>

                <div className="mb-4 flex items-center justify-between text-sm">
                  {material.price && (
                    <div className="text-green-600 font-semibold">
                      {material.price} {material.unit && `per ${material.unit}`}
                    </div>
                  )}
                  <div className={`text-sm font-medium ${
                    material.quantity > 10 ? "text-green-600" : material.quantity > 0 ? "text-yellow-600" : "text-red-600"
                  }`}>
                    {material.quantity > 0 ? `${material.quantity} available` : "Out of stock"}
                  </div>
                </div>

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
                    {material.materialType === "FOR_RENT" ? "Request Rental" : "Get Quote"}
                  </button>
                  <button 
                    onClick={() => handleDetailsClick(material)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Need Custom Scaffolding Solutions?
              </h3>
              
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                We specialize in custom-engineered scaffolding systems for unique project requirements. 
                Our team works with you to design, supply, and install tailored solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Request Custom Quote
                </a>
                <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactModal && selectedMaterial && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedMaterial.materialType === "FOR_RENT" ? "Request Rental" : "Get Quote"}
                </h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isSubmitting}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-2xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-green-800">Request Sent Successfully!</h3>
                      <p className="text-green-700 text-sm">We'll contact you within 2 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {formError && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-2xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-red-800">Unable to Send Request</h3>
                      <p className="text-red-700 text-sm">{formError}</p>
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
                    <h4 className="font-semibold text-gray-900">{selectedMaterial.name}</h4>
                    <p className="text-sm text-gray-600">{selectedMaterial.category}</p>
                    <p className="text-xs font-semibold text-green-600">{selectedMaterial.price}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                    placeholder="Tell us about your project requirements..."
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
                        <svg className="animate-spin -ml-1 mr-3 w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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

      {/* Details Modal */}
      {showDetailsModal && selectedDetailsMaterial && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50" onClick={closeDetailsModal}>
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Material Details</h3>
                <button onClick={closeDetailsModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={selectedDetailsMaterial.image}
                    alt={selectedDetailsMaterial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = getDefaultImageUrl();
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{selectedDetailsMaterial.name}</h4>
                    <p className="text-gray-600">{selectedDetailsMaterial.category}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedDetailsMaterial.materialType === "FOR_RENT" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`}>
                    {selectedDetailsMaterial.materialType === "FOR_RENT" ? "FOR RENT" : "FOR SALE"}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Status</p>
                    <span className={`inline-flex items-center gap-1 font-semibold ${getStatusColor(selectedDetailsMaterial.status).replace('bg-', 'text-')}`}>
                      <span className={`w-2 h-2 rounded-full ${getStatusColor(selectedDetailsMaterial.status)}`}></span>
                      {getStatusText(selectedDetailsMaterial.status)}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500">Price</p>
                    <p className="font-semibold text-green-600">{selectedDetailsMaterial.price}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">Description</p>
                  <p className="text-gray-700">{selectedDetailsMaterial.description}</p>
                </div>

                {selectedDetailsMaterial.specifications && selectedDetailsMaterial.specifications.length > 0 && (
                  <div>
                    <p className="text-gray-500 mb-2">Specifications</p>
                    <ul className="space-y-1">
                      {selectedDetailsMaterial.specifications.map((spec, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <svg className="w-4 h-4 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={() => {
                      closeDetailsModal();
                      handleQuoteRequest(selectedDetailsMaterial);
                    }}
                    disabled={selectedDetailsMaterial.status === "OUT_OF_STOCK" || selectedDetailsMaterial.status === "DISCONTINUED"}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      selectedDetailsMaterial.status === "OUT_OF_STOCK" || selectedDetailsMaterial.status === "DISCONTINUED"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    {selectedDetailsMaterial.materialType === "FOR_RENT" ? "Request Rental" : "Get Quote"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}