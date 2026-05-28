"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function TawkChat() {
  useEffect(() => {
    // Add custom styling
    const style = document.createElement("style");
    style.textContent = `
      .tawk-frame {
        border-radius: 12px !important;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <>
      <Script
        id="tawk-to-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();
            
            Tawk_API = {
              ...Tawk_API,
              
              welcome: {
                message: "👋 Welcome to Deckscaff Ghana Ltd! 🏗️\\n\\nHow can we help with your scaffolding needs today?",
                interval: 30000,
                delay: 5
              },
              
              suggestedReplies: {
                enabled: true,
                replies: [
                  {
                    text: "💰 I need a quote",
                    response: "Great! To provide an accurate quote, could you please share:\\n\\n• Project type\\n• Height and area\\n• Duration of rental\\n• Your location\\n\\nOur team will respond within 2 hours!"
                  },
                  {
                    text: "📞 Tell me more about your services",
                    response: "We offer comprehensive scaffolding solutions:\\n\\n🏗️ Scaffolding Rental\\n🔧 Formwork Systems\\n📦 Equipment Sales\\n🏢 Civil Engineering\\n\\nWhat specific service are you interested in?"
                  },
                  {
                    text: "🚚 Delivery & Locations",
                    response: "We serve projects across Ghana:\\n\\n📍 Greater Accra (Accra, Tema, Kasoa)\\n📍 Eastern Region (Nsawam, Aburi)\\n📍 Ashanti Region (Kumasi)\\n📍 Western Region (Takoradi)\\n📍 Nationwide delivery for large projects"
                  },
                  {
                    text: "🔧 I need formwork",
                    response: "Excellent! We provide complete formwork solutions:\\n\\n🏗️ Column formwork\\n🧱 Wall formwork\\n📐 Slab formwork\\n📈 Climbing systems\\n🏭 Custom engineered solutions"
                  },
                  {
                    text: "💰 Rental rates",
                    response: "Our scaffolding rental rates are competitive and depend on:\\n\\n📦 Equipment type and quantity\\n⏱️ Rental duration\\n📍 Delivery location\\n🛠️ Installation requirements"
                  },
                  {
                    text: "✅ Safety & Certification",
                    response: "Safety is our top priority! ✅\\n\\nWe are:\\n✓ ISO Certified\\n✓ EN Standards Compliant\\n✓ BS Code Compliant\\n✓ All equipment load tested\\n✓ Fully insured"
                  },
                  {
                    text: "⏰ Business Hours",
                    response: "We're available to assist you:\\n\\n📅 Monday - Friday: 8:00 AM - 5:00 PM\\n📅 Saturday: 9:00 AM - 1:00 PM\\n📅 Sunday: Closed (Emergency support available)"
                  },
                  {
                    text: "🏗️ I'm ready to start my project",
                    response: "🎉 That's great news! Let's get started.\\n\\nPlease share your:\\n\\n1️⃣ Name\\n2️⃣ Phone number\\n3️⃣ Project location\\n4️⃣ Project timeline\\n\\nOur project manager will contact you within 2 hours!"
                  }
                ]
              },
              
              prechat: {
                fields: [
                  { 
                    name: "name", 
                    type: "text", 
                    label: "Your Full Name", 
                    required: true 
                  },
                  { 
                    name: "email", 
                    type: "text", 
                    label: "Email Address", 
                    required: true 
                  },
                  { 
                    name: "phone", 
                    type: "text", 
                    label: "Phone Number", 
                    required: false 
                  },
                  { 
                    name: "project", 
                    type: "select", 
                    label: "What service are you interested in?", 
                    required: false,
                    options: [
                      "Scaffolding Rental",
                      "Formwork Solutions",
                      "Equipment Purchase",
                      "Civil Engineering",
                      "Industrial Maintenance",
                      "Just browsing",
                      "Other"
                    ]
                  }
                ],
                message: "💬 Please share your contact details so we can better assist you:"
              },
              
              offline: {
                message: "We're currently offline. 😴\\n\\nPlease leave your name, email, phone number, and message. We'll get back to you within 2 hours!",
                emailForm: true
              },
              
              visitor: {
                name: "Deckscaff Visitor"
              },
              
              trackPages: true,
              
              onChatStarted: function() {
                console.log("Chat started");
              },
              onChatEnded: function() {
                console.log("Chat ended");
              }
            };
          `,
        }}
      />
      <Script
        src="https://embed.tawk.to/6a187a2fccc2121c383bf5cc/1jpnpqivl"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}




