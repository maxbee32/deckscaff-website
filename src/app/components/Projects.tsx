// 'use client'
// import { useState } from 'react'

// interface Project {
//   title: string
//   description: string
//   location: string
//   duration: string
//   client: string
//   services: string[]
//   icon: string
//   color: string
// }

// const projects: Project[] = [
//   {
//     title: "Global Citizens Project",
//     description: "Scaffolding and engineering services for commercial development",
//     location: "Accra",
//     duration: "5 Months",
//     client: "Domstruct Engineering Services",
//     services: ["Scaffolding", "Engineering Services"],
//     icon: "",
//     color: "from-blue-500 to-blue-600"
//   },
//   {
//     title: "RNAQ Independence Square",
//     description: "Entertainment venue scaffolding and structural works",
//     location: "Accra",
//     duration: "3 Months",
//     client: "Lynks Entertainment",
//     services: ["Access Scaffolding", "Event Structures"],
//     icon: "",
//     color: "from-purple-500 to-purple-600"
//   },
//   {
//     title: "Bank of Ghana Vault Room",
//     description: "Formwork support for 1m thick slab vault room at Bank of Ghana Head Office",
//     location: "Accra Central",
//     duration: "4 Months",
//     client: "China State Hualong",
//     services: ["Heavy Formwork", "Engineering Support"],
//     icon: "",
//     color: "from-green-500 to-green-600"
//   },
//   {
//     title: "Ashiaman Overpass Bridge",
//     description: "Special formwork for beam repair on Ashiaman Overpass bridge",
//     location: "Tema-Accra",
//     duration: "3 Months",
//     client: "Ghana Highways Authority",
//     services: ["Bridge Formwork", "Structural Repair"],
//     icon: "",
//     color: "from-orange-500 to-orange-600"
//   },
//   {
//     title: "Atonsu Bridge Construction",
//     description: "Bridge beam formwork for Atonsu bridge project",
//     location: "Kumasi, Ashanti Region",
//     duration: "5 Months",
//     client: "Chicos",
//     services: ["Bridge Formwork", "Civil Engineering"],
//     icon: "",
//     color: "from-red-500 to-red-600"
//   },
//   {
//     title: "Ahafo South Tunnel Slab",
//     description: "1.8m thick slab with cast in chute for stockpile tunnel",
//     location: "Ahafo South",
//     duration: "6 Months",
//     client: "WBHO Civils",
//     services: ["Specialized Formwork", "Concrete Engineering"],
//     icon: "",
//     color: "from-yellow-500 to-yellow-600"
//   },
//   {
//     title: "Nestle Rebranding Project",
//     description: "Access scaffolding for Nestle Ghana limited rebranding works",
//     location: "Tema",
//     duration: "2 Months",
//     client: "White Beam Concepts",
//     services: ["Access Scaffolding", "Safety Systems"],
//     icon: "",
//     color: "from-indigo-500 to-indigo-600"
//   },
//   {
//     title: "Kwabenya Road Project",
//     description: "Jersey barrier formwork for road construction project",
//     location: "Aburi, Ketease - Kwabenya",
//     duration: "4 Months",
//     client: "First Sky Limited",
//     services: ["Road Formwork", "Civil Works"],
//     icon: "",
//     color: "from-pink-500 to-pink-600"
//   },
//   {
//     title: "Water Tank & Housing Project",
//     description: "Design drawings and engineering for water tank and housing relocation",
//     location: "Ahafo North",
//     duration: "7 Months",
//     client: "Opoopo Enterprise/International",
//     services: ["Design Drawings", "Engineering Approval"],
//     icon: "",
//     color: "from-teal-500 to-teal-600"
//   },
//   {
//     title: "Aboadze Thermal Plant",
//     description: "Design and engineering for thermal plant project",
//     location: "Aboadze Takoradi",
//     duration: "8 Months",
//     client: "Jenspak Limited",
//     services: ["Design Drawings", "Engineering Approval"],
//     icon: "",
//     color: "from-amber-500 to-amber-600"
//   },
//   {
//     title: "Ahafo North Pipe Racks",
//     description: "Suspended scaffolding design for pipe racks",
//     location: "Ahafo North",
//     duration: "3 Months",
//     client: "Jodi Construction / Lycopodium",
//     services: ["Suspended Scaffolding", "Design Engineering"],
//     icon: "",
//     color: "from-cyan-500 to-cyan-600"
//   }
// ]

// export default function Projects() {
//   const [showAll, setShowAll] = useState(false)
  
//   // Show only first 6 projects initially, then all when toggled
//   const displayedProjects = showAll ? projects : projects.slice(0, 6)

//   return (
//     <section id="projects" className="py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Showcasing our expertise in complex scaffolding and formwork projects across Ghana
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {displayedProjects.map((project, index) => (
//             <div 
//               key={index} 
//               className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2"
//             >
//               {/* Project Icon with Gradient Background */}
//               <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
//                 <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
//                   {project.icon}
//                 </div>
//                 {/* Client Badge */}
//                 <div className="absolute top-4 left-4 bg-black/30 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
//                   {project.client.split(' ')[0]}
//                 </div>
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 mb-4 text-sm leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Project Details */}
//                 <div className="space-y-3 mb-4">
//                   <div className="flex items-center text-sm text-gray-400">
//                     <svg className="size-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                     </svg>
//                     {project.location}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-400">
//                     <svg className="size-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                     {project.duration}
//                   </div>
//                 </div>

//                 {/* Services Tags */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.services.map((service, serviceIndex) => (
//                     <span 
//                       key={serviceIndex}
//                       className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full border border-gray-600"
//                     >
//                       {service}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show More/Less Button */}
//         <div className="text-center mt-12">
//           <button 
//             onClick={() => setShowAll(!showAll)}
//             className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 inline-flex items-center"
//           >
//             {showAll ? (
//               <>
//                 <svg className="size-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
//                 </svg>
//                 Show Less Projects
//               </>
//             ) : (
//               <>
//                 <svg className="size-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//                 View All Client Projects ({projects.length})
//               </>
//             )}
//           </button>
          
//           {/* Optional: Show project count */}
//           {!showAll && (
//             <p className="text-gray-400 mt-4 text-sm">
//               Showing {displayedProjects.length} of {projects.length} projects
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";
import { useState, useEffect } from 'react'

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  services: string[];
  color: string;
  images: { id: string; url: string }[];
  status?: string;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  updatedAt?: string;
  scopeOfWork?: string;
  challenges?: string[];
  solutions?: string[];
  materialsUsed?: string[];
  teamSize?: number;
}

// Default colors for projects
const availableColors = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-green-500 to-green-600",
  "from-orange-500 to-orange-600",
  "from-red-500 to-red-600",
  "from-yellow-500 to-yellow-600",
  "from-indigo-500 to-indigo-600",
  "from-pink-500 to-pink-600",
  "from-teal-500 to-teal-600",
  "from-amber-500 to-amber-600",
  "from-cyan-500 to-cyan-600"
];

// Default project images from Unsplash (scaffolding/construction themed)
const defaultProjectImages = [
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Scaffolding
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Construction
  "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Building
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Industrial
  "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Architecture
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Engineering
];

// Helper function to get image URL
const getProjectImageUrl = (imagePath: string | null | undefined, apiBaseUrl: string, index: number): string => {
  if (!imagePath || imagePath.trim() === "" || imagePath === "null" || imagePath === "undefined") {
    // Use a default image from Unsplash with rotation
    return defaultProjectImages[index % defaultProjectImages.length];
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
  // Otherwise, assume it's in /images/projects/
  else {
    finalPath = `${apiBaseUrl}/images/projects/${imagePath}`;
  }
  
  return encodeURI(finalPath);
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery'>('overview');
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://deckstaff-website-be.onrender.com";

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // Fetch projects from endpoint
        const response = await fetch(`${API_BASE_URL}/api/auth/all-project`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Map backend data to frontend Project interface
        const projectsData = Array.isArray(data)
          ? data.map((project: any, index: number) => {
              // Process images - only use images from the API
              const images = Array.isArray(project.images) 
                ? project.images.map((imgUrl: string, imgIndex: number) => ({
                    id: `img-${project.id || index}-${imgIndex}`,
                    url: getProjectImageUrl(imgUrl, API_BASE_URL, index),
                  }))
                : project.image 
                ? [{
                    id: `img-${project.id || index}-0`,
                    url: getProjectImageUrl(project.image, API_BASE_URL, index),
                  }]
                : [];
              
              // Process services
              let services: string[] = [];
              if (Array.isArray(project.services)) {
                services = project.services;
              } else if (project.services && typeof project.services === 'string') {
                try {
                  services = JSON.parse(project.services);
                } catch {
                  services = project.services.split(',').map((s: string) => s.trim());
                }
              }
              
              // Process additional fields
              let scopeOfWork = "";
              if (project.scopeOfWork || project.projectScope) {
                scopeOfWork = project.scopeOfWork || project.projectScope;
              }
              
              let challenges: string[] = [];
              if (Array.isArray(project.challenges)) {
                challenges = project.challenges;
              } else if (project.challenges && typeof project.challenges === 'string') {
                try {
                  challenges = JSON.parse(project.challenges);
                } catch {
                  challenges = project.challenges.split(',').map((c: string) => c.trim());
                }
              }
              
              let solutions: string[] = [];
              if (Array.isArray(project.solutions)) {
                solutions = project.solutions;
              } else if (project.solutions && typeof project.solutions === 'string') {
                try {
                  solutions = JSON.parse(project.solutions);
                } catch {
                  solutions = project.solutions.split(',').map((s: string) => s.trim());
                }
              }
              
              let materialsUsed: string[] = [];
              if (Array.isArray(project.materialsUsed)) {
                materialsUsed = project.materialsUsed;
              } else if (project.materialsUsed && typeof project.materialsUsed === 'string') {
                try {
                  materialsUsed = JSON.parse(project.materialsUsed);
                } catch {
                  materialsUsed = project.materialsUsed.split(',').map((m: string) => m.trim());
                }
              }
              
              return {
                id: project.id?.toString() || `project-${index}`,
                title: project.title || "Untitled Project",
                description: project.description || "No description available",
                location: project.location || "Location not specified",
                duration: project.duration || "Duration not specified",
                services: services,
                color: availableColors[index % availableColors.length],
                images: images,
                status: project.status || "COMPLETED",
                startDate: project.startDate,
                endDate: project.endDate,
                createdAt: project.createdAt,
                updatedAt: project.updatedAt,
                scopeOfWork: scopeOfWork,
                challenges: challenges,
                solutions: solutions,
                materialsUsed: materialsUsed,
                teamSize: project.teamSize || 0,
              };
            })
          : [];

        setProjects(projectsData);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching projects:", err);
        setError(`Failed to load projects. Please try again later.`);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [API_BASE_URL]);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    setActiveTab('overview');
    setShowDetailsModal(true);
  };

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    setActiveTab('gallery');
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
    setActiveTab('overview');
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not specified";
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

  // Get status color
  const getStatusColor = (status?: string) => {
    switch (status?.toUpperCase()) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800';
      case 'UPCOMING':
        return 'bg-yellow-100 text-yellow-800';
      case 'ON_HOLD':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get status text
  const getStatusText = (status?: string) => {
    switch (status?.toUpperCase()) {
      case 'COMPLETED':
        return 'Completed';
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'UPCOMING':
        return 'Upcoming';
      case 'ON_HOLD':
        return 'On Hold';
      default:
        return status || 'Not specified';
    }
  };

  // Show only first 6 projects initially, then all when toggled
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  // Loading state
  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
            <p className="text-gray-300 mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise in complex scaffolding and formwork projects across Ghana
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No projects found.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Refresh
            </button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 h-full flex flex-col"
                >
                  {/* Project Image with Gradient Overlay */}
                  <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                    {project.images.length > 0 ? (
                      <>
                        <img 
                          src={project.images[0].url} 
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            // If image fails to load, use a default from Unsplash
                            e.currentTarget.src = defaultProjectImages[index % defaultProjectImages.length];
                          }}
                          loading="lazy"
                        />
                        {/* Image count badge */}
                        {project.images.length > 1 && (
                          <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                            +{project.images.length - 1} more
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={defaultProjectImages[index % defaultProjectImages.length]}
                          alt="Default project image"
                          className="w-full h-full object-cover opacity-80"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    {project.status && (
                      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        {getStatusText(project.status)}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <svg className="size-4 mr-2 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg className="size-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{project.duration}</span>
                      </div>
                      {project.teamSize && project.teamSize > 0 && (
                        <div className="flex items-center text-sm text-gray-400">
                          <svg className="size-4 mr-2 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0h.01"></path>
                          </svg>
                          <span>{project.teamSize} team members</span>
                        </div>
                      )}
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.slice(0, 3).map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full border border-gray-600 truncate max-w-[120px]"
                          title={service}
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="px-2 py-1 bg-gray-900 text-gray-400 text-xs font-medium rounded-full border border-gray-700">
                          +{project.services.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button 
                        onClick={() => openProjectDetails(project)}
                        className="flex-1 text-center bg-orange-500 text-white hover:bg-orange-600 font-medium text-sm transition-colors duration-300 py-2.5 rounded-lg"
                      >
                        View Details
                      </button>
                      {project.images.length > 0 && (
                        <button 
                          onClick={() => openGallery(project)}
                          className="px-4 text-center bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white font-medium text-sm transition-colors duration-300 py-2.5 rounded-lg"
                          title="View Gallery"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {projects.length > 6 && (
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
                      View All Projects ({projects.length})
                    </>
                  )}
                </button>
                
                {!showAll && (
                  <p className="text-gray-400 mt-4 text-sm">
                    Showing {displayedProjects.length} of {projects.length} projects
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Details Modal */}
      {showDetailsModal && selectedProject && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90" onClick={closeDetailsModal}>
          <div className="relative max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeDetailsModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-orange-400 transition-colors bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-gray-800 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-700">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-4 text-center font-medium transition-colors ${
                      activeTab === 'overview'
                        ? 'text-orange-400 border-b-2 border-orange-400'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    Project Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`flex-1 py-4 text-center font-medium transition-colors ${
                      activeTab === 'gallery'
                        ? 'text-orange-400 border-b-2 border-orange-400'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    Project Gallery ({selectedProject.images.length})
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' ? (
                  <div className="space-y-6">
                    {/* Project Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Status</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedProject.status)}`}>
                          {getStatusText(selectedProject.status)}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-semibold text-white">{selectedProject.location}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="font-semibold text-white">{selectedProject.duration}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Team Size</p>
                        <p className="font-semibold text-white">{selectedProject.teamSize || 'Not specified'}</p>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Start Date</p>
                        <p className="font-semibold text-white">{formatDate(selectedProject.startDate)}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">End Date</p>
                        <p className="font-semibold text-white">{formatDate(selectedProject.endDate)}</p>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-3">
                      <p className="text-lg font-semibold text-white">Services Provided</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.services.map((service, index) => (
                          <span 
                            key={index}
                            className="px-3 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-lg"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scope of Work */}
                    {selectedProject.scopeOfWork && (
                      <div className="space-y-3">
                        <p className="text-lg font-semibold text-white">Scope of Work</p>
                        <p className="text-gray-300 whitespace-pre-line">{selectedProject.scopeOfWork}</p>
                      </div>
                    )}

                    {/* Materials Used */}
                    {selectedProject.materialsUsed && selectedProject.materialsUsed.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-lg font-semibold text-white">Materials Used</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedProject.materialsUsed.map((material, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <svg className="w-5 h-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {material}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Challenges and Solutions */}
                    {(selectedProject.challenges && selectedProject.challenges.length > 0) || 
                     (selectedProject.solutions && selectedProject.solutions.length > 0) ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                          <div className="space-y-3">
                            <p className="text-lg font-semibold text-white">Key Challenges</p>
                            <ul className="space-y-2">
                              {selectedProject.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start text-gray-300">
                                  <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.5 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                  </svg>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {selectedProject.solutions && selectedProject.solutions.length > 0 && (
                          <div className="space-y-3">
                            <p className="text-lg font-semibold text-white">Our Solutions</p>
                            <ul className="space-y-2">
                              {selectedProject.solutions.map((solution, index) => (
                                <li key={index} className="flex items-start text-gray-300">
                                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : null}

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href="#contact"
                        onClick={closeDetailsModal}
                        className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                      >
                        Request Similar Project
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Gallery Tab */
                  <div className="space-y-6">
                    {/* Main image */}
                    {selectedProject.images.length > 0 ? (
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <img
                          src={selectedProject.images[selectedImageIndex].url}
                          alt={`${selectedProject.title} - Image ${selectedImageIndex + 1}`}
                          className="w-full h-[400px] object-contain bg-black"
                          onError={(e) => {
                            e.currentTarget.src = defaultProjectImages[0];
                          }}
                        />
                        
                        {/* Navigation arrows */}
                        {selectedProject.images.length > 1 && (
                          <div className="flex justify-between p-4 bg-gray-800">
                            <button
                              onClick={prevImage}
                              className="text-white hover:text-orange-400 transition-colors bg-gray-700 hover:bg-gray-600 rounded-full p-2"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <div className="text-gray-300 text-sm">
                              Image {selectedImageIndex + 1} of {selectedProject.images.length}
                            </div>
                            <button
                              onClick={nextImage}
                              className="text-white hover:text-orange-400 transition-colors bg-gray-700 hover:bg-gray-600 rounded-full p-2"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-gray-900 rounded-lg">
                        <p className="text-gray-400">No images available for this project</p>
                      </div>
                    )}
                    
                    {/* Thumbnail gallery */}
                    {selectedProject.images.length > 1 && (
                      <div>
                        <p className="text-gray-400 mb-2">All Images</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                          {selectedProject.images.map((image, index) => (
                            <button
                              key={image.id}
                              onClick={() => setSelectedImageIndex(index)}
                              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                selectedImageIndex === index 
                                  ? 'border-orange-500 scale-105' 
                                  : 'border-gray-700 hover:border-gray-500'
                              }`}
                            >
                              <img
                                src={image.url}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = defaultProjectImages[index % defaultProjectImages.length];
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}