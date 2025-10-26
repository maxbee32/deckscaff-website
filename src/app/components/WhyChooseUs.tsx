interface Feature {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: "Safety First Approach",
    description: "Rigorous safety protocols and certified equipment ensuring zero accidents on site",
    icon: "🛡️"
  },
  {
    title: "Rapid Deployment",
    description: "Quick setup and dismantling with our experienced teams and efficient systems",
    icon: "⚡"
  },
  {
    title: "Quality Materials",
    description: "Premium scaffolding equipment that meets international quality standards",
    icon: "⭐"
  },
  {
    title: "Expert Team",
    description: "Certified professionals with decades of combined experience in scaffolding",
    icon: "👷"
  },
  {
    title: "Nationwide Coverage",
    description: "Serving projects across Ghana with reliable logistics and support",
    icon: "🗺️"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and emergency services for all clients",
    icon: "📞"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Deckscaff?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out in the industry with our commitment to excellence, safety, and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Deckscaff for their scaffolding needs. Get a free consultation and quote today.
            </p>
            <a href="#contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 inline-block">
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}