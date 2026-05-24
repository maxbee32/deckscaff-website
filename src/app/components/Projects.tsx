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
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

// Helper function to get image URL
const getProjectImageUrl = (imagePath: string | null | undefined, apiBaseUrl: string, index: number): string => {
  if (!imagePath || imagePath.trim() === "" || imagePath === "null" || imagePath === "undefined") {
    return defaultProjectImages[index % defaultProjectImages.length];
  }
  
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  let finalPath = imagePath;
  
  if (imagePath.startsWith('/uploads/') || imagePath.startsWith('/images/') || imagePath.startsWith('/')) {
    finalPath = `${apiBaseUrl}${imagePath}`;
  } else {
    finalPath = `${apiBaseUrl}/images/projects/${imagePath}`;
  }
  
  return encodeURI(finalPath);
};

interface ApiProject {
  id?: number | string;
  title?: string;
  description?: string;
  location?: string;
  duration?: string;
  services?: string[] | string;
  image?: string;
  images?: string[];
  status?: string;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  updatedAt?: string;
  scopeOfWork?: string;
  projectScope?: string;
  challenges?: string[] | string;
  solutions?: string[] | string;
  materialsUsed?: string[] | string;
  teamSize?: number;
}

// Loading Skeleton Component
function ProjectSkeleton() {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-700" />
      <div className="p-6">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-3" />
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-5/6" />
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-700 rounded" />
            <div className="h-3 bg-gray-700 rounded w-24" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-700 rounded" />
            <div className="h-3 bg-gray-700 rounded w-28" />
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-700 rounded-full w-16" />
          <div className="h-6 bg-gray-700 rounded-full w-20" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-gray-700 rounded-lg flex-1" />
          <div className="w-10 h-10 bg-gray-700 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// Empty State Component
function EmptyProjectsState() {
  return (
    <div className="text-center py-16 px-4 max-w-2xl mx-auto">
      {/* Animated SVG Illustration */}
      <div className="relative mb-8">
        <svg
          className="w-48 h-48 mx-auto"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="100" cy="100" r="90" fill="#1f2937" />
          
          {/* Construction crane */}
          <rect x="60" y="80" width="8" height="60" rx="4" fill="#FF6B35" className="animate-bounce" style={{ animationDuration: '2s' }} />
          <rect x="40" y="80" width="48" height="8" rx="4" fill="#FF6B35" />
          <line x1="64" y1="80" x2="52" y2="60" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
          
          {/* Building under construction */}
          <rect x="100" y="100" width="50" height="40" rx="4" fill="#4B5563" />
          <rect x="110" y="90" width="30" height="10" rx="2" fill="#6B7280" />
          <rect x="115" y="85" width="20" height="5" rx="2" fill="#9CA3AF" />
          
          {/* Scaffolding */}
          <rect x="95" y="95" width="4" height="50" rx="2" fill="#D4AF37" />
          <rect x="150" y="95" width="4" height="50" rx="2" fill="#D4AF37" />
          <rect x="95" y="105" width="59" height="4" rx="2" fill="#D4AF37" />
          <rect x="95" y="125" width="59" height="4" rx="2" fill="#D4AF37" />
          
          {/* Stars / sparkles */}
          <circle cx="45" cy="55" r="3" fill="#FF8C42" className="animate-pulse" />
          <circle cx="160" cy="70" r="2" fill="#FF8C42" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="175" cy="130" r="2.5" fill="#FF8C42" className="animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Clipboard / document */}
          <rect x="35" y="130" width="25" height="30" rx="3" fill="#D4AF37" />
          <line x1="40" y1="138" x2="55" y2="138" stroke="#FF6B35" strokeWidth="1.5" />
          <line x1="40" y1="144" x2="55" y2="144" stroke="#FF6B35" strokeWidth="1.5" />
          <line x1="40" y1="150" x2="50" y2="150" stroke="#FF6B35" strokeWidth="1.5" />
        </svg>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Project Gallery Coming Soon
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        We're currently compiling our portfolio of completed projects. 
        Check back soon to see our impressive work across Ghana.
      </p>

      {/* Info Cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h4 className="font-semibold text-white mb-1">100+ Projects Completed</h4>
          <p className="text-xs text-gray-400">Across residential, commercial, and industrial sectors</p>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="font-semibold text-white mb-1">Certified Quality</h4>
          <p className="text-xs text-gray-400">All projects meet international safety standards</p>
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
          Request Project Portfolio
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500/10 transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Discuss Your Project
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        Need immediate assistance? Call us: +233 (0) 30 123 4567
      </p>
    </div>
  );
}

// Error State Component
function ErrorState({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="text-center py-16 px-4 max-w-md mx-auto">
      <div className="mb-6">
        <svg className="w-24 h-24 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Unable to Load Projects</h3>
      <p className="text-gray-400 mb-6">{error}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onRetry}
          className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition-all"
        >
          Try Again
        </button>
        <a
          href="#contact"
          className="border-2 border-gray-600 text-gray-300 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-all"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}

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
        
        const response = await fetch(`${API_BASE_URL}/api/auth/all-project`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        
        const data = await response.json();
        
        const projectsData = Array.isArray(data)
          ? data.map((project: ApiProject, index: number) => {
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
              
              let scopeOfWork = "";
              if (project.scopeOfWork || project.projectScope) {
                scopeOfWork = project.scopeOfWork || project.projectScope || "";
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
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
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

  const getStatusColor = (status?: string) => {
    switch (status?.toUpperCase()) {
      case 'COMPLETED': return 'bg-green-100 text-green-800';
      case 'IN_PROGRESS': return 'bg-blue-100 text-blue-800';
      case 'UPCOMING': return 'bg-yellow-100 text-yellow-800';
      case 'ON_HOLD': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status?.toUpperCase()) {
      case 'COMPLETED': return 'Completed';
      case 'IN_PROGRESS': return 'In Progress';
      case 'UPCOMING': return 'Upcoming';
      case 'ON_HOLD': return 'On Hold';
      default: return status || 'Not specified';
    }
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  // Loading state
  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our expertise in complex scaffolding and formwork projects across Ghana
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProjectSkeleton key={i} />
            ))}
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
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our expertise in complex scaffolding and formwork projects across Ghana
            </p>
          </div>
          <ErrorState error={error} onRetry={() => window.location.reload()} />
        </div>
      </section>
    );
  }

  // Empty state
  if (projects.length === 0 && !loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our expertise in complex scaffolding and formwork projects across Ghana
            </p>
          </div>
          <EmptyProjectsState />
        </div>
      </section>
    );
  }

  // Main render with projects
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise in complex scaffolding and formwork projects across Ghana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:transform hover:-translate-y-2 h-full flex flex-col"
            >
              {/* Project Image with Gradient Overlay */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                {project.images.length > 0 ? (
                  <>
                    <img 
                      src={project.images[0].url} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = defaultProjectImages[index % defaultProjectImages.length];
                      }}
                      loading="lazy"
                    />
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
                
                {project.status && (
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {getStatusText(project.status)}
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{project.duration}</span>
                  </div>
                  {project.teamSize && project.teamSize > 0 && (
                    <div className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0h.01"></path>
                      </svg>
                      <span>{project.teamSize} team members</span>
                    </div>
                  )}
                </div>

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

                <div className="flex gap-2 mt-auto">
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className="flex-1 text-center bg-orange-500 text-white hover:bg-orange-600 font-medium text-sm transition-all duration-300 py-2.5 rounded-lg"
                  >
                    View Details
                  </button>
                  {project.images.length > 0 && (
                    <button 
                      onClick={() => openGallery(project)}
                      className="px-4 text-center bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white font-medium text-sm transition-all duration-300 py-2.5 rounded-lg"
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

        {projects.length > 6 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                  </svg>
                  Show Less Projects
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </div>

      {/* Project Details Modal - Keep as is from your original */}
      {showDetailsModal && selectedProject && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90" onClick={closeDetailsModal}>
          <div className="relative max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeDetailsModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-orange-400 transition-colors bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

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
                    Gallery ({selectedProject.images.length})
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'overview' ? (
                  <div className="space-y-6">
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

                    <div className="space-y-3">
                      <p className="text-lg font-semibold text-white">Services Provided</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.services.map((service, idx) => (
                          <span key={idx} className="px-3 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-lg">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.scopeOfWork && (
                      <div className="space-y-3">
                        <p className="text-lg font-semibold text-white">Scope of Work</p>
                        <p className="text-gray-300 whitespace-pre-line">{selectedProject.scopeOfWork}</p>
                      </div>
                    )}

                    {selectedProject.materialsUsed && selectedProject.materialsUsed.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-lg font-semibold text-white">Materials Used</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedProject.materialsUsed.map((material, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <svg className="w-5 h-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {material}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(selectedProject.challenges?.length > 0 || selectedProject.solutions?.length > 0) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                          <div className="space-y-3">
                            <p className="text-lg font-semibold text-white">Key Challenges</p>
                            <ul className="space-y-2">
                              {selectedProject.challenges.map((challenge, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                  <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-1.998-1.333-2.732 0L4.5 16.5c-.77.833.192 2.5 1.732 2.5z" />
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
                              {selectedProject.solutions.map((solution, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
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
                    )}

                    <div className="pt-4">
                      <a href="#contact" onClick={closeDetailsModal} className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                        Request Similar Project
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
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
                        
                        {selectedProject.images.length > 1 && (
                          <div className="flex justify-between p-4 bg-gray-800">
                            <button onClick={prevImage} className="text-white hover:text-orange-400 transition-colors bg-gray-700 hover:bg-gray-600 rounded-full p-2">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <div className="text-gray-300 text-sm">
                              {selectedImageIndex + 1} of {selectedProject.images.length}
                            </div>
                            <button onClick={nextImage} className="text-white hover:text-orange-400 transition-colors bg-gray-700 hover:bg-gray-600 rounded-full p-2">
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
                    
                    {selectedProject.images.length > 1 && (
                      <div>
                        <p className="text-gray-400 mb-2">All Images</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                          {selectedProject.images.map((image, idx) => (
                            <button
                              key={image.id}
                              onClick={() => setSelectedImageIndex(idx)}
                              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                selectedImageIndex === idx ? 'border-orange-500 scale-105' : 'border-gray-700 hover:border-gray-500'
                              }`}
                            >
                              <img src={image.url} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
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