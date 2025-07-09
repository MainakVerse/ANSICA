"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Mail, MapPin, Send, Github, Twitter, Linkedin, MessageSquare, Clock, Users } from "lucide-react"

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // You would typically send the data to your backend here
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "anshika07281@gmail.com",
      action: "mailto:anshika07281@gmail.com",
      color: "emerald",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "#",
      color: "cyan",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Contribute to the project",
      contact: "github.com/MainakVerse/Ansica",
      action: "https://github.com/MainakVerse/Ansica",
      color: "purple",
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/ansica", label: "Twitter" },
    { icon: Github, href: "https://github.com/ansica", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/ansica", label: "LinkedIn" },
  ]

  const officeInfo = [
    {
      icon: Clock,
      title: "Response Time",
      info: "Within 24 hours",
    },
    {
      icon: Users,
      title: "Support Team",
      info: "Available worldwide",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      info: "San Francisco, CA",
    },
  ]

  return (
    <div
      id="contacts"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
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
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 sm:px-4 py-2 text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed px-4 max-w-3xl mx-auto">
            Have questions about ANSICA? Need support? Want to contribute? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const colorClasses = {
              emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
              cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/50",
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/50",
            }

            return (
              <a
                key={index}
                href={method.action}
                className="group bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${colorClasses[method.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-2">{method.description}</p>
                <p className="text-slate-300 font-medium text-sm sm:text-base">{method.contact}</p>
              </a>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Contact Form */}
          <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 sm:space-y-8">
            {/* Office Info */}
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {officeInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">{info.title}</h4>
                        <p className="text-slate-400 text-sm sm:text-base">{info.info}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                  )
                })}
              </div>
              <p className="text-slate-400 text-sm mt-4">Stay updated with the latest ANSICA news and updates.</p>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Quick Help</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                  → How to generate ASCII art?
                </a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                  → Supported image formats
                </a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                  → API documentation
                </a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                  → Contributing guidelines
                </a>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  )
}
