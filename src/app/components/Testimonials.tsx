interface Testimonial {
  name: string;
  company: string;
  project: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rhythmz Africa",
    company: "Event Management Company",
    project: "Major Event Productions",
    content:
      "Deckscaff Ghana Ltd provided exceptional scaffolding services for our large-scale events. Their team was incredibly professional, punctual, and delivered exactly what we needed on time. The quality of their equipment and their attention to safety standards gave us complete confidence throughout our event productions.",
    rating: 5,
  },
  {
    name: "First Sky Construction",
    company: "Infrastructure Development",
    project: "Aburi - Ketease Road to Kwabenya",
    content:
      "Working with Deckscaff on the Aburi-Ketease Road project has been outstanding. Their scaffolding solutions have been crucial for our bridge and road construction work. Their team's expertise in providing safe, reliable access solutions has significantly contributed to keeping our project on schedule and maintaining the highest safety standards.",
    rating: 5,
  },
  {
    name: "Ronbrak Construction",
    company: "Real Estate Development",
    project: "Residential Apartments - Cantonments",
    content:
      "Deckscaff has been our trusted scaffolding partner for our luxury residential apartments in Cantonments. Their professionalism, reliable equipment, and consistent on-time delivery have been invaluable. The quality of their formwork systems and scaffolding solutions has directly contributed to the superior finish of our high-end residential projects.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="size-5 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-orange-400 text-sm">
                  {testimonial.company}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Trusted by Industry Leaders</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Timely Project Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="size-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-sm">Quality Equipment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}