import React from 'react';
import { Zap, Brain, Shield, RefreshCw, MessageSquare, Users, Cpu, Globe, ArrowRight, Check, Star } from 'lucide-react';
import Header from '../components/Header';
import { AboutOliver, HomeScreenHero } from './AboutOliver';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
    <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-10 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
          <div className="relative max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 rounded-full px-6 py-2 text-cyan-300 text-sm font-medium mb-6">
                🚀 Introducing Next-Gen AI Technology
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Powering Conversations with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Rynaty AI
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the future of artificial intelligence with our revolutionary Rynaty-powered chat application. 
              Lightning-fast responses, human-like understanding, and enterprise-grade security - all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/chat" className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3">
                Try Our Chat App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-xl text-gray-300 hover:text-cyan-400 font-semibold text-lg transition-all duration-300 flex items-center gap-3">
                <MessageSquare className="w-5 h-5" />
                Watch Demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
                <div className="text-gray-400">Messages Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0.2s</div>
                <div className="text-gray-400">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">150K+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Rynaty AI</span> Integration Works
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge technology that makes Rynaty the most advanced AI chat platform available today.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Blazing Fast Responses</h4>
                <p className="text-gray-300 leading-relaxed">
                  Rynaty's revolutionary LPU (Language Processing Unit) technology delivers responses 10x faster than traditional AI models, 
                  ensuring seamless real-time conversations without any lag.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Advanced Understanding</h4>
                <p className="text-gray-300 leading-relaxed">
                  Our model comprehends complex queries with exceptional accuracy, understanding context, nuance, and intent 
                  to provide relevant and helpful responses every time.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Privacy Focused</h4>
                <p className="text-gray-300 leading-relaxed">
                  Conversations are processed securely with enterprise-grade encryption and privacy protection. 
                  Your data remains confidential and is never used for training without consent.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Continuous Learning</h4>
                <p className="text-gray-300 leading-relaxed">
                  The system continuously improves through advanced machine learning algorithms, 
                  adapting to user interactions and staying current with evolving language patterns.
                </p>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Multi-Modal Processing</h4>
                </div>
                <p className="text-gray-300">
                  Handle text, images, documents, and complex data formats with unified AI processing capabilities.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Team Collaboration</h4>
                </div>
                <p className="text-gray-300">
                  Share conversations, collaborate on projects, and manage team AI interactions with advanced workspace features.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Global Accessibility</h4>
                </div>
                <p className="text-gray-300">
                  Available worldwide with multi-language support and optimized performance across all regions and devices.
                </p>
              </div>
            </div>
          </div>
        </section>


        <HomeScreenHero />


         {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From individual creators to enterprise teams, we have the perfect plan for your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Starter</h4>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">Free</div>
                  <p className="text-gray-400">Perfect for getting started</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">100 messages per month</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Basic AI capabilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Standard support</span>
                  </li>
                </ul>
                <button className="w-full border border-gray-600 hover:border-cyan-400 py-3 rounded-lg text-gray-300 hover:text-cyan-400 font-medium transition-all cursor-pointer">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-400/50 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full text-white text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Pro</h4>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$29</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Unlimited messages</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Advanced AI features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Priority processing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">API access</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer">
                  Upgrade to Pro
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Enterprise</h4>
                  <div className="text-4xl font-bold text-purple-400 mb-2">Custom</div>
                  <p className="text-gray-400">Tailored for your organization</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Unlimited everything</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">SLA guarantees</span>
                  </li>
                </ul>
                <button className="w-full border border-purple-500 hover:bg-purple-500/10 py-3 rounded-lg text-purple-400 hover:text-purple-300 font-medium transition-all cursor-pointer">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-black/20 to-black/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">LPU Technology</span>
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Rynaty's Language Processing Units represent a breakthrough in AI architecture. Unlike traditional GPU-based systems, 
                  our LPUs are specifically designed for language tasks, delivering unprecedented speed and efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">10x faster inference than standard models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">50% lower energy consumption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Real-time processing capabilities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Scalable architecture for enterprise use</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">200ms</div>
                      <div className="text-gray-400">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-purple-400 mb-2">98.7%</div>
                      <div className="text-gray-400">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">256-bit</div>
                      <div className="text-gray-400">Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
                      <div className="text-gray-400">Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-8">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Rynaty?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
              We're not just another AI company. Rynaty represents the next evolution in conversational AI, 
              built from the ground up to deliver experiences that feel natural, intelligent, and incredibly fast.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Natural Conversations</h4>
                <p className="text-gray-300 leading-relaxed">
                  Our AI understands context, maintains conversation flow, and responds with human-like naturalness 
                  that makes every interaction feel authentic and engaging.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Cutting-Edge Architecture</h4>
                <p className="text-gray-300 leading-relaxed">
                  Built on our proprietary LPU infrastructure, Rynaty delivers unmatched performance, 
                  reliability, and scalability for both individual users and enterprise deployments.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Always Improving</h4>
                <p className="text-gray-300 leading-relaxed">
                  Our models continuously learn and adapt, incorporating the latest advancements in AI research 
                  to provide increasingly sophisticated and helpful responses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-gradient-to-r from-black/30 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-white text-center mb-16">
              What Our Users Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Rynaty has completely transformed how our team collaborates. The speed and accuracy are incredible!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <div className="text-white font-medium">Sarah Chen</div>
                    <div className="text-gray-400 text-sm">Product Manager, TechCorp</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The most responsive AI I've ever used. It's like having a conversation with a genius friend."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="text-white font-medium">Marcus Rodriguez</div>
                    <div className="text-gray-400 text-sm">Software Engineer</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Game-changing technology. The privacy features give us confidence to use it for sensitive projects."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="text-white font-medium">Dr. Amelia Foster</div>
                    <div className="text-gray-400 text-sm">Research Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Use Cases Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-black/20 to-black/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">
                Endless <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Possibilities</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From creative writing to complex problem-solving, Rynaty adapts to your unique needs and workflow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-cyan-400/50 transition-all group">
                <div className="text-2xl mb-3">💼</div>
                <h4 className="text-lg font-semibold text-white mb-2">Business Strategy</h4>
                <p className="text-gray-400 text-sm">Market analysis, planning, and decision support</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-purple-400/50 transition-all group">
                <div className="text-2xl mb-3">🎨</div>
                <h4 className="text-lg font-semibold text-white mb-2">Creative Writing</h4>
                <p className="text-gray-400 text-sm">Stories, scripts, and content creation</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-cyan-400/50 transition-all group">
                <div className="text-2xl mb-3">🔬</div>
                <h4 className="text-lg font-semibold text-white mb-2">Research</h4>
                <p className="text-gray-400 text-sm">Data analysis and insight generation</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-purple-400/50 transition-all group">
                <div className="text-2xl mb-3">💻</div>
                <h4 className="text-lg font-semibold text-white mb-2">Development</h4>
                <p className="text-gray-400 text-sm">Code review, debugging, and optimization</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-cyan-400/50 transition-all group">
                <div className="text-2xl mb-3">📚</div>
                <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                <p className="text-gray-400 text-sm">Tutoring, explanations, and learning support</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-purple-400/50 transition-all group">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold text-white mb-2">Marketing</h4>
                <p className="text-gray-400 text-sm">Campaign creation and audience targeting</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-cyan-400/50 transition-all group">
                <div className="text-2xl mb-3">⚖️</div>
                <h4 className="text-lg font-semibold text-white mb-2">Legal</h4>
                <p className="text-gray-400 text-sm">Document review and compliance assistance</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-purple-400/50 transition-all group">
                <div className="text-2xl mb-3">🏥</div>
                <h4 className="text-lg font-semibold text-white mb-2">Healthcare</h4>
                <p className="text-gray-400 text-sm">Medical research and administrative support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Experience the Future of AI Chat?
            </h3>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of users who have already discovered the power of Rynaty AI. 
              Start your journey today with our free tier, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/chat" className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3">
                Start Chatting Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-xl text-gray-300 hover:text-cyan-400 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <MessageSquare className="w-5 h-5" />
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;