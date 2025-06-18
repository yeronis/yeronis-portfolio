"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Eye, Download } from "lucide-react"

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const paths = svg.querySelectorAll("path")
    paths.forEach((path, index) => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
      path.style.animation = `neural-pulse 4s ease-in-out infinite ${index * 0.3}s`
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Elegant Neural Network Background */}
      <div className="absolute inset-0 opacity-15">
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 150 Q300 100 500 150 T900 150 Q1100 200 1200 150"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
            className="neural-network"
          />
          <path
            d="M50 250 Q250 200 450 250 T750 250 Q950 300 1150 250"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            className="neural-network"
          />
          <path
            d="M150 350 Q350 300 550 350 T850 350 Q1050 400 1200 350"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
            className="neural-network"
          />
          <path
            d="M0 450 Q200 400 400 450 T700 450 Q900 500 1100 450"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            className="neural-network"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
                    Welcome to my portfolio
                  </span>
                </div>

                {/* Enhanced Name Logo */}
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight tech-name-logo">
                    <span className="relative inline-block">
                      <span className="text-white font-extrabold tracking-tight">Yeronis</span>
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                    </span>
                    <br />
                    <span className="relative inline-block">
                      <span className="text-white font-extrabold tracking-tight">Assefa</span>
                      <div
                        className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </span>
                    <br />
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-tight">
                        Hubena
                      </span>
                      <div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-80"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </span>
                  </h1>

                  {/* Neural network accent */}
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-30">
                    <svg width="20" height="60" viewBox="0 0 20 60" fill="none">
                      <circle cx="4" cy="10" r="2" fill="#3b82f6" className="animate-pulse" />
                      <circle
                        cx="4"
                        cy="30"
                        r="2"
                        fill="#8b5cf6"
                        className="animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      />
                      <circle
                        cx="4"
                        cy="50"
                        r="2"
                        fill="#06b6d4"
                        className="animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      />
                      <line x1="6" y1="10" x2="16" y2="30" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
                      <line x1="6" y1="30" x2="16" y2="50" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.6" />
                      <line x1="6" y1="10" x2="16" y2="50" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-300">Software Engineer & AI Specialist</h2>
                  <p className="text-lg text-blue-400 font-medium">(Sivilingeniør)</p>
                </div>

                {/* Enhanced specialization tags */}
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                  <span className="text-blue-400 hover:text-blue-300 transition-colors cursor-default hover:glow-text">
                    Deep Learning
                  </span>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 hover:text-purple-300 transition-colors cursor-default hover:glow-text">
                    Computer Vision
                  </span>
                  <div
                    className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <span className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-default hover:glow-text">
                    Reinforcement Learning
                  </span>
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <span className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-default hover:glow-text">
                    AI-Powered Web Development
                  </span>
                </div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Crafting intelligent solutions through advanced machine learning, computer vision, and deep learning
                  technologies. Passionate about creating data-driven innovations that make a meaningful impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4 group"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glow-border text-lg px-8 py-4 hover:bg-blue-500/10 group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Deep Learning</p>
                    <p className="text-xs text-gray-400">Neural Networks & AI</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Eye className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Computer Vision</p>
                    <p className="text-xs text-gray-400">Image Processing & Analysis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Single Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-110"></div>

                {/* Main photo container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 float-animation">
                    <div className="w-full h-full rounded-full bg-gray-900 p-2">
                      <img
                        src="/images/yeronis-profile.jpeg"
                        alt="Yeronis Assefa Hubena"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 float-animation"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-60 float-animation"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute top-1/4 -left-8 w-4 h-4 bg-blue-400 rounded-full opacity-40 float-animation"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
