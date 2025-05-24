import React from 'react';
import './index.css';

function HomePage() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="company-name">Rynaty</h1>
      </header>
      
      <main className="main-content">
        <section className="hero-section">
          <h2>Powering Conversations with Rynaty AI</h2>
          <p>Experience lightning-fast AI responses with our Rynaty-powered chat application</p>
          <a href="/chat" className="cta-button">Try Our Chat App</a>
        </section>
        
        <section className="features-section">
          <h3>How Our Rynaty AI Integration Works</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>⚡ Blazing Fast Responses</h4>
              <p>Rynaty's LPU technology delivers responses faster than traditional AI models.</p>
            </div>
            <div className="feature-card">
              <h4>🧠 Advanced Understanding</h4>
              <p>Our model comprehends complex queries with exceptional accuracy.</p>
            </div>
            <div className="feature-card">
              <h4>🔒 Privacy Focused</h4>
              <p>Conversations are processed securely with enterprise-grade protection.</p>
            </div>
            <div className="feature-card">
              <h4>🔄 Continuous Learning</h4>
              <p>The system improves over time, adapting to user interactions.</p>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <h3>Ready to Experience the Future of AI Chat?</h3>
          <a href="/chat" className="cta-button">Start Chatting Now</a>
        </section>
      </main>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Rynaty. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;