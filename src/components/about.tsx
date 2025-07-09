"use client"

import { Button } from "./ui/button"
import { Code, Zap, Palette, Settings, Download, Shield, Globe } from "lucide-react"

export default function About() {
  return (
    <div id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800/50 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 sm:px-4 py-2 text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Code className="w-3 h-3 sm:w-4 sm:h-4" />
            About ANSICA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transforming Digital Art
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed px-4 max-w-3xl mx-auto">
            ANSICA revolutionizes the way we create and experience ASCII art, bringing together cutting-edge algorithms
            and intuitive design to make text-based art accessible to everyone.
          </p>
        </div>

       

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Lightning Fast</h4>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Advanced algorithms process your images in seconds, delivering high-quality ASCII art without the wait.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Multiple Styles</h4>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Choose from 15+ different ASCII art styles, from classic monospace to modern Unicode characters.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-purple-500/50 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Customizable</h4>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Fine-tune contrast, brightness, and character density to achieve the perfect ASCII representation.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Export Options</h4>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Export your ASCII art as text files, images, or copy directly to clipboard for immediate use.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-pink-500/50 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Privacy First</h4>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Your images are processed locally in your browser. We never store or transmit your personal content.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-green-500/50 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Open Source</h4>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Built with transparency in mind. Contribute to the project and help shape the future of ASCII art.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-slate-700">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            To democratize digital art creation by making ASCII art generation accessible, powerful, and enjoyable for
            creators of all skill levels. We're building tools that celebrate the beauty of simplicity and the artistry
            found in constraints.
          </p>
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto max-w-xs">
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
