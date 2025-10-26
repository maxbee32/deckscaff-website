"use client";
import { useState } from "react";

interface MaterialItem {
  id: number;
  name: string;
  type: "rental" | "sale";
  category: string;
  image: string;
  description: string;
  features: string[];
  status: "available" | "limited" | "coming-soon";
}

const materials: MaterialItem[] = [
  {
    id: 1,
    name: "Kwikstage Scaffolding System",
    type: "rental",
    category: "Scaffolding",
    image: "🪜",
    description:
      "Complete Kwikstage scaffolding systems for safe and efficient access at height",
    features: [
      "Quick Assembly",
      "Galvanized Finish",
      "Load Tested",
      "Safety Certified",
    ],
    status: "available",
  },
  {
    id: 2,
    name: "Cuplock Scaffolding",
    type: "rental",
    category: "Scaffolding",
    image: "🔗",
    description:
      "Versatile cuplock system ideal for complex structures and high-rise buildings",
    features: [
      "High Load Capacity",
      "Versatile Configurations",
      "Durable Steel",
      "Easy Installation",
    ],
    status: "available",
  },
  {
    id: 3,
    name: "Scaffolding Boards",
    type: "sale",
    category: "Accessories",
    image: "📏",
    description:
      "Premium quality scaffolding boards for safe working platforms",
    features: [
      "Pressure Treated",
      "Graded Timber",
      "Standard Sizes",
      "Long Lasting",
    ],
    status: "available",
  },
  {
    id: 4,
    name: "Mobile Tower Scaffolds",
    type: "rental",
    category: "Scaffolding",
    image: "🏗️",
    description:
      "Portable tower scaffolds for interior work and maintenance projects",
    features: [
      "Wheel Mounted",
      "Quick Setup",
      "Compact Storage",
      "Height Adjustable",
    ],
    status: "limited",
  },
  {
    id: 5,
    name: "Scaffolding Couplers",
    type: "sale",
    category: "Fittings",
    image: "🔩",
    description: "High-strength steel couplers for secure tube connections",
    features: [
      "Drop Forged Steel",
      "Zinc Plated",
      "BS/EN Certified",
      "Various Sizes",
    ],
    status: "available",
  },
  {
    id: 6,
    name: "Safety Guardrails",
    type: "rental",
    category: "Safety",
    image: "🚧",
    description:
      "Complete guardrail systems for fall protection and edge security",
    features: [
      "Quick Installation",
      "Adjustable Height",
      "High Visibility",
      "OSHA Compliant",
    ],
    status: "available",
  },
  {
    id: 7,
    name: "Scaffolding Tubes",
    type: "sale",
    category: "Structural",
    image: "🎋",
    description: "High-quality steel tubes in various diameters and lengths",
    features: [
      "Galvanized Finish",
      "Multiple Sizes",
      "High Strength",
      "Long Life",
    ],
    status: "available",
  },
  {
    id: 8,
    name: "Formwork Systems",
    type: "rental",
    category: "Formwork",
    image: "🧱",
    description: "Advanced formwork systems for concrete construction projects",
    features: [
      "Reusable",
      "Quick Strike",
      "High Load Capacity",
      "Precise Finish",
    ],
    status: "coming-soon",
  },
];

export default function Materials() {
  const [activeFilter, setActiveFilter] = useState<"all" | "rental" | "sale">(
    "all"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showCallOptions, setShowCallOptions] = useState(false);

  const categories = [
    "all",
    ...Array.from(new Set(materials.map((item) => item.category))),
  ];

  const filteredMaterials = materials.filter((item) => {
    const typeMatch = activeFilter === "all" || item.type === activeFilter;
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "limited":
        return "bg-yellow-500";
      case "coming-soon":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "In Stock";
      case "limited":
        return "Limited Stock";
      case "coming-soon":
        return "Coming Soon";
      default:
        return status;
    }
  };

  const handleCallClick = () => {
    setShowCallOptions(true);
  };

  // Close dropdown when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowCallOptions(false);
    }
  };

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
              onClick={() => setActiveFilter("rental")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === "rental"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              For Rent
            </button>
            <button
              onClick={() => setActiveFilter("sale")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === "sale"
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
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {material.image}
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
                    material.type === "rental" ? "bg-blue-500" : "bg-green-500"
                  } text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {material.type === "rental" ? "FOR RENT" : "FOR SALE"}
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

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {material.features.slice(0, 3).map((feature, index) => (
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
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 text-sm">
                    {material.type === "rental"
                      ? "Request Rental"
                      : "Get Quote"}
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm">
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
              Can't Find What You Need?
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
    </section>
  );
}
