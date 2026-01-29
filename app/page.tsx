import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-900">🌍 Student Connect Africa</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-900 font-semibold">Login</Link>
            <Link href="/signup" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <circle cx="200" cy="200" r="100" fill="white" opacity="0.1"/>
            <circle cx="1000" cy="300" r="150" fill="white" opacity="0.1"/>
            <path d="M 0 200 Q 300 100 600 200 T 1200 200" stroke="white" strokeWidth="2" fill="none" opacity="0.1"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="animate-slide-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Welcome to Student Connect Africa</h2>
            <p className="text-xl mb-8 text-blue-100">
              A vibrant community platform for African students studying in Belgium to connect, share experiences, and help each other navigate life abroad.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/signup"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition transform hover:scale-105"
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className="flex justify-center animate-slide-right">
            <div className="w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl animate-float">
              <svg className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600" viewBox="0 0 400 400">
                {/* Background */}
                <rect width="400" height="400" fill="url(#grad1)"/>
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#1e40af', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* People silhouettes */}
                <circle cx="100" cy="150" r="35" fill="#ffffff" opacity="0.3"/>
                <path d="M 100 115 C 115 115 125 125 125 140 L 125 190 Q 125 210 110 210 Q 90 210 90 190 L 90 140 C 90 125 100 115 100 115" fill="#ffffff" opacity="0.3"/>
                
                <circle cx="200" cy="120" r="40" fill="#ffffff" opacity="0.4"/>
                <path d="M 200 75 C 220 75 235 90 235 110 L 235 170 Q 235 195 210 195 Q 185 195 185 170 L 185 110 C 185 90 200 75 200 75" fill="#ffffff" opacity="0.4"/>
                
                <circle cx="300" cy="160" r="38" fill="#ffffff" opacity="0.35"/>
                <path d="M 300 120 C 318 120 332 134 332 152 L 332 210 Q 332 235 305 235 Q 280 235 280 210 L 280 152 C 280 134 295 120 300 120" fill="#ffffff" opacity="0.35"/>
                
                {/* Network lines */}
                <line x1="100" y1="190" x2="200" y2="170" stroke="#ffffff" strokeWidth="2" opacity="0.3"/>
                <line x1="200" y1="170" x2="300" y2="200" stroke="#ffffff" strokeWidth="2" opacity="0.3"/>
                <line x1="100" y1="190" x2="300" y2="200" stroke="#ffffff" strokeWidth="2" opacity="0.2"/>
                
                {/* Connecting nodes */}
                <circle cx="100" cy="190" r="5" fill="#ffffff" opacity="0.6"/>
                <circle cx="200" cy="170" r="5" fill="#ffffff" opacity="0.6"/>
                <circle cx="300" cy="200" r="5" fill="#ffffff" opacity="0.6"/>
                
                {/* Decorative elements */}
                <rect x="50" y="280" width="300" height="3" fill="#ffffff" opacity="0.2" rx="2"/>
                <circle cx="80" cy="320" r="8" fill="#60a5fa" opacity="0.8"/>
                <circle cx="150" cy="330" r="6" fill="#93c5fd" opacity="0.6"/>
                <circle cx="250" cy="325" r="7" fill="#60a5fa" opacity="0.7"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-4 animate-fade-up text-blue-900">Why Join Us?</h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Discover the benefits of being part of our thriving community</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-fade-up delay-100">
              <div className="text-6xl mb-4 animate-bounce">👥</div>
              <h4 className="text-2xl font-bold mb-4 text-blue-900">Connect</h4>
              <p className="text-gray-700">Build meaningful connections with thousands of African students studying in Belgium and across Europe. Network, make friends, and expand your community.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-fade-up delay-200">
              <div className="text-6xl mb-4">💬</div>
              <h4 className="text-2xl font-bold mb-4 text-blue-900">Share & Learn</h4>
              <p className="text-gray-700">Share knowledge, experiences, advice, and tips in our active community forums. Learn from peers who understand your journey.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-fade-up delay-300">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-4 text-blue-900">Discover</h4>
              <p className="text-gray-700">Find housing opportunities, job listings, internships, scholarships, and local events tailored for African students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="bg-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <pattern id="pattern" patternUnits="userSpaceOnUse" width="100" height="100">
              <circle cx="50" cy="50" r="30" fill="white"/>
            </pattern>
            <rect width="1200" height="400" fill="url(#pattern)"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up delay-100">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-pulse-slow">5K+</div>
              <p className="text-xl text-blue-200">Active Members</p>
            </div>
            <div className="animate-fade-up delay-200">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-pulse-slow">2K+</div>
              <p className="text-xl text-blue-200">Posts Monthly</p>
            </div>
            <div className="animate-fade-up delay-300">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-pulse-slow">50+</div>
              <p className="text-xl text-blue-200">Countries Represented</p>
            </div>
            <div className="animate-fade-up delay-400">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-pulse-slow">100%</div>
              <p className="text-xl text-blue-200">Free Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 text-blue-900 animate-fade-up">What Our Members Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg animate-fade-up delay-100">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl mr-4">👨</div>
                <div>
                  <p className="font-bold text-blue-900">Ahmed Diallo</p>
                  <p className="text-sm text-gray-600">Antwerp, Belgium</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"This platform changed my life! I found housing, made friends, and got a job opportunity through here. Highly recommended!"</p>
              <div className="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg animate-fade-up delay-200">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl mr-4">👩</div>
                <div>
                  <p className="font-bold text-green-900">Fatima Okonkwo</p>
                  <p className="text-sm text-gray-600">Brussels, Belgium</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Found my study group here! The community is welcoming and supportive. Love the events and networking opportunities."</p>
              <div className="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg animate-fade-up delay-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl mr-4">👨</div>
                <div>
                  <p className="font-bold text-purple-900">Kwame Mensah</p>
                  <p className="text-sm text-gray-600">Liège, Belgium</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Great place to share experiences and get advice from people who truly understand our challenges. Best community ever!"</p>
              <div className="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 text-blue-900 animate-fade-up">Latest From Our Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-fade-up delay-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-6xl">🏠</div>
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-bold mb-2">HOUSING</p>
                <h4 className="text-xl font-bold mb-3 text-gray-800">Finding Affordable Housing in Belgium</h4>
                <p className="text-gray-600 mb-4">Tips and tricks for finding the perfect apartment as an international student...</p>
                <Link href="#" className="text-blue-900 font-semibold hover:text-blue-600">Read More →</Link>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-fade-up delay-200">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-6xl">💼</div>
              </div>
              <div className="p-6">
                <p className="text-sm text-green-600 font-bold mb-2">CAREER</p>
                <h4 className="text-xl font-bold mb-3 text-gray-800">Landing Your First Job in Europe</h4>
                <p className="text-gray-600 mb-4">Complete guide to job hunting, CV writing, and interview tips...</p>
                <Link href="#" className="text-green-900 font-semibold hover:text-green-600">Read More →</Link>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-fade-up delay-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-6xl">🎓</div>
              </div>
              <div className="p-6">
                <p className="text-sm text-purple-600 font-bold mb-2">EDUCATION</p>
                <h4 className="text-xl font-bold mb-3 text-gray-800">Navigating Belgian University System</h4>
                <p className="text-gray-600 mb-4">Everything you need to know about studying in Belgium universities...</p>
                <Link href="#" className="text-purple-900 font-semibold hover:text-purple-600">Read More →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 text-blue-900 animate-fade-up">Frequently Asked Questions</h3>
          <div className="space-y-4 animate-fade-up delay-100">
            <details className="bg-blue-50 p-6 rounded-xl cursor-pointer hover:bg-blue-100 transition">
              <summary className="font-bold text-lg text-blue-900 flex items-center">
                <span className="mr-3">❓</span> Is the platform really free?
              </summary>
              <p className="mt-4 text-gray-700">Yes! Student Connect Africa is completely free. We believe in building a supportive community without any barriers to entry.</p>
            </details>

            <details className="bg-blue-50 p-6 rounded-xl cursor-pointer hover:bg-blue-100 transition">
              <summary className="font-bold text-lg text-blue-900 flex items-center">
                <span className="mr-3">🔒</span> How is my privacy protected?
              </summary>
              <p className="mt-4 text-gray-700">We take privacy seriously. Your personal information is encrypted and we never share your data with third parties without consent.</p>
            </details>

            <details className="bg-blue-50 p-6 rounded-xl cursor-pointer hover:bg-blue-100 transition">
              <summary className="font-bold text-lg text-blue-900 flex items-center">
                <span className="mr-3">📱</span> Can I access on mobile?
              </summary>
              <p className="mt-4 text-gray-700">Absolutely! Our platform is fully responsive and works seamlessly on mobile phones, tablets, and desktops.</p>
            </details>

            <details className="bg-blue-50 p-6 rounded-xl cursor-pointer hover:bg-blue-100 transition">
              <summary className="font-bold text-lg text-blue-900 flex items-center">
                <span className="mr-3">🤝</span> How can I help the community?
              </summary>
              <p className="mt-4 text-gray-700">There are many ways! You can share your experiences, answer questions, mentor new members, or participate in our community events.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 animate-float">
          <svg className="w-full h-full" viewBox="0 0 1200 300">
            <circle cx="200" cy="150" r="100" fill="white"/>
            <circle cx="1000" cy="150" r="120" fill="white"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6 animate-fade-up">Ready to Join Our Community?</h3>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto animate-fade-up delay-100">
            Create your account today and start connecting with thousands of African students across Belgium and Europe. It takes less than 2 minutes!
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 inline-block animate-fade-up delay-200"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Our Mission</Link></li>
                <li><Link href="#" className="hover:text-white transition">Team</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition">Forum</Link></li>
                <li><Link href="#" className="hover:text-white transition">Events</Link></li>
                <li><Link href="#" className="hover:text-white transition">Groups</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2026 Student Connect Africa. All rights reserved. 🌍</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
