import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-black">BG</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">
                HOME
              </a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">
                ABOUT ME
              </a>
              <a href="#history" className="text-gray-600 hover:text-black transition-colors">
                HISTORY
              </a>
              <a href="#experience" className="text-gray-600 hover:text-black transition-colors">
                EXPERIENCE
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
                CONTACT ME
              </a>
            </div>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="relative w-64 h-80 mx-auto mb-8 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/profile-barema.jpg"
                alt="Barema Gael Profile Picture"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-4">
            I'm Barema <span className="text-orange-500 font-normal">Gael</span>
          </h1>
          <p className="text-gray-600 text-lg mb-2">Full Stack Developer & Software Engineer</p>
          <p className="text-gray-600 text-lg mb-8">5+ Years of Experience in Modern Web Development</p>

          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">20+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/professional-workspace-setup.jpg"
                alt="About Me"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Hello, I'm Gael</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience in creating innovative web
                solutions. I specialize in building scalable applications that deliver exceptional user experiences and
                drive business growth.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans across modern JavaScript frameworks, cloud technologies, and database management. I'm
                committed to writing clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">React</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">Python</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">AWS</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">MongoDB</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">My Journey</h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-medium mb-2">2023 - Present</h3>
                <h4 className="text-lg text-gray-800 mb-2">Senior Full Stack Developer</h4>
                <p className="text-gray-600">
                  Leading development of enterprise-level applications and mentoring junior developers in modern web
                  technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-medium mb-2">2021 - 2023</h3>
                <h4 className="text-lg text-gray-800 mb-2">Full Stack Developer</h4>
                <p className="text-gray-600">
                  Developed and maintained multiple client projects using React, Node.js, and cloud services.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-medium mb-2">2019 - 2021</h3>
                <h4 className="text-lg text-gray-800 mb-2">Frontend Developer</h4>
                <p className="text-gray-600">
                  Specialized in creating responsive user interfaces and implementing modern design systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Experience & Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Image
                src="/modern-web-dashboard.png"
                alt="Project 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                A full-stack e-commerce solution built with Next.js and Stripe integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Next.js</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Stripe</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Image
                src="/mobile-app-interface.png"
                alt="Project 2"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Task Management App</h3>
              <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Socket.io</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">MongoDB</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Image
                src="/data-visualization-dashboard.png"
                alt="Project 3"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive analytics dashboard with interactive charts and reports.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Vue.js</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">D3.js</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6">Let's Work Together</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or
                just want to chat about technology, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">baremagael@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">+250 781 612 277</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/barema-gael-6284a8329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOa711Z93SfGzc%2Byb%2FHnSFg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-teal-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/barema-gael-6284a8329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOa711Z93SfGzc%2Byb%2FHnSFg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">© 2024 Barema Gael. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
