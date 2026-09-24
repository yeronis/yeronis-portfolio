import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Master's in Artificial Intelligence",
      institution: "University of Agder",
      year: "2024",
      description:
        "Master’s studies in artificial intelligence covering deep learning, computer vision, reinforcement learning, neural networks, research methodology and responsible AI.",
      skills: [
        "Deep Learning",
        "Computer Vision",
        "Reinforcement Learning",
        "Neural Networks",
        "AI Ethics",
        "Research Methodology",
      ],
      icon: "🎓",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      degree: "Bachelor's in Software Engineering",
      institution: "University of Agder",
      year: "2021",
      description:
        "Software engineering education with programming, software development and project-based work across multiple technologies and application areas.",
      skills: [
        "Software Engineering",
        "Programming",
        "Software Development",
        "Web Development",
        "Project Work",
      ],
      icon: "⚙️",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      degree: "International Baccalaureate Diploma",
      institution: "Trondheim Katedral School",
      year: "2018",
      description:
        "Rigorous international education program with emphasis on critical thinking, research skills, and global perspectives. Achieved high academic standards across multiple disciplines including mathematics, sciences, and languages.",
      skills: ["Critical Thinking", "Research Skills", "Mathematics", "Sciences", "Languages", "Global Perspectives"],
      icon: "🌍",
      gradient: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Education</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-emerald-600"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full border-2 bg-purple-500 border-purple-400 z-10 pulse-glow"></div>

                  {/* Content Card */}
                  <div className="ml-16 w-full">
                    <Card className="glow-border bg-gray-900/50 backdrop-blur-sm card-3d">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div
                              className={`text-3xl mr-4 p-3 rounded-lg bg-gradient-to-r ${edu.gradient} bg-opacity-20`}
                            >
                              {edu.icon}
                            </div>
                            <div>
                              <h3
                                className={`text-xl font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                              >
                                {edu.degree}
                              </h3>
                              <div className="flex items-center text-gray-400 mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{edu.institution}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="glow-border flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {edu.year}
                          </Badge>
                        </div>

                        <p className="text-gray-300 mb-4">{edu.description}</p>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                            <Award className="h-3 w-3 mr-1" />
                            Key Areas of Study:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className={`
                                  text-xs
                                  ${
                                    index === 0
                                      ? "bg-blue-500/20 text-blue-300"
                                      : index === 1
                                        ? "bg-purple-500/20 text-purple-300"
                                        : "bg-emerald-500/20 text-emerald-300"
                                  }
                                `}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
