export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "JavaScript", icon: "src/assets/icons/js.png", level: 90 },
        { name: "TypeScript", icon: "src/assets/icons/ts.png", level: 85 },
        { name: "React", icon: "src/assets/icons/react.png", level: 88 },
        { name: "Vue.js", icon: "src/assets/icons/vue.png", level: 82 },
        { name: "Nuxt.js", icon: "src/assets/icons/nuxt.svg", level: 80 },
        { name: "Tailwind CSS", icon: "src/assets/icons/tailwind.png", level: 92 },
        { name: "Bootstrap", icon: "src/assets/icons/Bootstrap.png", level: 85 }
      ]
    },
    {
      title: "Backend",
      description: "Developing robust server-side applications and APIs",
      skills: [
        { name: "PHP", icon: "src/assets/icons/php.png", level: 90 },
        { name: "Laravel", icon: "src/assets/icons/laravel.png", level: 88 },
        { name: "Supabase", icon: "src/assets/icons/supabase.png", level: 85 }
      ]
    },
    {
      title: "Database",
      description: "Managing and optimizing database systems",
      skills: [
        { name: "MySQL", icon: "src/assets/icons/mysql.png", level: 88 },
        { name: "PostgreSQL", icon: "src/assets/icons/pgsql.png", level: 85 }
      ]
    }
  ];

  return (
    <div id="skills" className="py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 rounded-full border border-primary border-opacity-20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-grey max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the technologies
            I work with to deliver high-quality solutions.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-light mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-grey text-lg max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/5 text-center"
                  >
                    {/* Skill Icon */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center group-hover/skill:bg-primary group-hover/skill:bg-opacity-10 transition-all duration-300">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain transition-all duration-300 group-hover/skill:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div className="hidden text-primary font-bold text-xl">
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                i < Math.floor(skill.level / 20) ? 'bg-primary' : 'bg-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-light font-semibold text-sm mb-2 group-hover/skill:text-primary transition-colors">
                      {skill.name}
                    </h4>

                    {/* Skill Level */}
                    <div className="text-xs text-grey">
                      {skill.level}% proficiency
                    </div>

                    {/* Hover Effect - Skill Level Bar */}
                    <div className="mt-3 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                      <div className="w-full bg-gray-800 rounded-full h-1">
                        <div
                          className="bg-gradient-to-r from-primary to-green-400 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl">
            <div className="text-left">
              <h4 className="text-light font-semibold text-lg mb-2">Total Technologies</h4>
              <p className="text-grey">Countinuous learning and adaptation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">12+</div>
              <div className="text-xs text-grey uppercase tracking-wide">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2+</div>
              <div className="text-xs text-grey uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
