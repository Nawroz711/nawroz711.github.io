export default function Experience() {
  const experiences = [
    {
      company: "Al-Hawa Technology",
      location: "Kabul - Afghanistan",
      position: "Software Developer",
      period: "July 2023 - Present",
      description: "Full-stack development with focus on modern web applications and client collaboration.",
      responsibilities: [
        "Developing and maintaining frontend & backend functionality of web applications",
        "Participating in discussions with clients to clarify requirements and project scope",
        "Providing guidance and mentorship to team members on software development best practices",
        "Ensuring consistent design and user experience across all web properties",
        "Identifying, debugging, and resolving software issues and technical debt",
        "Creating prototypes and wireframes for mobile apps and web platforms",
        "Conducting comprehensive code reviews and maintaining development standards"
      ],
      technologies: ["PHP", "Laravel", "React", "Vue.js", "PostgreSQL", "MySQL", "JavaScript", "TypeScript"]
    }
  ];

  return (
    <div id="experience" className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 rounded-full border border-primary border-opacity-20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-grey max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional growth and the impactful projects I&apos;ve contributed to
            in the world of software development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Node */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 top-8 shadow-lg shadow-primary/50">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
              </div>

              {/* Experience Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-primary hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Company Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
                      <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm font-medium rounded-full border border-primary border-opacity-20">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-light mb-1">{exp.company}</h4>
                    <p className="text-grey italic">{exp.location}</p>
                    <p className="text-grey mt-3 leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-light mb-3 uppercase tracking-wide">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-800 text-light rounded-full border border-gray-700 hover:border-primary hover:border-opacity-50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h5 className="text-sm font-semibold text-light mb-4 uppercase tracking-wide">Key Responsibilities</h5>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span className="text-grey leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-light mb-4">What I Bring to the Table</h3>
            <p className="text-grey mb-6 max-w-2xl mx-auto leading-relaxed">
              With over 2 years of experience in full-stack development, I combine technical expertise
              with strong collaboration skills to deliver high-quality solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-grey uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-grey uppercase tracking-wide">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-grey uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
