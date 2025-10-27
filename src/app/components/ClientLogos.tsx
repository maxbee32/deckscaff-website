"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ClientLogo {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const clientLogos: ClientLogo[] = [
  {
    name: "Nestle Ghana",
    logo: "/images/clients/chico.jpeg",
    width: 160,
    height: 80,
  },
  {
    name: "LC Limited",
    logo: "/images/clients/lc.jpeg",
    width: 160,
    height: 80,
  },
  {
    name: "First Sky Limited",
    logo: "/images/clients/first.jpeg",
    width: 160,
    height: 80,
  },
  {
    name: "Jenspak Limited",
    logo: "/images/clients/jen.jpeg",
    width: 160,
    height: 80,
  },
  {
    name: "Lynks Entertainment",
    logo: "/images/clients/lynx.jpeg",
    width: 160,
    height: 80,
  },
  {
    name: "Chicos Construction",
    logo: "/images/clients/china.jpeg",
    width: 160,
    height: 80,
  },
  {
    name: "White Beam Concepts",
    logo: "/images/clients/lyco.jpeg",
    width: 160,
    height: 80,
  },
];

export default function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Duplicate the logos for seamless scrolling
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to have collaborated with reputable companies and
            organizations across Ghana
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling Logos */}
          <div className="flex space-x-12 animate-scroll">
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                style={{
                  width: `${client.width}px`,
                  height: `${client.height}px`,
                }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(
                -160px * ${clientLogos.length} - 12px * ${clientLogos.length}
              )
            );
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
