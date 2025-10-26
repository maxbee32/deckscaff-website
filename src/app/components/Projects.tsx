'use client'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  location: string
  duration: string
  client: string
  services: string[]
  icon: string
  color: string
}

const projects: Project[] = [
  {
    title: "Global Citizens Project",
    description: "Scaffolding and engineering services for commercial development",
    location: "Accra",
    duration: "5 Months",
    client: "Domstruct Engineering Services",
    services: ["Scaffolding", "Engineering Services"],
    icon: "",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "RNAQ Independence Square",
    description: "Entertainment venue scaffolding and structural works",
    location: "Accra",
    duration: "3 Months",
    client: "Lynks Entertainment",
    services: ["Access Scaffolding", "Event Structures"],
    icon: "",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Bank of Ghana Vault Room",
    description: "Formwork support for 1m thick slab vault room at Bank of Ghana Head Office",
    location: "Accra Central",
    duration: "4 Months",
    client: "China State Hualong",
    services: ["Heavy Formwork", "Engineering Support"],
    icon: "",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Ashiaman Overpass Bridge",
    description: "Special formwork for beam repair on Ashiaman Overpass bridge",
    location: "Tema-Accra",
    duration: "3 Months",
    client: "Ghana Highways Authority",
    services: ["Bridge Formwork", "Structural Repair"],
    icon: "",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Atonsu Bridge Construction",
    description: "Bridge beam formwork for Atonsu bridge project",
    location: "Kumasi, Ashanti Region",
    duration: "5 Months",
    client: "Chicos",
    services: ["Bridge Formwork", "Civil Engineering"],
    icon: "",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Ahafo South Tunnel Slab",
    description: "1.8m thick slab with cast in chute for stockpile tunnel",
    location: "Ahafo South",
    duration: "6 Months",
    client: "WBHO Civils",
    services: ["Specialized Formwork", "Concrete Engineering"],
    icon: "",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Nestle Rebranding Project",
    description: "Access scaffolding for Nestle Ghana limited rebranding works",
    location: "Tema",
    duration: "2 Months",
    client: "White Beam Concepts",
    services: ["Access Scaffolding", "Safety Systems"],
    icon: "",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Kwabenya Road Project",
    description: "Jersey barrier formwork for road construction project",
    location: "Aburi, Ketease - Kwabenya",
    duration: "4 Months",
    client: "First Sky Limited",
    services: ["Road Formwork", "Civil Works"],
    icon: "",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Water Tank & Housing Project",
    description: "Design drawings and engineering for water tank and housing relocation",
    location: "Ahafo North",
    duration: "7 Months",
    client: "Opoopo Enterprise/International",
    services: ["Design Drawings", "Engineering Approval"],
    icon: "",
    color: "from-teal-500 to-teal-600"
  },
  {
    title: "Aboadze Thermal Plant",
    description: "Design and engineering for thermal plant project",
    location: "Aboadze Takoradi",
    duration: "8 Months",
    client: "Jenspak Limited",
    services: ["Design Drawings", "Engineering Approval"],
    icon: "",
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Ahafo North Pipe Racks",
    description: "Suspended scaffolding design for pipe racks",
    location: "Ahafo North",
    duration: "3 Months",
    client: "Jodi Construction / Lycopodium",
    services: ["Suspended Scaffolding", "Design Engineering"],
    icon: "",
    color: "from-cyan-500 to-cyan-600"
  }
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  // Show only first 6 projects initially, then all when toggled
  const displayedProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise in complex scaffolding and formwork projects across Ghana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2"
            >
              {/* Project Icon with Gradient Background */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                {/* Client Badge */}
                <div className="absolute top-4 left-4 bg-black/30 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  {project.client.split(' ')[0]}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="size-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="size-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {project.duration}
                  </div>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full border border-gray-600"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 inline-flex items-center"
          >
            {showAll ? (
              <>
                <svg className="size-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
                Show Less Projects
              </>
            ) : (
              <>
                <svg className="size-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                View All Client Projects ({projects.length})
              </>
            )}
          </button>
          
          {/* Optional: Show project count */}
          {!showAll && (
            <p className="text-gray-400 mt-4 text-sm">
              Showing {displayedProjects.length} of {projects.length} projects
            </p>
          )}
        </div>
      </div>
    </section>
  )
}