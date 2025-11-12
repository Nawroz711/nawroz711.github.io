export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "nawroz@example.com",
      href: "mailto:nawroz@example.com",
      description: "Send me an email anytime"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/nawroz",
      href: "https://linkedin.com/in/nawroz",
      description: "Connect with me professionally"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "github.com/nawroz",
      href: "https://github.com/nawroz",
      description: "Check out my code repositories"
    }
  ];

  return (
    <div id="contact" className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 rounded-full border border-primary border-opacity-20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-grey max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I&apos;m always interested in hearing about new
            opportunities, interesting projects, and creative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-light mb-6">Contact Information</h3>
              <p className="text-grey mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within
                24 hours and am always happy to discuss new opportunities.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-lg border border-gray-800 hover:border-primary hover:border-opacity-50 transition-all duration-300 transform hover:scale-102 hover:bg-primary hover:bg-opacity-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                      {contact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-light font-semibold group-hover:text-primary transition-colors">
                        {contact.label}
                      </h4>
                      <p className="text-primary font-medium truncate">
                        {contact.value}
                      </p>
                      <p className="text-grey text-sm mt-1">
                        {contact.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <h4 className="text-light font-semibold">Currently Available</h4>
              </div>
              <p className="text-grey text-sm leading-relaxed">
                I&apos;m actively taking on new projects and collaborations. Whether you need a full-stack
                developer, consultation on your existing project, or want to discuss ideas, I&apos;d love to hear from you.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-light mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-grey mb-8 leading-relaxed">
                Let&apos;s discuss your ideas and see how we can bring them to life together.
                I&apos;m here to help turn your vision into reality.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:nawroz@example.com?subject=Project Inquiry"
                  className="block w-full bg-primary text-dark font-semibold py-4 px-6 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  Start a Conversation
                </a>
                
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block w-full border-2 border-light border-opacity-20 text-light font-semibold py-4 px-6 rounded-lg hover:border-primary hover:text-primary hover:bg-primary hover:bg-opacity-5 transition-all duration-300"
                >
                  Back to Top
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-grey text-sm">
                <span className="text-primary">Response time:</span> Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
