"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Badge, Button, Nav, Navbar } from "react-bootstrap"
import {
  EnvelopeFill,
  TelephoneFill,
  GeoAltFill,
  Linkedin,
  Github,
  BoxArrowUpRight,
  CodeSlash,
  Database,
  CloudFill,
  GearFill,
  FileTextFill,
  CupHotFill,
  StarFill,
} from "react-bootstrap-icons"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App: React.FC = () => {
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
      icon: CodeSlash,
      skills: skills.frontend,
      color: "primary",
      bgColor: "rgba(13, 110, 253, 0.1)",
    },
    {
      title: "Backend",
      icon: Database,
      skills: skills.backend,
      color: "success",
      bgColor: "rgba(25, 135, 84, 0.1)",
    },
    {
      title: "Tools",
      icon: GearFill,
      skills: skills.tools,
      color: "warning",
      bgColor: "rgba(255, 193, 7, 0.1)",
    },
    {
      title: "Cloud",
      icon: CloudFill,
      skills: skills.cloud,
      color: "info",
      bgColor: "rgba(13, 202, 240, 0.1)",
    },
    {
      title: "CMS",
      icon: FileTextFill,
      skills: skills.cms,
      color: "danger",
      bgColor: "rgba(220, 53, 69, 0.1)",
    },
    {
      title: "Office Tools",
      icon: FileTextFill,
      skills: skills.office,
      color: "secondary",
      bgColor: "rgba(108, 117, 125, 0.1)",
    },
  ]

  const DoodleCodes: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" style={{ color: "#10b981", opacity: 0.2 }}>
      <path d="M15 10 L5 20 L15 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M25 10 L35 20 L25 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )

  return (
    <div className="app">
      {/* Floating Doodles */}
      <div className="floating-doodle doodle-1" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <DoodleCode />
      </div>
      <div className="floating-doodle doodle-2" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <DoodleIdea />
      </div>
      <div className="floating-doodle doodle-3" style={{ transform: `translateY(${-scrollY * 0.15}px)` }}>
        <DoodleLaptop />
      </div>

      {/* Navigation */}
      {/* <Navbar bg="white" expand="lg" className="shadow-sm fixed-top"> */}
      <Navbar expand="lg" className="shadow-sm fixed-top" style={{ backgroundColor: "#ffc107a8" }}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-primary">
            Guruprasath Ganesan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header Section */}
      <section id="home" className="hero-section">
        <div className="hero-pattern"></div>
        <Container className="position-relative">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="hero-content">
                <div className="position-relative d-inline-block">
                  <div className="doodle-arrow">
                    <DoodleArrow />
                  </div>
                  <h1 className="display-3 fw-bold text-dark mb-3">Guruprasath Ganesan</h1>
                  <div className="doodle-star">
                    <DoodleStar />
                  </div>
                </div>
                <p className="lead text-muted mb-4">Web Developer</p>

                <div className="contact-info mb-4">
                  <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
                    <span className="contact-item">
                      <GeoAltFill className="me-2 text-primary" />
                      Pondicherry
                    </span>
                    <span className="contact-item">
                      <TelephoneFill className="me-2 text-primary" />
                      6383570588
                    </span>
                    <span className="contact-item">
                      <EnvelopeFill className="me-2 text-primary" />
                      <a href="mailto:guruprasathganesan99@gmail.com" className="text-decoration-none">
                        guruprasathganesan99@gmail.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="outline-primary"
                    href="https://www.linkedin.com/in/guruprasasth-ga"
                    target="_blank"
                    className="social-btn"
                  >
                    <Linkedin className="me-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/ganesanguruprasath"
                    target="_blank"
                    className="social-btn"
                  >
                    <Github className="me-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-doodle">
                <DoodleCircle />
              </div>
              <Card className="shadow-lg border-0 glass-card">
                <Card.Body className="p-5 text-center">
                  <h2 className="mb-4 position-relative d-inline-block">
                    <StarFill className="text-warning me-2" />
                    Professional Summary
                    <StarFill className="text-warning ms-2" />
                    <div className="doodle-underline">
                      <DoodleUnderline />
                    </div>
                  </h2>
                  <p className="lead text-muted">
                    Web developer with over 2 years of experience in building clean, responsive, and high-performing user interfaces using React, HTML, CSS, and JavaScript. Proficient in developing scalable frontend solutions with efficient state management and seamless API integration. Experienced with backend technologies like Node.js and MySQL, enabling end-to-end application development. Passionate about creating intuitive user experiences and writing clean, maintainable code. Constantly learning and refining my craft to stay updated with modern web development trends.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <div className="section-doodle-right">
            <DoodleSquiggle />
          </div>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold position-relative d-inline-block">
                Technical Skills
                <div className="doodle-underline">
                  <DoodleUnderline />
                </div>
              </h2>
              <p className="text-muted mt-5">Technologies and tools I work with</p>
            </Col>
          </Row>

          <Row className="g-4">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Col lg={4} md={6} key={index}>
                  <Card
                    className="h-100 shadow-lg border-0 skill-card position-relative overflow-hidden"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    <div className="skill-doodle">
                      {category.title === "Frontend" && <DoodleBrowser />}
                      {category.title === "Backend" && <DoodleServer />}
                      {category.title === "Tools" && <DoodleTools />}
                      {category.title === "Cloud" && <DoodleCloud />}
                      {category.title === "CMS" && <DoodleDocument />}
                      {category.title === "Office Tools" && <DoodleOffice />}
                    </div>
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center mb-3">
                        <IconComponent className={`me-2 text-${category.color}`} size={24} />
                        {category.title}
                      </Card.Title>
                      <div className="d-flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} bg={category.color} className="skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <div className="section-doodle">
            <DoodleSpiral />
          </div>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold position-relative d-inline-block">
                Featured Projects
                <div className="doodle-underline">
                  <DoodleUnderline />
                </div>
              </h2>
              <p className="text-muted mt-5">Some of my recent work</p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 shadow-lg border-0 project-card position-relative overflow-hidden">
                {/* <div className="project-doodle">
                  <DoodleCoffee />
                </div> */}
                <Card.Body className="p-4">
                  <Card.Title className="d-flex align-items-center mb-3">
                    <CupHotFill className="me-2 text-warning" size={24} />
                    Coffee Shop E-commerce Storefront
                  </Card.Title>
                  <Card.Text className="text-muted mb-4">
                    A modern e-commerce platform built with ReactJS featuring a responsive design, persistent cart
                    functionality, and scalable architecture.
                  </Card.Text>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {["ReactJS", "Context API", "React Hooks", "Local Storage"].map((tech, index) => (
                        <Badge key={index} bg="warning" text="dark" className="tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Key Features:</h6>
                    <ul className="text-muted small">
                      <li>Responsive UI design</li>
                      <li>Persistent cart state</li>
                      <li>Scalable architecture</li>
                      <li>Modern React patterns</li>
                    </ul>
                  </div>

                  <Button
                    variant="warning"
                    href="https://ganesanguruprasath.github.io/home/"
                    target="_blank"
                    className="w-100 fw-bold"
                  >
                    <BoxArrowUpRight className="me-2" />
                    View Live Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 shadow-lg border-0 project-card position-relative overflow-hidden">
                {/* <div className="project-doodle">
                  <DoodleCodes />
                </div> */}
                <Card.Body className="p-4">
                  <Card.Title className="d-flex align-items-center mb-3">
                    <CupHotFill className="me-2 text-warning" size={24} />
                    Notes App - React + TypeScript
                  </Card.Title>
                  <Card.Text className="text-muted mb-4">
                    A clean and intuitive notes application built with React and TypeScript. My first dive into TypeScript, featuring note creation, color customization, and persistent storage functionality.
                  </Card.Text>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {["ReactJS", "TypeScript", "React Hooks", "React-Bootstrap"].map((tech, index) => (
                        <Badge key={index} bg="primary" className="tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Key Features:</h6>
                    <ul className="text-muted small">
                      <li>Responsive UI design</li>
                      <li>Persistent cart state</li>
                      <li>Scalable architecture</li>
                      <li>Modern React patterns</li>
                    </ul>
                  </div>

                  <Button
                    variant="primary"
                    href="https://reactntypescript-app-one-notes.vercel.app/"
                    target="_blank"
                    className="w-100 fw-bold"
                  >
                    <BoxArrowUpRight className="me-2" />
                    View Live Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 shadow-lg border-0 border-dashed coming-soon-card position-relative overflow-hidden">
                <div className="project-doodle">
                  <DoodleRocket />
                </div>
                <Card.Body className="d-flex align-items-center justify-content-center text-center p-4">
                  <div>
                    <CodeSlash size={48} className="text-muted mb-3 opacity-50" />
                    <h5 className="fw-bold text-muted">More Projects Coming Soon</h5>
                    <p className="text-muted small">Stay Tuned for additional portfolio pieces</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Connect Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <div className="section-doodle-right">
            <DoodleHeart />
          </div>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold position-relative d-inline-block">
                Connect with Me
                <div className="doodle-underline">
                  <DoodleUnderline />
                </div>
              </h2>
              <p className="text-muted mt-5">Let's build something amazing together!</p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow-xl border-0 connect-card position-relative overflow-hidden">
                <div className="connect-doodle">
                  <DoodleMessage />
                </div>
                <Card.Body className="p-5 text-center">
                  <div className="connect-icon mb-4">
                    <div className="icon-wrapper">
                      <EnvelopeFill size={32} className="text-white" />
                    </div>
                  </div>

                  <h3 className="fw-bold mb-3">Ready to collaborate?</h3>
                  <p className="text-muted mb-5">
                    I'm always excited to work on new projects and connect with fellow developers and potential clients.
                  </p>

                  <Row className="g-3 mb-4">
                    <Col md={6}>
                      <Card className="contact-method-card">
                        <Card.Body className="p-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <EnvelopeFill className="text-primary me-3" size={20} />
                            <div className="text-center">
                              <small className="text-muted d-block">Email me at</small>
                              <a
                                href="mailto:guruprasathganesan99@gmail.com"
                                className="text-primary fw-semibold text-decoration-none"
                              >
                                guruprasathganesan99@gmail.com
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="contact-method-card">
                        <Card.Body className="p-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <Linkedin className="text-primary me-3" size={20} />
                            <div className="text-center">
                              <small className="text-muted d-block">Connect on LinkedIn</small>
                              <a
                                href="https://www.linkedin.com/in/guruprasasth-ga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary fw-semibold text-decoration-none"
                              >
                                linkedin.com/in/guruprasasth-ga
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>

                  <Row className="g-3 mb-4">
                    <Col md={6}>
                      <Button variant="primary" href="mailto:guruprasathganesan99@gmail.com" className="w-100 fw-bold">
                        <EnvelopeFill className="me-2" />
                        Send Email
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        variant="outline-primary"
                        href="https://www.linkedin.com/in/guruprasasth-ga"
                        target="_blank"
                        className="w-100 fw-bold"
                      >
                        <Linkedin className="me-2" />
                        LinkedIn Profile
                      </Button>
                    </Col>
                  </Row>

                  <div className="pt-3 border-top">
                    <small className="text-muted d-flex align-items-center justify-content-center">
                      <StarFill className="text-warning me-2" size={16} />
                      Usually responds within 24 hours
                      <StarFill className="text-warning ms-2" size={16} />
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-4">
        <div className="footer-wave">
          <DoodleWave />
        </div>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <p className="text-muted mb-3">
                © 2024 Guruprasath Ganesan. Built with React, TypeScript, and Bootstrap.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://www.linkedin.com/in/guruprasasth-ga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted footer-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/ganesanguruprasath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted footer-link"
                >
                  <Github size={20} />
                </a>
                <a href="mailto:guruprasathganesan99@gmail.com" className="text-muted footer-link">
                  <EnvelopeFill size={20} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

// Doodle Components
const DoodleArrow: React.FC = () => (
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

const DoodleStar: React.FC = () => (
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

const DoodleCircle: React.FC = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 10" />
  </svg>
)

const DoodleSquiggle: React.FC = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 50C20 30 30 70 40 50C50 30 60 70 70 50C80 30 90 70 100 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const DoodleSpiral: React.FC = () => (
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

const DoodleUnderline: React.FC = () => (
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

const DoodleWave: React.FC = () => (
  <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 25C20 10 40 40 60 25C80 10 100 40 120 25C140 10 160 40 180 25C200 10 220 40 240 25"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const DoodleBrowser: React.FC = () => (
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

const DoodleServer: React.FC = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="20" width="50" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="25" y="42.5" width="50" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="25" y="65" width="50" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="35" cy="27.5" r="2.5" fill="currentColor" />
    <circle cx="35" cy="50" r="2.5" fill="currentColor" />
    <circle cx="35" cy="72.5" r="2.5" fill="currentColor" />
  </svg>
)

const DoodleTools: React.FC = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 65L65 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="70" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="70" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M40 25L60 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 75L60 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleCloud: React.FC = () => (
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

const DoodleDocument: React.FC = () => (
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

const DoodleOffice: React.FC = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M20 40H80" stroke="currentColor" strokeWidth="2" />
    <path d="M30 50H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 60H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 30V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 30V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleCoffee: React.FC = () => (
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

const DoodleRocket: React.FC = () => (
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

const DoodleCode: React.FC = () => (
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

const DoodleIdea: React.FC = () => (
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

const DoodleLaptop: React.FC = () => (
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

const DoodleHeart: React.FC = () => (
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

const DoodleMessage: React.FC = () => (
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

export default App
