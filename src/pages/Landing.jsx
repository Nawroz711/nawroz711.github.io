
import { useState, useEffect } from "react";

export default function Landing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="landing" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 80, 0.1), transparent 40%)`
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="text-center px-6 max-w-6xl relative z-10">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 rounded-full border border-primary border-opacity-20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Available for work</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8">
          <span className="text-primary">SOFTWARE</span>
          <br />
          <span className="text-light">DEVELOPER</span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-grey font-medium leading-relaxed">
            Hi! I&apos;m <span className="text-primary font-semibold">Nawroz Ali Alamdost</span>.
            A creative Software Developer with <span className="text-light font-semibold">2+ years</span> of experience
            in building high-performance, scalable, and responsive web solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="src/assets/cv/Nawroz_CV.pdf"
            download
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-lg font-semibold text-dark hover:bg-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
          
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-light border-2 border-light border-opacity-20 hover:border-primary hover:text-primary hover:bg-primary hover:bg-opacity-5 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let&apos;s Connect
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary border-opacity-30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
