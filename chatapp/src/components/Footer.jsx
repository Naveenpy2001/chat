import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className=" bg-gradient-to-br from-slate-900     to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Rynaty
              </h4>
              <p className="text-gray-400 mb-6">
                The next generation of conversational AI, designed for speed, accuracy, and privacy.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <span className="text-white">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <span className="text-white">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <span className="text-white">⚡</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Product</h5>
              <ul className="space-y-3">
                <li><a href="/chat" className="text-gray-400 hover:text-cyan-400 transition-colors">Chat App</a></li>
                <li><a href="/api" className="text-gray-400 hover:text-cyan-400 transition-colors">API</a></li>
                <li><a href="/integrations" className="text-gray-400 hover:text-cyan-400 transition-colors">Integrations</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="/press" className="text-gray-400 hover:text-cyan-400 transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Support</h5>
              <ul className="space-y-3">
                <li><a href="/help" className="text-gray-400 hover:text-cyan-400 transition-colors">Help Center</a></li>
                <li><a href="/docs" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
                <li><a href="/status" className="text-gray-400 hover:text-cyan-400 transition-colors">System Status</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Rynaty. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer