"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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

interface ApiService {
  id?: number | string;
  title?: string;
  description?: string;
  image?: string;
  features?: string[] | string;
  category?: string;
  duration?: string;
  price?: string;
  icon?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

const availableColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-orange-100 text-orange-800",
  "bg-purple-100 text-purple-800",
  "bg-red-100 text-red-800",
  "bg-indigo-100 text-indigo-800",
];

const defaultServiceImages = [
  "/images/services/access-scaffolding.jpeg",
  "/images/services/formwork.jpeg",
  "/images/services/rental.jpeg",
  "/images/services/civil-enginering.png",
];

const CACHE_KEY = "deckstaff_services_cache";
const CACHE_TIMESTAMP_KEY = "deckstaff_services_timestamp";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

const getServiceImageUrl = (
  imagePath: string | null | undefined,
  apiBaseUrl: string,
  index: number,
): string => {
  if (
    !imagePath ||
    imagePath.trim() === "" ||
    imagePath === "null" ||
    imagePath === "undefined"
  ) {
    return defaultServiceImages[index % defaultServiceImages.length];
  }

  if (
    imagePath.startsWith("http://") ||
    imagePath.startsWith("https://") ||
    imagePath.startsWith("data:")
  ) {
    return imagePath;
  }

  let finalPath = imagePath;

  if (imagePath.startsWith("/uploads/")) {
    finalPath = `${apiBaseUrl}${imagePath}`;
  } else if (imagePath.startsWith("/images/")) {
    finalPath = `${apiBaseUrl}${imagePath}`;
  } else if (imagePath.startsWith("/")) {
    finalPath = `${apiBaseUrl}${imagePath}`;
  } else {
    finalPath = `${apiBaseUrl}/images/services/${imagePath}`;
  }

  return encodeURI(finalPath);
};

// Loading Skeleton Component - IMPROVED
function ServiceSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse border border-gray-100">
      <div className="h-52 bg-gradient-to-r from-gray-200 to-gray-100" />
      <div className="p-5">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-16" />
          <div className="h-6 bg-gray-200 rounded-full w-20" />
        </div>
        <div className="h-10 bg-gray-200 rounded-xl w-full" />
      </div>
    </div>
  );
}

// Catchy Error Component - Services Down / Maintenance
function ServicesMaintenance() {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="relative mb-8">
          <svg
            className="w-48 h-48 mx-auto"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="90" fill="#FFF7ED" />
            <rect
              x="60"
              y="50"
              width="6"
              height="100"
              rx="3"
              fill="#FF6B35"
              className="animate-bounce"
              style={{ animationDuration: "2s" }}
            />
            <rect
              x="134"
              y="50"
              width="6"
              height="100"
              rx="3"
              fill="#FF6B35"
              className="animate-bounce"
              style={{ animationDuration: "2s", animationDelay: "0.3s" }}
            />
            <rect
              x="97"
              y="50"
              width="6"
              height="100"
              rx="3"
              fill="#E55A2B"
              className="animate-bounce"
              style={{ animationDuration: "2s", animationDelay: "0.15s" }}
            />
            <rect x="55" y="70" width="90" height="5" rx="2" fill="#D4AF37" />
            <rect x="55" y="100" width="90" height="5" rx="2" fill="#D4AF37" />
            <rect x="55" y="130" width="90" height="5" rx="2" fill="#D4AF37" />
            <line
              x1="60"
              y1="70"
              x2="140"
              y2="100"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="60"
              y1="100"
              x2="140"
              y2="130"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="45" r="12" fill="#FF6B35" />
            <rect x="88" y="45" width="24" height="6" rx="3" fill="#E55A2B" />
            <circle cx="155" cy="75" r="8" fill="#D4AF37" />
            <rect
              x="155"
              y="75"
              width="4"
              height="20"
              rx="2"
              fill="#D4AF37"
              transform="rotate(45, 157, 85)"
            />
            <circle
              cx="45"
              cy="120"
              r="3"
              fill="#FF8C42"
              className="animate-pulse"
            />
            <circle
              cx="155"
              cy="140"
              r="2"
              fill="#FF8C42"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="70"
              cy="160"
              r="2.5"
              fill="#FF8C42"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Services Under Maintenance
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We&apos;re currently updating our service catalog with exciting new
          offerings. Our team is working hard to bring you the best scaffolding
          solutions in Ghana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Us
          </a>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh Page
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Need immediate assistance? Call us: +233 (0) 30 123 4567
        </p>
      </div>
    </div>
  );
}

// Empty State - No services found
function NoServicesFound() {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-md mx-auto">
        <svg
          className="w-48 h-48 mx-auto mb-6"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" fill="#F3F4F6" />
          <rect x="50" y="80" width="100" height="60" rx="4" fill="#D1D5DB" />
          <rect x="60" y="70" width="8" height="70" rx="2" fill="#9CA3AF" />
          <rect x="132" y="70" width="8" height="70" rx="2" fill="#9CA3AF" />
          <rect x="145" y="40" width="4" height="50" rx="2" fill="#6B7280" />
          <rect x="135" y="40" width="24" height="4" rx="2" fill="#6B7280" />
          <line
            x1="145"
            y1="40"
            x2="135"
            y2="30"
            stroke="#6B7280"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M145 55 L145 65" stroke="#6B7280" strokeWidth="2" />
          <path
            d="M140 65 L150 65"
            stroke="#6B7280"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="75"
            cy="155"
            r="12"
            stroke="#FF6B35"
            strokeWidth="4"
            fill="none"
          />
          <line
            x1="84"
            y1="164"
            x2="95"
            y2="175"
            stroke="#FF6B35"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <text x="160" y="100" fontSize="24" fill="#FF6B35" fontWeight="bold">
            ?
          </text>
          <text x="30" y="110" fontSize="20" fill="#FF6B35" fontWeight="bold">
            ?
          </text>
        </svg>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          No Services Available
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our service catalog is currently being updated. Please check back soon
          or contact us directly for your scaffolding needs.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all hover:scale-105"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact Our Team
        </a>
      </div>
    </div>
  );
}

// Main Services Component - IMPROVED
export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [usingCachedData, setUsingCachedData] = useState(false);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://deckstaff-website-be.onrender.com";

  // Load cached services
  const loadFromCache = (): Service[] | null => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

      if (cached && timestamp) {
        const cachedTime = parseInt(timestamp);
        const now = Date.now();

        if (now - cachedTime < CACHE_DURATION) {
          return JSON.parse(cached);
        }
      }
      return null;
    } catch (error) {
      console.error("Failed to load from cache:", error);
      return null;
    }
  };

  // Save services to cache
  const saveToCache = (servicesData: Service[]) => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(servicesData));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    } catch (error) {
      console.error("Failed to save to cache:", error);
    }
  };

  // Fetch fresh services from API
  const fetchFreshServices = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/get-services`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch services: ${response.status}`);
      }

      const data = await response.json();

      const servicesWithFeatures = Array.isArray(data)
        ? data.map((service: ApiService, index: number) => {
            let status: "ACTIVE" | "INACTIVE" | "COMING_SOON" | "MAINTENANCE" =
              "ACTIVE";
            if (service.status) {
              const statusStr = service.status.toUpperCase();
              if (statusStr === "ACTIVE") status = "ACTIVE";
              else if (statusStr === "INACTIVE") status = "INACTIVE";
              else if (statusStr === "COMING_SOON") status = "COMING_SOON";
              else if (statusStr === "MAINTENANCE") status = "MAINTENANCE";
            }

            const imageUrl = getServiceImageUrl(
              service.image,
              API_BASE_URL,
              index,
            );

            let features: string[] = [];
            if (Array.isArray(service.features)) {
              features = service.features;
            } else if (
              service.features &&
              typeof service.features === "string"
            ) {
              try {
                features = JSON.parse(service.features);
              } catch {
                features = service.features
                  .split(",")
                  .map((f: string) => f.trim());
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

      if (servicesWithFeatures.length > 0) {
        setServices(servicesWithFeatures);
        saveToCache(servicesWithFeatures);
        setUsingCachedData(false);
        setError(null);
      } else {
        setError("no_services");
      }
    } catch {
      setError("services_down");
    }
  }, [API_BASE_URL]);

  // Fetch services with cache
  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const cachedServices = loadFromCache();
      if (cachedServices && cachedServices.length > 0) {
        setServices(cachedServices);
        setUsingCachedData(true);
        setLoading(false);
        fetchFreshServices();
        return;
      }

      await fetchFreshServices();
    } catch {
      const cachedServices = loadFromCache();
      if (cachedServices && cachedServices.length > 0) {
        setServices(cachedServices);
        setUsingCachedData(true);
        setError(null);
        setLoading(false);
      } else {
        setError("services_down");
      }
    } finally {
      setLoading(false);
    }
  }, [fetchFreshServices]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedService(null);
  };

  // Loading state
  if (loading && services.length === 0) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive scaffolding and construction solutions tailored to
              your project needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ServiceSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error === "services_down" && services.length === 0) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
          </div>
          <ServicesMaintenance />
        </div>
      </section>
    );
  }

  // Empty state
  if (services.length === 0 && !loading) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
          </div>
          <NoServicesFound />
        </div>
      </section>
    );
  }

  // Main render - IMPROVED
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - IMPROVED */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive scaffolding and construction solutions tailored to
            your project needs
          </p>
          {usingCachedData && (
            <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full">
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Updating services...</span>
            </div>
          )}
        </div>

        {/* Services Grid - IMPROVED CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 flex flex-col h-full cursor-pointer border border-gray-100"
              onClick={() => handleServiceClick(service)}
            >
              {/* Image Container - IMPROVED */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100">
                {service.image ? (
                  <>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          defaultServiceImages[
                            index % defaultServiceImages.length
                          ];
                      }}
                      unoptimized={service.image.startsWith("http")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-orange-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                )}

                {/* Status Badge - IMPROVED */}
                {service.status && service.status !== "ACTIVE" && (
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg ${
                        service.status === "COMING_SOON"
                          ? "bg-yellow-500 text-white"
                          : service.status === "MAINTENANCE"
                            ? "bg-red-500 text-white"
                            : "bg-gray-500 text-white"
                      }`}
                    >
                      {service.status === "COMING_SOON"
                        ? "Coming Soon"
                        : service.status === "MAINTENANCE"
                          ? "Maintenance"
                          : "Inactive"}
                    </span>
                  </div>
                )}

                {/* Category Badge - MOVED to bottom left */}
                {service.category && (
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/90 shadow-lg text-orange-600">
                      {service.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content - IMPROVED */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Features as tags - IMPROVED */}
                {service.features && service.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features
                      .slice(0, 2)
                      .map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {feature.length > 20
                            ? feature.substring(0, 20) + "..."
                            : feature}
                        </span>
                      ))}
                    {service.features.length > 2 && (
                      <span className="text-xs text-orange-500 font-medium">
                        +{service.features.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* Price/Duration - IMPROVED */}
                {(service.duration || service.price) && (
                  <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-100">
                    {service.duration && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {service.duration}
                      </div>
                    )}
                    {service.price && (
                      <div className="text-sm font-semibold text-green-600">
                        {service.price}
                      </div>
                    )}
                  </div>
                )}

                {/* Button - IMPROVED (outline style) */}
                <button
                  className="mt-auto w-full text-center bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-400 font-semibold text-sm transition-all duration-300 py-2.5 rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - NEW */}
        {services.length >= 4 && (
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group"
            >
              <span>Can&apos;t find what you&apos;re looking for?</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Contact us for custom scaffolding solutions
            </p>
          </div>
        )}
      </div>

      {/* Modal - Keep existing modal (it's good) */}
      {showDetailsModal && selectedService && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closeDetailsModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedService.title}
                </h3>
                <button
                  onClick={closeDetailsModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
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

              <div className="mb-6">
                <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = defaultServiceImages[0];
                    }}
                    unoptimized={selectedService.image.startsWith("http")}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-semibold text-gray-900">
                        {selectedService.category || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-semibold text-green-600">
                        {selectedService.price || "Contact for quote"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                          selectedService.status === "ACTIVE"
                            ? "bg-green-100 text-green-800"
                            : selectedService.status === "COMING_SOON"
                              ? "bg-yellow-100 text-yellow-800"
                              : selectedService.status === "MAINTENANCE"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            selectedService.status === "ACTIVE"
                              ? "bg-green-500"
                              : selectedService.status === "COMING_SOON"
                                ? "bg-yellow-500"
                                : selectedService.status === "MAINTENANCE"
                                  ? "bg-red-500"
                                  : "bg-gray-500"
                          }`}
                        />
                        {selectedService.status === "ACTIVE"
                          ? "Active"
                          : selectedService.status === "COMING_SOON"
                            ? "Coming Soon"
                            : selectedService.status === "MAINTENANCE"
                              ? "Maintenance"
                              : "Inactive"}
                      </span>
                    </div>
                    {selectedService.duration && (
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-900">
                          {selectedService.duration}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {selectedService.features &&
                  selectedService.features.length > 0 && (
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-4">
                        Features &amp; Benefits
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedService.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-700"
                          >
                            <svg
                              className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={closeDetailsModal}
                    className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
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