import { useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import solutions from '../data/solutions.json';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-purple-900/10 to-blue-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-8 scroll-animate">
            <img
              src="./logo.png"
              alt="Saraswati"
              className="w-24 h-24"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 scroll-animate">
            Open Source Tools for
            <br />
            <span className="gradient-text">Knowledge Management</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto scroll-animate">
            Build transparent, trustworthy knowledge systems with proper source attribution and
            provenance tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
            <Button variant="primary" size="lg" href="#solutions">
              Explore Solutions
            </Button>
            <Button variant="outline" size="lg" href="https://github.com">
              View on GitHub
            </Button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="glass rounded-xl p-6 scroll-animate">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Source Attribution</h3>
              <p className="text-gray-300">
                Track the origin and lineage of every piece of information in your system.
              </p>
            </div>

            <div className="glass rounded-xl p-6 scroll-animate">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Open Source</h3>
              <p className="text-gray-300">
                Fully transparent, community-driven tools that you can audit and contribute to.
              </p>
            </div>

            <div className="glass rounded-xl p-6 scroll-animate">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community-Driven</h3>
              <p className="text-gray-300">
                Built by researchers, developers, and knowledge workers for the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Open Source <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive suite of tools for managing knowledge sources and building trustworthy
              information systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {solutions.map((solution) => (
              <Card key={solution.id}>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>

                <div className="space-y-2 mb-4">
                  {solution.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-start space-x-2 text-sm text-gray-400">
                      <svg
                        className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={solution.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  <span>View on GitHub</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why <span className="gradient-text">Saraswati?</span>
            </h2>
            <blockquote className="border-l-4 border-primary-500 pl-6 mb-8">
              <p className="text-xl text-gray-200 italic mb-4">
                "Data without good information architecture is just noise."
              </p>
              <cite className="text-gray-400 not-italic">— Kofi</cite>
            </blockquote>
            <p className="text-lg text-gray-300 mb-6">
              Named after the goddess of knowledge, wisdom, and learning, Saraswati embodies the
              principle that knowledge grows when shared freely with proper attribution.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Trustworthy by Design</h3>
                  <p className="text-gray-300">
                    Every tool prioritizes transparency and verification, ensuring your knowledge
                    systems are reliable.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Built for Scale</h3>
                  <p className="text-gray-300">
                    From small projects to enterprise systems, our tools grow with your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Flexible Integration</h3>
                  <p className="text-gray-300">
                    Modular tools that work together or independently, adapting to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Build Better Knowledge Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community and start building transparent, trustworthy applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="https://github.com">
              Get Started
            </Button>
            <Button variant="outline" size="lg" href="#about">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
