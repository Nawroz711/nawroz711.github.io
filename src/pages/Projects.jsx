export default function Projects() {
  const projects = [
    {
      name: "Baashga",
      description: "Gym management system with membership tracking, workout plans, and payment processing",
      tech: ["PHP", "Laravel", "PostgreSQL", "Supabase"],
      link: "https://www.baashga.com",
      category: "Web Application"
    },
    {
      name: "Karwwan",
      description: "Complete marketplace for buying and selling cars online with advanced search and filtering",
      tech: ["PHP", "Laravel", "PostgreSQL", "Supabase"],
      link: "https://www.karwwan.com",
      category: "E-commerce"
    },
    {
      name: "Emllak",
      description: "Real estate platform for property listings, virtual tours, and seamless transactions",
      tech: ["PHP", "Laravel", "PostgreSQL", "Supabase"],
      link: "https://www.emllak.com",
      category: "Real Estate"
    },
    {
      name: "OXUS Car Rental",
      description: "UK-based car rental platform with booking system, fleet management, and payment gateway",
      tech: ["PHP", "Laravel", "PostgreSQL", "Supabase"],
      link: "https://www.rms.com",
      category: "Service Platform"
    },
    {
      name: "S2P",
      description: "Enterprise procurement management system with vendor management and approval workflows",
      tech: ["PHP", "Laravel", "PostgreSQL", "Supabase"],
      link: "https://www.alhawas2p.com",
      category: "Enterprise Software"
    }
  ];

  return (
    <div id="projects" className="py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 rounded-full border border-primary border-opacity-20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-grey max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in web development, featuring modern applications
            built with cutting-edge technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-light group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium text-primary bg-primary bg-opacity-10 rounded-full border border-primary border-opacity-20">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-grey leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-light mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-800 text-light rounded-full border border-gray-700 hover:border-primary hover:border-opacity-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              <div className="flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-green-400 transition-colors group/link"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <div className="flex items-center gap-1 text-xs text-grey">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Live</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl">
            <div className="text-left">
              <h4 className="text-light font-semibold">Interested in working together?</h4>
              <p className="text-grey text-sm">Let&apos;s discuss your next project</p>
            </div>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
