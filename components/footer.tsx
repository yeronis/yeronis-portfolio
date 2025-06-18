import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Yeronis Hubena</h2>
            <p className="text-gray-400 mt-2">Software Engineer & AI Specialist</p>
          </div>

          <div className="flex space-x-8">
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-gray-400 hover:text-white transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://www.linkedin.com/in/yeronis-assefa-hubena-35937126a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:yerohubena@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Yeronis Assefa Hubena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
