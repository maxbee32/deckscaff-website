interface Testimonial {
  name: string;
  company: string;
  project: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Kwame Asante",
    company: "Asante Construction Ltd",
    project: "Commercial Tower Project",
    content:
      "Deckscaff delivered exceptional scaffolding services for our 15-story project. Their attention to safety and timely execution was impressive.",
    rating: 5,
  },
  {
    name: "Ama Mensah",
    company: "Mensah Engineering",
    project: "Industrial Plant Maintenance",
    content:
      "Professional team, quality equipment, and reliable support. They made our complex maintenance project smooth and safe.",
    rating: 5,
  },
  {
    name: "David Ofori",
    company: "Ofori Developments",
    project: "Residential Complex",
    content:
      "The Kwikstage scaffolding system they provided was perfect for our needs. Great service and competitive pricing.",
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
                "{testimonial.content}"
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
      </div>
    </section>
  );
}
