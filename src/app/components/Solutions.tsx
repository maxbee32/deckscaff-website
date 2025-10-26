// components/Solutions.tsx
const solutions = [
  {
    category: 'Aluminum Scaffolding Systems',
    description: 'Lightweight, corrosion-resistant solutions perfect for maintenance and construction projects.',
    systems: [
      'Mobile Access Towers',
      'Stairway Systems',
      'Narrow Frame Scaffolds',
      'Maintenance Platforms'
    ],
    benefits: ['Lightweight', 'Corrosion Resistant', 'Easy Assembly', 'Versatile Applications'],
    color: 'from-blue-50 to-blue-100'
  },
  {
    category: 'Steel Scaffolding Systems',
    description: 'Heavy-duty steel solutions for large-scale construction and industrial applications.',
    systems: [
      'Cuplock Systems',
      'H-Frame Scaffolding',
      'Tube & Fitting',
      'Heavy-Duty Shoring'
    ],
    benefits: ['High Strength', 'Durable', 'Cost-Effective', 'Stable Structure'],
    color: 'from-gray-50 to-gray-100'
  },
  {
    category: 'Specialized Equipment',
    description: 'Custom solutions and accessories for specific project requirements.',
    systems: [
      'Adjustable Props & Jacks',
      'Centering Sheets',
      'Safety Accessories',
      'Mobile Access Towers'
    ],
    benefits: ['Specialized', 'Safety Focused', 'Efficient', 'Customizable'],
    color: 'from-amber-50 to-amber-100'
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced Scaffolding Solutions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            State-of-the-art scaffolding systems engineered for safety, efficiency, and reliability in any environment.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="professional-card p-8">
              <div className={`bg-gradient-to-br ${solution.color} rounded-xl p-6 mb-6`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.category}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Available Systems</h4>
                  <ul className="space-y-2">
                    {solution.systems.map((system, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {system}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.benefits.map((benefit, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Highlight */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Engineering Excellence
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            All our scaffolding systems meet international safety standards and are certified for maximum reliability and performance.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-amber-400">ISO 9001</div>
              <div className="text-blue-200">Quality Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">OSHA</div>
              <div className="text-blue-200">Safety Compliant</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">EN 12811</div>
              <div className="text-blue-200">European Standards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-blue-200">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}