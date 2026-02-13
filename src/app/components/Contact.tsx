"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // EmailJS credentials from environment variables
    const serviceID =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ym97vfw";
    const templateID =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_47fiyww";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "WD_oOMLqiTWDD4V08";

    try {
      // Check if all credentials are properly set
      if (!serviceID || !templateID || !publicKey) {
        throw new Error(
          "Email service not configured. Please contact us directly at deckscaffgh@outlook.com"
        );
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || "Not provided",
        project_type: formData.projectType || "Not specified",
        message: formData.message,
        to_email: "deckscaffgh@outlook.com",
        subject: `New Quote Request from ${formData.name}`,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          message: "",
        });
        setIsSubmitted(true);

        // Scroll to top of form to show success message
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

        // Hide success message after 8 seconds (longer so user can read it)
        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      // console.error("Email sending error:", err);
      setError(
        "There was an error sending your message. Please try again or contact us directly at deckscaffgh@outlook.com"
      );

      // Scroll to show error message
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us for a free consultation and
            personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="size-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Areas</h3>
                  <p className="text-gray-600">
                    Accra, Tema, Kasoa & Nationwide
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="size-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us Today</h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+233544993344"
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-300 block"
                    >
                      +233 54 499 3344
                    </a>
                    <a
                      href="tel:+233598049762"
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-300 block"
                    >
                      +233 59 804 9762
                    </a>
                    <a
                      href="tel:+233245446160"
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-300 block"
                    >
                      +233 24 544 6160
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="size-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <a
                    href="mailto:deckscaffgh@outlook.com"
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                  >
                    deckscaffgh@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="size-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">
                    Within 2 hours during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Quick Response Guarantee
              </h3>
              <p className="text-gray-600 text-sm">
                We understand that construction projects move fast. That&apos;s
                why we guarantee to respond to all inquiries within 2 hours
                during business hours.
              </p>
            </div>
          </div>

          {/* Contact Form - REMOVED THE REF FROM THIS DIV */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {/* Success Message - More Prominent */}
            {isSubmitted && (
              <div className="mb-6 p-6 bg-green-50 border-2 border-green-300 rounded-2xl shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="size-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-green-800">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700 mt-1">
                      Thank you for your inquiry. We&apos;ve received your quote
                      request and will contact you within 2 hours.
                    </p>
                    <div className="mt-3 flex items-center text-sm text-green-600">
                      <svg
                        className="size-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Expected response: Within 2 business hours
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-6 bg-red-50 border-2 border-red-300 rounded-2xl shadow-lg">
                <div className="flex items-start">
                  <svg
                    className="size-8 text-red-500 mr-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-red-800">
                      Unable to Send Message
                    </h3>
                    <p className="text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* FORM ELEMENT KEEPS THE REF */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  <option value="">Select Project Type</option>
                  <option value="scaffolding">Scaffolding Rental</option>
                  <option value="formwork">Formwork Solutions</option>
                  <option value="equipment-rental">Equipment Rental</option>
                  <option value="civil-engineering">Civil Engineering</option>
                  <option value="maintenance">Industrial Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300 resize-none"
                  placeholder="Please describe your project requirements, location, timeline, and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed transition-colors duration-300 shadow-lg flex items-center justify-center text-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 size-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Your Request...
                  </>
                ) : (
                  "Get Free Quote"
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                We&apos;ll contact you within 2 hours to discuss your project
                requirements.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}