export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our office or get in touch for site visits and consultations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.447281032743!2d-0.22412392527832087!3d5.674661132929111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c1639aef4a9%3A0x4b0d5b3ee4a7e0c2!2sDeckscaff%20Ghana%20Ltd!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deckscaff Ghana Ltd Location - Medie, Off Accra Nsawam Rd."
              className="w-full h-96 lg:h-full min-h-[400px]"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-6">
                Located in Medie, just off the Accra-Nsawam Road, we're conveniently positioned to serve projects across Greater Accra and beyond.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="size-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                  <p className="text-gray-600 mb-2">
                    Deckscaff Ghana Ltd<br />
                    Medie, Off Accra Nsawam Rd.<br />
                    Ghana
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/wjXuULE5SPKLiHZ56?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300 inline-flex items-center"
                  >
                    Get Directions to Medie
                    <svg className="size-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="size-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                  <a 
                    href="mailto:deckscaffgh@outlook.com"
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
                  >
                    deckscaffgh@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="size-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                  <div className="space-y-1 text-gray-600">
                    <div>
                      <a href="tel:+233544993344" className="hover:text-orange-500 transition-colors duration-300">
                        +233 54 499 3344
                      </a>
                    </div>
                    <div>
                      <a href="tel:+233598049762" className="hover:text-orange-500 transition-colors duration-300">
                        +233 59 804 9762
                      </a>
                    </div>
                    <div>
                      <a href="tel:+233245446160" className="hover:text-orange-500 transition-colors duration-300">
                        +233 24 544 6160
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="size-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="size-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Emergency Support</h4>
                  <p className="text-gray-600 mb-2">
                    For urgent scaffolding needs outside business hours, our emergency team is available 24/7.
                  </p>
                  <div className="space-y-1">
                    <a href="tel:+233544993344" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 block">
                      +233 54 499 3344
                    </a>
                    <a href="tel:+233598049762" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 block">
                      +233 24 544 6160
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h4 className="font-semibold text-gray-900 mb-3">Strategic Location Advantages</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="size-2 bg-orange-500 rounded-full mr-2"></div>
                  Easy Access to Accra
                </div>
                <div className="flex items-center">
                  <div className="size-2 bg-orange-500 rounded-full mr-2"></div>
                  Close to Nsawam Road
                </div>
                <div className="flex items-center">
                  <div className="size-2 bg-orange-500 rounded-full mr-2"></div>
                  Central to Greater Accra
                </div>
                <div className="flex items-center">
                  <div className="size-2 bg-orange-500 rounded-full mr-2"></div>
                  Nationwide Coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}