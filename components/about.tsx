import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <Card className="glow-border bg-gray-900/50 backdrop-blur-sm card-3d">
            <CardContent className="p-8">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Driven software engineer with a Master's in Artificial Intelligence and a Bachelor's in Computer/Software
                  Engineering, equipped with expertise in computer vision, deep learning, and reinforcement learning.
                </p>

                <p>
                  Experienced in designing and deploying machine learning models, creating data-driven solutions, and
                  optimizing software applications. Skilled in balancing technical work with people-centered roles,
                  including tutoring and caregiving, demonstrating adaptability and strong interpersonal skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700">
                  <div className="text-center">
                    <h4 className="text-blue-400 font-semibold mb-2">Location</h4>
                    <p>Norway</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-purple-400 font-semibold mb-2">Phone</h4>
                    <p>+4797394674</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-blue-400 font-semibold mb-2">Languages</h4>
                    <p>English, Norwegian, Amharic</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
