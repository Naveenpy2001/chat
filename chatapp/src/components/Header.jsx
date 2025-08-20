import React from 'react'

const Header = () => {
  return (
    <>
    <header className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Rynaty
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="/chat" className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header