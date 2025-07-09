"use client"

import { useState, useEffect } from "react"
import { Play, CirclePower, Sparkles, Circle } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = [
    "Transform images into ASCII art",
    "Create stunning text-based visuals",
    "Generate retro terminal graphics",
    "Convert photos to character art",
  ]

  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentText.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, textIndex, texts])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                ASCII Art Generator
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  ANSICA
                </span>
              </h1>

              <div className="h-16 flex items-center">
                <p className="text-xl lg:text-2xl text-slate-300 font-mono">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Convert your images into beautiful ASCII art with our advanced algorithm. Perfect for terminal
                enthusiasts, developers, and digital artists.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-semibold transition"
              >
                <CirclePower className="w-5 h-5 mr-2" />
                Get started
              </button>
              <button
                className="inline-flex items-center justify-center rounded-md border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg bg-transparent transition"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">50K+</div>
                <div className="text-sm text-slate-400">Images Converted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-slate-400">Art Styles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-slate-400">Free to Use</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
              <div className="aspect-video bg-slate-900 flex items-center justify-center relative">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/placeholder.svg?height=400&width=600"
                >
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white p-3 transition"
                  >
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Terminal-like Header */}
              <div className="absolute top-0 left-0 right-0 bg-slate-800/90 backdrop-blur-sm border-b border-slate-700 p-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-slate-400 font-mono ml-4">ansica-demo.mp4</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  )
}
