"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Eye, Zap } from "lucide-react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Reinforcement Learning Ping-Pong AI",
      description:
        "Developed a reinforcement learning agent that learns to play ping-pong against a human player. The AI improves its gameplay by training through repeated interactions, optimizing its paddle movements to successfully return the ball. Implemented reward-based learning, enabling the agent to adapt and enhance its performance over time.",
      technologies: ["Python", "TensorFlow", "OpenAI Gym", "Pygame"],
      icon: "🏓",
      gradient: "from-cyan-500 to-blue-500",
      features: ["Reward-based learning", "Adaptive gameplay", "Real-time optimization"],
      isAnimated: true,
      animationType: "pingpong",
    },
    {
      title: "Deep Neural Network for Scene Classification and GANs",
      description:
        "Built a deep neural network model trained on the 'Places' dataset for scene classification tasks and generative adversarial networks (GANs) for image synthesis. The model accurately classifies diverse environments and generates realistic scenes through adversarial training.",
      technologies: ["Python", "PyTorch", "GANs", "Places Dataset"],
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500",
      features: ["Scene classification", "Image synthesis", "Adversarial training"],
      isAnimated: true,
      animationType: "gan",
    },
    {
      title: "AI-Powered Resume Optimizer",
      description:
        "Intelligent resume optimization system that analyzes job descriptions and suggests targeted improvements to maximize ATS compatibility and recruiter appeal. Uses advanced NLP techniques to extract key requirements, optimize keyword density, and provide actionable recommendations for content enhancement and formatting improvements.",
      technologies: ["Python", "spaCy", "NLTK", "Transformers", "FastAPI"],
      icon: "📄",
      gradient: "from-emerald-500 to-teal-500",
      features: ["ATS optimization", "Keyword matching", "Content suggestions"],
      isAnimated: true,
      animationType: "resume",
    },
    {
      title: "Vision Classifier App",
      description:
        "Advanced computer vision application trained on custom image datasets to recognize and classify objects with exceptional accuracy. Implements state-of-the-art CNN architectures with transfer learning, data augmentation, and real-time inference capabilities for mobile and web deployment.",
      technologies: ["Python", "TensorFlow", "OpenCV", "React Native", "Flask"],
      icon: "👁️",
      gradient: "from-blue-500 to-indigo-500",
      features: ["Custom dataset training", "Real-time classification", "Mobile deployment"],
      isAnimated: true,
      animationType: "vision",
    },
    {
      title: "Chatbot for Customer Service",
      description:
        "Sophisticated conversational AI system built on fine-tuned large language models, specialized for domain-specific customer queries and responses. Features context-aware dialogue management, sentiment analysis, and seamless integration with existing customer service workflows for enhanced user experience.",
      technologies: ["Python", "Transformers", "LangChain", "FastAPI", "Redis"],
      icon: "💬",
      gradient: "from-violet-500 to-purple-500",
      features: ["Context-aware responses", "Sentiment analysis", "Multi-turn dialogue"],
      isAnimated: true,
      animationType: "chatbot",
    },
    {
      title: "Freelancer AI Assistant",
      description:
        "Automated proposal generation system that creates personalized freelance proposals based on client briefs and project requirements. Leverages natural language processing to analyze project descriptions, match relevant skills, and generate compelling, tailored proposals that increase win rates and save time.",
      technologies: ["Python", "OpenAI GPT", "LangChain", "Streamlit", "PostgreSQL"],
      icon: "🤝",
      gradient: "from-orange-500 to-amber-500",
      features: ["Automated proposal writing", "Client brief analysis", "Skill matching"],
      isAnimated: true,
      animationType: "freelancer",
    },
    {
      title: "AI Music Mood Tagger",
      description:
        "Advanced audio analysis system that automatically tags music with moods and emotions using deep learning techniques. Processes audio features, spectrograms, and temporal patterns to classify emotional content, enabling intelligent music recommendation and playlist generation based on user preferences and context.",
      technologies: ["Python", "Librosa", "TensorFlow", "Spotify API", "Streamlit"],
      icon: "🎵",
      gradient: "from-pink-500 to-rose-500",
      features: ["Audio feature extraction", "Emotion classification", "Playlist generation"],
      isAnimated: true,
      animationType: "music",
    },
    {
      title: "Optical Flow Motion Tracking",
      description:
        "Advanced real-time motion tracking system using Lucas-Kanade and Farneback optical flow algorithms for precise object movement analysis.",
      technologies: ["Python", "OpenCV", "NumPy", "Optical Flow"],
      icon: "🌊",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Real-time tracking", "Multi-object detection", "Noise reduction"],
      isAnimated: false,
    },
    {
      title: "Panorama Stitching with Feature Matching",
      description:
        "Intelligent panorama creation using SIFT/ORB feature detection, RANSAC-based homography estimation, and seamless image blending.",
      technologies: ["Python", "OpenCV", "SIFT", "RANSAC"],
      icon: "🏞️",
      gradient: "from-purple-500 to-pink-500",
      features: ["Feature matching", "Homography estimation", "Seamless blending"],
      isAnimated: false,
    },
    {
      title: "Image Representation & Color Processing",
      description:
        "Comprehensive image processing suite with advanced color space transformations, histogram analysis, and enhancement algorithms.",
      technologies: ["Python", "OpenCV", "Matplotlib", "PIL"],
      icon: "🎨",
      gradient: "from-green-500 to-emerald-500",
      features: ["Color space conversion", "Histogram equalization", "Image enhancement"],
      isAnimated: false,
    },
    {
      title: "Semantic Segmentation of Visual Data",
      description:
        "Deep learning-based semantic segmentation using U-Net and DeepLab architectures for precise pixel-level classification.",
      technologies: ["TensorFlow", "PyTorch", "U-Net", "DeepLab"],
      icon: "🧩",
      gradient: "from-orange-500 to-red-500",
      features: ["Pixel-level classification", "Multi-class segmentation", "Real-time inference"],
      isAnimated: false,
    },
    {
      title: "Panorama Generation: Feature Detection",
      description:
        "Advanced feature detection and matching system for robust panorama generation with automatic keypoint extraction and descriptor matching.",
      technologies: ["Python", "OpenCV", "SURF", "ORB"],
      icon: "🔍",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Keypoint extraction", "Descriptor matching", "Robust estimation"],
      isAnimated: false,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 glow-text">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI and computer vision solutions showcasing advanced algorithms and real-world applications
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`
                  glow-border bg-gray-900/50 backdrop-blur-sm card-3d cursor-pointer
                  transition-all duration-500 hover:scale-105
                  ${hoveredProject === index ? "glow-border-purple" : ""}
                `}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardContent className="p-6">
                  {project.isAnimated && (
                    <div className="relative h-24 mb-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg overflow-hidden">
                      {/* Ping-Pong Animation */}
                      {project.animationType === "pingpong" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-60"></div>
                          <div className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-white rounded-full shadow-lg animate-ping-pong-ball">
                            <div className="absolute inset-0 bg-cyan-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute left-4 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-paddle-left shadow-lg shadow-cyan-400/50"></div>
                          <div className="absolute right-4 w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full animate-paddle-right shadow-lg shadow-blue-400/50"></div>
                          <div className="absolute top-2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-particle-1 opacity-60"></div>
                          <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-particle-2 opacity-60"></div>
                          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-particle-3 opacity-80"></div>
                        </div>
                      )}

                      {/* GAN Animation */}
                      {project.animationType === "gan" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute left-4 top-4 w-2 h-2 bg-purple-400 rounded-full animate-neural-node-1 shadow-lg shadow-purple-400/50"></div>
                          <div className="absolute left-4 bottom-4 w-2 h-2 bg-pink-400 rounded-full animate-neural-node-2 shadow-lg shadow-pink-400/50"></div>
                          <div className="absolute right-4 top-4 w-2 h-2 bg-purple-500 rounded-full animate-neural-node-3 shadow-lg shadow-purple-500/50"></div>
                          <div className="absolute right-4 bottom-4 w-2 h-2 bg-pink-500 rounded-full animate-neural-node-4 shadow-lg shadow-pink-500/50"></div>
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg animate-gan-processor shadow-lg shadow-purple-500/30">
                            <div className="absolute inset-1 bg-gray-900 rounded opacity-80"></div>
                            <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-pulse"></div>
                          </div>
                          <div className="absolute top-4 left-6 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-data-flow-1"></div>
                          <div className="absolute bottom-4 left-6 w-16 h-0.5 bg-gradient-to-r from-pink-400 to-transparent animate-data-flow-2"></div>
                          <div className="absolute top-4 right-6 w-16 h-0.5 bg-gradient-to-l from-purple-500 to-transparent animate-data-flow-3"></div>
                          <div className="absolute bottom-4 right-6 w-16 h-0.5 bg-gradient-to-l from-pink-500 to-transparent animate-data-flow-4"></div>
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-purple-300 to-pink-300 rounded animate-generated-image-1 opacity-70"></div>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-pink-300 to-purple-300 rounded animate-generated-image-2 opacity-70"></div>
                          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-gan-particle-1 opacity-60"></div>
                          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-gan-particle-2 opacity-60"></div>
                          <div className="absolute top-3/4 left-3/4 w-0.5 h-0.5 bg-white rounded-full animate-gan-particle-3 opacity-80"></div>
                        </div>
                      )}

                      {/* Resume Optimizer Animation */}
                      {project.animationType === "resume" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute left-4 w-12 h-16 bg-gradient-to-b from-emerald-400/30 to-teal-400/30 rounded border border-emerald-400/50 animate-resume-doc">
                            <div className="absolute top-2 left-1 right-1 h-0.5 bg-emerald-400 rounded animate-text-line-1"></div>
                            <div className="absolute top-4 left-1 right-1 h-0.5 bg-teal-400 rounded animate-text-line-2"></div>
                            <div className="absolute top-6 left-1 right-1 h-0.5 bg-emerald-400 rounded animate-text-line-3"></div>
                          </div>
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ai-processor shadow-lg shadow-emerald-500/30">
                            <div className="absolute inset-1 bg-gray-900 rounded-full opacity-80"></div>
                            <div className="absolute inset-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute right-4 w-12 h-16 bg-gradient-to-b from-teal-400/30 to-emerald-400/30 rounded border border-teal-400/50 animate-optimized-resume">
                            <div className="absolute top-2 left-1 right-1 h-0.5 bg-teal-400 rounded animate-optimized-line-1"></div>
                            <div className="absolute top-4 left-1 right-1 h-0.5 bg-emerald-400 rounded animate-optimized-line-2"></div>
                            <div className="absolute top-6 left-1 right-1 h-0.5 bg-teal-400 rounded animate-optimized-line-3"></div>
                          </div>
                          <div className="absolute top-2 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-keyword-particle-1 opacity-60"></div>
                          <div className="absolute bottom-2 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-keyword-particle-2 opacity-60"></div>
                        </div>
                      )}

                      {/* Vision Classifier Animation */}
                      {project.animationType === "vision" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded border border-blue-400/50 animate-input-image">
                            <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-indigo-300 rounded opacity-60"></div>
                          </div>
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded animate-vision-processor shadow-lg shadow-blue-500/30">
                            <div className="absolute inset-0.5 bg-gray-900 rounded opacity-80"></div>
                            <div className="absolute inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded animate-pulse"></div>
                          </div>
                          <div className="absolute right-4 top-2 w-6 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-classification-1 opacity-80">
                            <div className="absolute left-1 top-0.5 w-1 h-1 bg-white rounded-full"></div>
                          </div>
                          <div className="absolute right-4 top-6 w-4 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-classification-2 opacity-60">
                            <div className="absolute left-1 top-0.5 w-1 h-1 bg-white rounded-full"></div>
                          </div>
                          <div className="absolute right-4 bottom-2 w-5 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-classification-3 opacity-70">
                            <div className="absolute left-1 top-0.5 w-1 h-1 bg-white rounded-full"></div>
                          </div>
                          <div className="absolute top-1/4 left-1/3 w-0.5 h-0.5 bg-blue-400 rounded-full animate-vision-particle-1 opacity-80"></div>
                          <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-vision-particle-2 opacity-80"></div>
                        </div>
                      )}

                      {/* Chatbot Animation */}
                      {project.animationType === "chatbot" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute left-2 top-2 w-8 h-4 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-lg border border-violet-400/50 animate-user-message">
                            <div className="absolute top-1 left-1 right-1 h-0.5 bg-violet-400 rounded animate-typing-1"></div>
                            <div className="absolute bottom-1 left-1 w-4 h-0.5 bg-purple-400 rounded animate-typing-2"></div>
                          </div>
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-chatbot-brain shadow-lg shadow-violet-500/30">
                            <div className="absolute inset-1 bg-gray-900 rounded-full opacity-80"></div>
                            <div className="absolute inset-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute right-2 bottom-2 w-8 h-4 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-lg border border-purple-400/50 animate-bot-response">
                            <div className="absolute top-1 left-1 right-1 h-0.5 bg-purple-400 rounded animate-response-1"></div>
                            <div className="absolute bottom-1 left-1 w-6 h-0.5 bg-violet-400 rounded animate-response-2"></div>
                          </div>
                          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-violet-400 rounded-full animate-chat-particle-1 opacity-60"></div>
                          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-chat-particle-2 opacity-60"></div>
                        </div>
                      )}

                      {/* Freelancer Assistant Animation */}
                      {project.animationType === "freelancer" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute left-2 w-6 h-8 bg-gradient-to-b from-orange-400/30 to-amber-400/30 rounded border border-orange-400/50 animate-client-brief">
                            <div className="absolute top-1 left-0.5 right-0.5 h-0.5 bg-orange-400 rounded"></div>
                            <div className="absolute top-3 left-0.5 right-0.5 h-0.5 bg-amber-400 rounded"></div>
                            <div className="absolute top-5 left-0.5 w-3 h-0.5 bg-orange-400 rounded"></div>
                          </div>
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded animate-proposal-generator shadow-lg shadow-orange-500/30">
                            <div className="absolute inset-0.5 bg-gray-900 rounded opacity-80"></div>
                            <div className="absolute inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded animate-pulse"></div>
                          </div>
                          <div className="absolute right-2 w-6 h-8 bg-gradient-to-b from-amber-400/30 to-orange-400/30 rounded border border-amber-400/50 animate-generated-proposal">
                            <div className="absolute top-1 left-0.5 right-0.5 h-0.5 bg-amber-400 rounded animate-proposal-line-1"></div>
                            <div className="absolute top-3 left-0.5 right-0.5 h-0.5 bg-orange-400 rounded animate-proposal-line-2"></div>
                            <div className="absolute top-5 left-0.5 right-0.5 h-0.5 bg-amber-400 rounded animate-proposal-line-3"></div>
                          </div>
                          <div className="absolute top-2 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-skill-match-1 opacity-60"></div>
                          <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-skill-match-2 opacity-60"></div>
                        </div>
                      )}

                      {/* Music Mood Tagger Animation */}
                      {project.animationType === "music" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute left-4 w-6 h-6 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full border border-pink-400/50 animate-audio-wave">
                            <div className="absolute inset-1 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-60 animate-pulse"></div>
                          </div>
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-mood-analyzer shadow-lg shadow-pink-500/30">
                            <div className="absolute inset-1 bg-gray-900 rounded-full opacity-80"></div>
                            <div className="absolute inset-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute right-2 top-2 w-4 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-mood-tag-1 opacity-80">
                            <div className="absolute inset-0.5 bg-white rounded-full opacity-60"></div>
                          </div>
                          <div className="absolute right-2 top-6 w-3 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-mood-tag-2 opacity-70">
                            <div className="absolute inset-0.5 bg-white rounded-full opacity-60"></div>
                          </div>
                          <div className="absolute right-2 bottom-2 w-5 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-mood-tag-3 opacity-60">
                            <div className="absolute inset-0.5 bg-white rounded-full opacity-60"></div>
                          </div>
                          <div className="absolute top-1/4 left-1/4 w-0.5 h-2 bg-pink-400 rounded-full animate-audio-bar-1 opacity-80"></div>
                          <div className="absolute top-1/3 left-1/3 w-0.5 h-3 bg-rose-400 rounded-full animate-audio-bar-2 opacity-80"></div>
                          <div className="absolute top-1/2 left-2/5 w-0.5 h-1 bg-pink-400 rounded-full animate-audio-bar-3 opacity-80"></div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <div className={`text-4xl mr-4 p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                          <Zap className="h-3 w-3 mr-2 text-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs glow-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 glow-border hover:bg-blue-500/10">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 glow-border hover:bg-purple-500/10">
                      <Eye className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="glow-border bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 glow-text">Ready to Collaborate?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let's build the next generation of AI and computer vision solutions together. I'm always excited to
                  work on challenging projects.
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 pulse-glow">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
