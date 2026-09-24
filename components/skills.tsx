"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C#", "C", "C++", "Java", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning & AI",
      skills: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Computer Vision", "Predictive Modelling"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Ethics & Society",
      skills: ["AI Ethics", "Fairness in AI", "Bias in AI", "Responsible AI"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Engineering",
      skills: ["Git", "Linux / Ubuntu", "VS Code", "Arduino", "Data Annotation", "Geometric Analysis"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Languages",
      skills: ["English (Fluent)", "Norwegian (Fluent)", "Amharic (Native)"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Technical Expertise</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glow-border bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 card-3d tech-grid"
              >
                <h3
                  className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`
                        glow-border cursor-pointer transition-all duration-300 hover:scale-110
                        ${hoveredSkill === skill ? "glow-border-purple bg-purple-500/20" : "hover:glow-border-purple"}
                      `}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Current development areas — intentionally shown without percentage ratings */}
          <div className="mt-16 text-center">
            <div className="glow-border bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 card-3d">
              <h3 className="text-2xl font-semibold mb-4 glow-text">Current Technical Development</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Expanding hands-on experience with Arduino, sensor and serial integration, and introductory ROS2 through a small mobile robot project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
