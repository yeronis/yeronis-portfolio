import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "AI Specialist",
      company: "Mechatronics Innovation Lab (MIL)",
      period: "2023",
      type: "work",
      description:
        "Led advancements in 3D printing technology for cement applications, focusing on AI and machine learning implementations. Built and annotated comprehensive datasets, developed sophisticated models, and performed rigorous testing for accuracy optimization in industrial applications.",
      skills: [
        "Machine Learning",
        "Dataset Creation",
        "Model Development",
        "3D Printing",
        "Geometric Analysis",
        "Industrial AI",
      ],
    },
    {
      title: "Private AI Instructor",
      company: "Superprof",
      period: "2021 – Present",
      type: "work",
      description:
        "Delivering specialized lessons in key AI domains including deep learning, computer vision, reinforcement learning, and AI applications for real-world use cases. Mentoring students in advanced programming concepts and cutting-edge AI methodologies.",
      skills: [
        "Deep Learning",
        "Computer Vision",
        "Reinforcement Learning",
        "Python",
        "AI Applications",
        "Technical Mentoring",
      ],
    },
    {
      title: "Personal Assistant",
      company: "ULOBA BPA",
      period: "January 2025 – Present",
      type: "work",
      description:
        "Assisting individuals with physical and mental disabilities, offering personalized support to enhance their daily experiences and quality of life through compassionate care and adaptive solutions.",
      skills: ["Interpersonal Skills", "Problem Solving", "Adaptability", "Compassionate Care", "Personal Support"],
    },
    {
      title: "Personal Assistant",
      company: "MIO BPA",
      period: "Aug 2024 – Present",
      type: "work",
      description:
        "Assisting individuals with physical and mental disabilities, offering personalized support to enhance their daily experiences and quality of life through compassionate care and adaptive solutions.",
      skills: ["Interpersonal Skills", "Problem Solving", "Adaptability", "Compassionate Care", "Personal Support"],
    },
    {
      title: "Kindergarten Teacher",
      company: "Adecco",
      period: "2021 – Present",
      type: "work",
      description:
        "Provided comprehensive childcare for ages 0-6, managing classroom activities and fostering a nurturing educational environment. Developed exceptional organizational and stress management skills through effective multitasking and creative problem-solving.",
      skills: ["Childcare", "Organization", "Stress Management", "Creativity", "Patience", "Educational Development"],
    },
    {
      title: "Hotel Meeting Room Supervisor",
      company: "Scandic Hotel",
      period: "2017 – 2018",
      type: "work",
      description:
        "Supervised meeting room preparations and equipment management for high-profile corporate events, ensuring seamless operations and exceptional service delivery. Coordinated with multiple departments to deliver outstanding customer experiences.",
      skills: ["Customer Service", "Event Management", "Time Management", "Attention to Detail", "Team Coordination"],
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
