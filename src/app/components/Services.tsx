import Image from 'next/image'

interface Service {
  title: string
  description: string
  image: string
  features: string[]
}

const services: Service[] = [
  {
    title: "Access Scaffolding",
    description: "Kwikstage type scaffolding systems for safe and efficient access",
    image: "/images/services/access-scaffolding.jpeg",
    features: ["Kwikstage Systems", "Full Boarding", "Safety Compliant", "Quick Installation"]
  },
  {
    title: "Formwork Solutions",
    description: "Professional formwork for concrete structures and construction",
    image: "/images/services/formwork.jpeg",
    features: ["Custom Formwork", "Concrete Support", "Structural Integrity", "Precision Engineering"]
  },
  {
    title: "Equipment Rental",
    description: "High-quality scaffolding equipment rental with full support",
    image: "/images/services/rental.jpeg",
    features: ["Quality Equipment", "Maintenance Included", "Flexible Rental", "Delivery Service"]
  },
  {
    title: "Civil Engineering",
    description: "Complete building and civil engineering solutions",
    image: "/images/services/civil-enginering.png",
    features: ["Project Management", "Structural Design", "Quality Assurance", "Timely Delivery"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive scaffolding and construction solutions tailored to your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="size-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}