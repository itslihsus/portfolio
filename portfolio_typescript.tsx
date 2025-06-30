"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ChevronDown, Code, Shield, Users, GraduationCap, MapPin } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "leadership", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Phishing Website Detection using ML",
      description:
        "Machine learning model to detect phishing websites using various URL and content features with high accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
      github: "https://github.com/sushilpaudel",
    },
    {
      title: "Agriculture Platform App",
      description:
        "Mobile application for farmers to connect with buyers, built with Firebase for real-time data management.",
      tech: ["Firebase", "React Native", "JavaScript", "Cloud Firestore"],
      github: "https://github.com/sushilpaudel",
    },
    {
      title: "SFTP Setup on VMware",
      description: "Secure file transfer protocol implementation on virtual machines for secure data transmission.",
      tech: ["VMware", "Linux", "SSH", "Network Security"],
      github: "https://github.com/sushilpaudel",
    },
    {
      title: "Django Web Applications",
      description:
        "Full-stack web applications built with Django framework featuring user authentication and REST APIs.",
      tech: ["Django", "Python", "PostgreSQL", "REST API"],
      github: "https://github.com/sushilpaudel",
    },
  ]

  const skills = {
    Programming: ["Python", "Java", "JavaScript", "C++"],
    "Web Development": ["Django", "REST API", "HTML/CSS", "React"],
    Cybersecurity: ["Kali Linux", "Wireshark", "Sophos Firewall", "Ethical Hacking"],
    "Tools & Technologies": ["VMware", "Cisco Packet Tracer", "Git", "Firebase"],
  }

  const leadership = [
    {
      role: "Technical Lead",
      organization: "Computer Engineering Society",
      period: "2023 - Present",
      description: "Leading technical workshops and cybersecurity awareness programs for students.",
    },
    {
      role: "Public Speaker",
      organization: "Tech Conferences Nepal",
      period: "2022 - Present",
      description: "Speaking at various tech conferences about cybersecurity and ethical hacking.",
    },
    {
      role: "Volunteer Coordinator",
      organization: "Cybersecurity Awareness Campaign",
      period: "2022 - 2023",
      description: "Organized community workshops on digital security and safe internet practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Sushil Paudel</div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "leadership", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-emerald-600 font-medium" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">SP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Sushil Paudel</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Engineer | Cybersecurity Enthusiast | Public Speaker
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Computer Engineering student from Nepal passionate about cybersecurity, ethical hacking, and building
              secure digital solutions.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Get to know more about my journey and interests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Bachelor of Computer Engineering</strong>
                </p>
                <p className="text-gray-500 mb-4">
                  Currently pursuing my degree with focus on cybersecurity and software development
                </p>

                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Nepal</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interests & Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cybersecurity & Ethical Hacking</h4>
                    <p className="text-gray-600">
                      Passionate about identifying vulnerabilities and securing digital systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Backend Development</h4>
                    <p className="text-gray-600">Building robust server-side applications and APIs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Networking & Infrastructure</h4>
                    <p className="text-gray-600">Designing and implementing secure network architectures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent technical work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">My involvement in community and leadership roles</p>
          </div>

          <div className="space-y-8">
            {leadership.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{role.role}</CardTitle>
                      <CardDescription className="text-lg">{role.organization}</CardDescription>
                    </div>
                    <Badge variant="outline">{role.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's connect and discuss opportunities in cybersecurity and technology
          </p>

          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              <a href="mailto:sushil@example.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              <a
                href="https://linkedin.com/in/sushilpaudel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              <a
                href="https://github.com/sushilpaudel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Sushil Paudel. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
