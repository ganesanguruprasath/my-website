"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Settings,
  FileText,
  Coffee,
  Sparkles,
} from "lucide-react"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "React-Bootstrap",
      "RESTful APIs",
      "React Router",
      "TypeScript",
      "Redux",
    ],
    backend: ["Node.js", "Express JS", "MySQL"],
    tools: ["GitHub", "GitLab", "Jenkins"],
    cloud: ["Azure AD", "OAuth2", "MSAL"],
    cms: ["WordPress"],
    office: ["Excel", "Word", "PowerPoint"],
  }

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: skills.frontend,
      color: "bg-indigo-100 text-indigo-800",
      doodle: "frontend-doodle",
    },
    {
      title: "Backend",
      icon: Database,
      skills: skills.backend,
      color: "bg-emerald-100 text-emerald-800",
      doodle: "backend-doodle",
    },
    {
      title: "Tools",
      icon: Settings,
      skills: skills.tools,
      color: "bg-violet-100 text-violet-800",
      doodle: "tools-doodle",
    },
    { title: "Cloud", icon: Cloud, skills: skills.cloud, color: "bg-amber-100 text-amber-800", doodle: "cloud-doodle" },
    { title: "CMS", icon: FileText, skills: skills.cms, color: "bg-rose-100 text-rose-800", doodle: "cms-doodle" },
    {
      title: "Office Tools",
      icon: FileText,
      skills: skills.office,
      color: "bg-sky-100 text-sky-800",
      doodle: "office-doodle",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Floating doodles */}
      <div
        className="fixed top-20 left-10 opacity-20 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <DoodleCode />
      </div>
      <div
        className="fixed top-60 right-10 opacity-20 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <DoodleIdea />
      </div>
      <div
        className="fixed bottom-20 left-20 opacity-20 hidden lg:block"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      >
        <DoodleLaptop />
      </div>

      {/* Header */}
      <header className="bg-white shadow-md border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <DoodlePattern />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute -top-6 -left-6 transform -rotate-12 text-purple-400 opacity-70">
                <DoodleArrow />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Guruprasath Ganesan</h1>
              <p className="text-xl text-gray-600 mt-2">Web Developer</p>
              <div className="absolute top-0 right-0 text-amber-400 opacity-70 transform rotate-12">
                <DoodleStar />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Pondicherry</span>
              </div>
              <div className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>6383570588</span>
              </div>
              <div className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:guruprasathganesan99@gmail.com" className="hover:text-purple-600 transition-colors">
                  guruprasathganesan99@gmail.com
                </a>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 border-purple-200"
              >
                <a href="https://www.linkedin.com/in/guruprasasth-ga" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2 text-purple-600" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 border-blue-200"
              >
                <a href="https://github.com/ganesanguruprasath" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2 text-teal-600" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {/* Summary Section */}
        <section className="relative">
          <div className="absolute -top-10 -left-10 text-purple-300 opacity-70 hidden md:block">
            <DoodleCircle />
          </div>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                <Sparkles className="h-6 w-6 text-amber-500" />
                Professional Summary
                <Sparkles className="h-6 w-6 text-amber-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Web developer with over 2 years of experience in building clean, responsive, and high-performing user interfaces using React, HTML, CSS, and JavaScript. Proficient in developing scalable frontend solutions with efficient state management and seamless API integration. Experienced with backend technologies like Node.js and MySQL, enabling end-to-end application development. Passionate about creating intuitive user experiences and writing clean, maintainable code. Constantly learning and refining my craft to stay updated with modern web development trends.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="relative">
          <div className="absolute -top-10 -right-10 text-teal-300 opacity-70 hidden md:block">
            <DoodleSquiggle />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
              Technical Skills
              <div className="absolute -bottom-2 left-0 w-full h-2">
                {/* <DoodleUnderline /> */}
              </div>
            </h2>
            <p className="text-gray-600 mt-4">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                >
                  <div className="absolute -bottom-10 -right-10 text-gray-100 opacity-20 group-hover:opacity-30 transition-opacity">
                    {category.title === "Frontend" && <DoodleBrowser />}
                    {category.title === "Backend" && <DoodleServer />}
                    {category.title === "Tools" && <DoodleTools />}
                    {category.title === "Cloud" && <DoodleCloud />}
                    {category.title === "CMS" && <DoodleDocument />}
                    {category.title === "Office Tools" && <DoodleOffice />}
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`${category.color} transition-all duration-300 hover:scale-105`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative">
          <div className="absolute -top-10 -left-10 text-amber-300 opacity-70 hidden md:block">
            <DoodleSpiral />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
              Featured Projects
              <div className="absolute -bottom-2 left-0 w-full h-2">
                {/* <DoodleUnderline /> */}
              </div>
            </h2>
            <p className="text-gray-600 mt-4">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute -bottom-16 -right-16 text-amber-100 opacity-20 group-hover:opacity-30 transition-opacity">
                <DoodleCoffee />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-6 h-6 text-amber-600" />
                  <CardTitle className="text-xl">Coffee Shop E-commerce Storefront</CardTitle>
                </div>
                <CardDescription className="text-base">
                  A modern e-commerce platform built with ReactJS featuring a responsive design, persistent cart
                  functionality, and scalable architecture.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["ReactJS", "Context API", "React Hooks", "Local Storage"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-amber-50 text-amber-700 border-amber-200 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Responsive UI design</li>
                    <li>• Persistent cart state</li>
                    <li>• Scalable architecture</li>
                    <li>• Modern React patterns</li>
                  </ul>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                >
                  <a href="https://ganesanguruprasath.github.io/home/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Placeholder for future projects */}
            <Card className="border-0 shadow-lg border-dashed border-gray-300 bg-gray-50/80 backdrop-blur-sm group hover:bg-gray-50/90 transition-all duration-300">
              <CardContent className="flex items-center justify-center h-full min-h-[300px] relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 text-gray-200 opacity-30">
                  <DoodleRocket />
                </div>
                <div className="text-center text-gray-500 relative z-10">
                  <Code className="w-12 h-12 mx-auto mb-4 opacity-50 group-hover:text-purple-500 transition-colors" />
                  <p className="text-lg font-medium">More Projects Coming Soon</p>
                  <p className="text-sm">Stay tuned for additional portfolio pieces</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Connect with Me Section */}
        <section className="relative">
          <div className="absolute -top-10 -right-10 text-purple-300 opacity-70 hidden md:block">
            <DoodleHeart />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
              Connect with Me
              <div className="absolute -bottom-2 left-0 w-full h-2">
                {/* <DoodleUnderline /> */}
              </div>
            </h2>
            <p className="text-gray-600 mt-4">Let's build something amazing together!</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 overflow-hidden relative group">
              <div className="absolute -bottom-20 -right-20 text-purple-100 opacity-20 group-hover:opacity-30 transition-opacity">
                <DoodleMessage />
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to collaborate?</h3>
                    <p className="text-gray-600 mb-6">
                      I'm always excited to work on new projects and connect with fellow developers and potential
                      clients.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-100 hover:border-purple-200 transition-colors group/item">
                      <div className="flex items-center justify-center gap-3">
                        <Mail className="w-5 h-5 text-purple-600" />
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Email me at</p>
                          <a
                            href="mailto:guruprasathganesan99@gmail.com"
                            className="text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover/item:underline"
                          >
                            guruprasathganesan99@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-100 hover:border-blue-200 transition-colors group/item">
                      <div className="flex items-center justify-center gap-3">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Connect on LinkedIn</p>
                          <a
                            href="https://www.linkedin.com/in/guruprasasth-ga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover/item:underline"
                          >
                            linkedin.com/in/guruprasasth-ga
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      <a href="mailto:guruprasathganesan99@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-blue-200 hover:bg-blue-50">
                      <a href="https://www.linkedin.com/in/guruprasasth-ga" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Profile
                      </a>
                    </Button>
                  </div>

                  {/* <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Usually responds within 24 hours
                      <Sparkles className="w-4 h-4" />
                    </p>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-10">
          <DoodleWave />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <p className="text-gray-600">© 2024 Guruprasath Dev. Built with React, TypeScript, and Tailwind CSS with AI.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/guruprasasth-ga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ganesanguruprasath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:guruprasathganesan99@gmail.com"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Doodle Components
const DoodleArrow = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 25C25 10 35 20 40 35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M35 30L40 35L45 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DoodleStar = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 5L30 20L45 25L30 30L25 45L20 30L5 25L20 20L25 5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DoodleCircle = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 10" />
  </svg>
)

const DoodleSquiggle = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 50C20 30 30 70 40 50C50 30 60 70 70 50C80 30 90 70 100 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const DoodleSpiral = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 10C70 10 80 20 80 40C80 60 70 70 50 70C30 70 20 60 20 40C20 20 30 10 50 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M50 25C60 25 65 30 65 40C65 50 60 55 50 55C40 55 35 50 35 40C35 30 40 25 50 25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const DoodleUnderline = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path d="M0 5C20 0 40 10 60 5C80 0 100 10 100 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodlePattern = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="5" fill="currentColor" />
    <circle cx="60" cy="20" r="5" fill="currentColor" />
    <circle cx="100" cy="20" r="5" fill="currentColor" />
    <circle cx="140" cy="20" r="5" fill="currentColor" />
    <circle cx="180" cy="20" r="5" fill="currentColor" />
    <circle cx="20" cy="60" r="5" fill="currentColor" />
    <circle cx="60" cy="60" r="5" fill="currentColor" />
    <circle cx="100" cy="60" r="5" fill="currentColor" />
    <circle cx="140" cy="60" r="5" fill="currentColor" />
    <circle cx="180" cy="60" r="5" fill="currentColor" />
    <circle cx="20" cy="100" r="5" fill="currentColor" />
    <circle cx="60" cy="100" r="5" fill="currentColor" />
    <circle cx="100" cy="100" r="5" fill="currentColor" />
    <circle cx="140" cy="100" r="5" fill="currentColor" />
    <circle cx="180" cy="100" r="5" fill="currentColor" />
    <circle cx="20" cy="140" r="5" fill="currentColor" />
    <circle cx="60" cy="140" r="5" fill="currentColor" />
    <circle cx="100" cy="140" r="5" fill="currentColor" />
    <circle cx="140" cy="140" r="5" fill="currentColor" />
    <circle cx="180" cy="140" r="5" fill="currentColor" />
    <circle cx="20" cy="180" r="5" fill="currentColor" />
    <circle cx="60" cy="180" r="5" fill="currentColor" />
    <circle cx="100" cy="180" r="5" fill="currentColor" />
    <circle cx="140" cy="180" r="5" fill="currentColor" />
    <circle cx="180" cy="180" r="5" fill="currentColor" />
  </svg>
)

const DoodleWave = () => (
  <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 25C20 10 40 40 60 25C80 10 100 40 120 25C140 10 160 40 180 25C200 10 220 40 240 25"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const DoodleBrowser = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="80" height="60" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="35" x2="90" y2="35" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="27.5" r="2.5" fill="currentColor" />
    <circle cx="30" cy="27.5" r="2.5" fill="currentColor" />
    <circle cx="40" cy="27.5" r="2.5" fill="currentColor" />
    <path d="M25 50L45 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 60L75 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 70L65 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleServer = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="20" width="50" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="25" y="42.5" width="50" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="25" y="65" width="50" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="35" cy="27.5" r="2.5" fill="currentColor" />
    <circle cx="35" cy="50" r="2.5" fill="currentColor" />
    <circle cx="35" cy="72.5" r="2.5" fill="currentColor" />
  </svg>
)

const DoodleTools = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 65L65 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="70" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="70" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M40 25L60 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 75L60 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleCloud = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 60C21.7157 60 15 53.2843 15 45C15 36.7157 21.7157 30 30 30C30.9474 30 31.8724 30.0982 32.7662 30.2873C36.4214 23.9737 43.7277 20 52 20C63.0457 20 72 28.9543 72 40C72 41.0557 71.9254 42.0941 71.7822 43.1111C77.2707 44.7802 81 49.9049 81 56C81 63.732 74.732 70 67 70H30Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M40 80L40 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 85L50 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 80L60 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleDocument = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 20H50L70 40V80H30V20Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M50 20V40H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 55H60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 65H60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleOffice = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M20 40H80" stroke="currentColor" strokeWidth="2" />
    <path d="M30 50H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 60H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 30V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 30V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleCoffee = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 50H100V90C100 101.046 91.0457 110 80 110H60C48.9543 110 40 101.046 40 90V50Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M40 60H100" stroke="currentColor" strokeWidth="2" />
    <path
      d="M100 70H110C115.523 70 120 65.5228 120 60V60C120 54.4772 115.523 50 110 50H100"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M60 110C60 120 70 130 70 130" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M80 110C80 120 70 130 70 130" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 40C50 40 60 30 70 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M70 40C70 40 80 30 90 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleRocket = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M75 30C75 30 85 50 85 80L75 90L65 80C65 50 75 30 75 30Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="75" cy="60" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M65 80L55 90L65 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M85 80L95 90L85 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M65 100L75 110L85 100"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M60 40L50 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M90 40L100 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleCode = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 60L30 75L50 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M100 60L120 75L100 90"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M70 40L80 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleIdea = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="75" cy="65" r="25" stroke="currentColor" strokeWidth="2" />
    <path d="M65 95L85 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M70 105L80 105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M75 40L75 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M100 65L110 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 65L50 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M93 47L100 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 40L57 47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M65 65L75 75L85 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DoodleLaptop = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 50H110V90H40V50Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M30 90H120V100H30V90Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="75" cy="95" r="2" fill="currentColor" />
    <path d="M60 70L70 80L80 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DoodleHeart = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 85C50 85 20 65 20 40C20 30 30 20 40 20C45 20 50 25 50 25C50 25 55 20 60 20C70 20 80 30 80 40C80 65 50 85 50 85Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M35 35L40 40L50 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DoodleMessage = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 40H120V90H70L50 110V90H30V40Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M45 60H105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M45 75H85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="95" cy="25" r="3" fill="currentColor" />
    <circle cx="105" cy="30" r="2" fill="currentColor" />
    <circle cx="110" cy="20" r="2" fill="currentColor" />
  </svg>
)
