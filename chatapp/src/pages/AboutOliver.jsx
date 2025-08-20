import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaChevronDown, FaChevronUp, FaLightbulb, FaGlobeAfrica, FaBrain, FaCity } from 'react-icons/fa';
import Oliver from '../assets/oliver.jpeg'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutOliver = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Header />

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-2/5 p-8 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
              <div className="relative mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={Oliver}
                    alt="Oliver Tapuwa Mapunga" 
                    className="w-full h-full object-cover z-0"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white rounded-full p-3 shadow-lg">
                  <FaLightbulb className="text-xl" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Oliver Tapuwa Mapunga</h2>
              <p className="text-indigo-600 font-medium mb-4">Founder & CEO of Rynaty AI</p>
              
              <div className="flex space-x-4 mt-4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <FaTrophy className="text-yellow-500 text-2xl mb-2" />
                  <span className="text-sm font-semibold">Techpreneur</span>
                  <span className="text-xs text-gray-500">Award Winner</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <FaGlobeAfrica className="text-green-500 text-2xl mb-2" />
                  <span className="text-sm font-semibold">AI Advisor</span>
                  <span className="text-xs text-gray-500">Global Impact</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <FaBrain className="text-purple-500 text-2xl mb-2" />
                  <span className="text-sm font-semibold">Visionary</span>
                  <span className="text-xs text-gray-500">Innovator</span>
                </div>
              </div>
            </div>
            
            {/* Text Content Section */}
            <div className="md:w-3/5 p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">About <span className="text-indigo-600">Oliver</span></h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Oliver Tapuwa Mapunga is a visionary Zimbabwean entrepreneur, dynamic leader, and global AI advisor. 
                As the Founder and CEO of Rynaty AI, he is driving innovation at the intersection of artificial intelligence 
                and smart city development across Africa and beyond.
              </p>
              
              <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-96' : 'max-h-0'}`}>
                <div className="mb-6">
                  <div className="flex items-start mb-6">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <FaTrophy className="text-yellow-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">1st Runner-Up Techpreneur of the Year Under 30</h3>
                      <p className="text-gray-600">Southern Africa, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaMedal className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Zimbabwe's 40 Under 40 Most Influential Young Business Leaders</h3>
                      <p className="text-gray-600">2024 - Youngest honoree in history</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Oliver's forward-thinking leadership continues to shape the future of intelligent infrastructure 
                  and digital transformation across emerging markets. His work at Rynaty AI focuses on implementing 
                  cutting-edge AI solutions that address unique challenges in developing economies while creating 
                  sustainable technological ecosystems.
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  With a passion for innovation and community development, Oliver is committed to mentoring the next 
                  generation of African tech entrepreneurs and fostering environments where technology serves as a 
                  catalyst for positive change and economic growth.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FaCity className="text-indigo-500 text-2xl mb-2" />
                    <h4 className="font-semibold text-gray-800">Smart Cities</h4>
                    <p className="text-sm text-gray-600">Transforming urban landscapes</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FaGlobeAfrica className="text-green-500 text-2xl mb-2" />
                    <h4 className="font-semibold text-gray-800">African Innovation</h4>
                    <p className="text-sm text-gray-600">Driving progress across the continent</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={toggleExpand}
                className="mt-6 flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
              >
                {expanded ? (
                  <>
                    <span>View Less</span>
                    <FaChevronUp className="ml-2" />
                  </>
                ) : (
                  <>
                    <span>View More</span>
                    <FaChevronDown className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

// Home Screen Component
const HomeScreenHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-white flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Transforming Africa Through <span className="text-yellow-400">AI Innovation</span></h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Leading the charge in smart city development and digital transformation across emerging markets
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          
          <Link to='/about'>
          <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Explore Our Work
          </button>
          </Link>
          <Link to='/about'>
          <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-700 transition-colors">
            Meet Oliver
          </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="bg-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaBrain className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-gray-200">Cutting-edge artificial intelligence for urban development</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaCity className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Cities</h3>
            <p className="text-gray-200">Creating sustainable and intelligent urban ecosystems</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="bg-yellow-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaGlobeAfrica className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">African Focus</h3>
            <p className="text-gray-200">Solutions designed for emerging market challenges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutOliver, HomeScreenHero };