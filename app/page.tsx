import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
