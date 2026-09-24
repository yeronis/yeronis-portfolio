import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "AI Intern",
      company: "Mechatronics Innovation Lab (MIL)",
      period: "2023",
      type: "work",
      description:
        "Contributed to AI and machine-learning work for 3D concrete printing. Worked with camera recordings, image extraction and annotation, model development and testing, and geometric width analysis to support evaluation of printing quality and accuracy.",
      skills: ["Computer Vision", "Machine Learning", "Data Annotation", "Model Development", "Geometric Analysis", "3D Concrete Printing"],
    },
    {
      title: "Founder & CEO",
      company: "Hubena Imports",
      period: "Current",
      type: "business",
      description:
        "Developing an early-stage coffee import business connecting Ethiopian suppliers with the Norwegian market. Established a supplier relationship in Ethiopia and currently exploring roasting, packaging and distribution partnerships in Norway.",
      skills: ["Supplier Relations", "Business Development", "International Communication", "Commercial Discussions"],
    },
    {
      title: "Online Tutor – Mathematics & Programming",
      company: "Superprof",
      period: "2021 – Present",
      type: "work",
      description:
        "Provide educational support in mathematics and programming, including Python and C#, adapting explanations to different student levels and technical backgrounds.",
      skills: ["Python", "C#", "Mathematics", "Technical Communication", "Teaching"],
    },
    {
      title: "Additional Professional Experience",
      company: "Support services, childcare & hospitality",
      period: "2017 – Present",
      type: "work",
      description:
        "Additional roles alongside studies and technical development strengthened responsibility, adaptability, communication, organisation and the ability to work effectively with people in varied environments.",
      skills: ["Communication", "Responsibility", "Adaptability", "Organisation", "Teamwork"],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Professional Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div
                    className={`
                    absolute left-6 w-4 h-4 rounded-full border-2 z-10
                    ${exp.type === "work" ? "bg-blue-500 border-blue-400" : "bg-purple-500 border-purple-400"}
                    pulse-glow
                  `}
                  ></div>

                  {/* Content Card */}
                  <div className="ml-16 w-full">
                    <Card className="glow-border bg-gray-900/50 backdrop-blur-sm card-3d">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <Briefcase className="h-5 w-5 text-blue-400 mr-3" />
                            <div>
                              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                              <div className="flex items-center text-gray-400 mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="glow-border flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>
                        </div>

                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs bg-blue-500/20 text-blue-300"
                            >
                              {skill}
                            </Badge>
                          ))}
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
