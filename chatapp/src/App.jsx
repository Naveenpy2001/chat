import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/chat', {
        message: inputMessage,
        conversation_history: messages
      });

      const aiMessage = { text: response.data.response, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('API Error:', error);
      
      let errorMessage = "Sorry, I'm having trouble responding. Please try again later.";
      
      if (error.response) {
        // Handle different error statuses
        switch (error.response.status) {
          case 401:
            errorMessage = "API authentication failed. Please check the backend configuration.";
            break;
          case 429:
            errorMessage = "The AI service quota has been exceeded. Please try again later or check your API plan.";
            break;
          case 500:
            if (error.response.data?.detail) {
              // Extract the meaningful part of the error message
              const detail = error.response.data.detail;
              if (detail.includes("AI service error")) {
                errorMessage = detail.replace("AI service error: ", "");
              } else if (detail.includes("Internal server error")) {
                errorMessage = "Backend error: " + detail.replace("Internal server error: ", "");
              } else {
                errorMessage = detail;
              }
            }
            break;
          default:
            errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        }
      } else if (error.request) {
        errorMessage = "No response from server. Please check your connection.";
      } else {
        errorMessage = "Request setup failed. Please try again.";
      }
      
      const errorMsg = { text: errorMessage, sender: 'ai', isError: true };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-header">
        <h1>AI Assistant</h1>
        <p>Available 24/7 to help you</p>
      </div>
      
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender} ${message.isError ? 'error' : ''}`}>
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message ai">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !inputMessage.trim()}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;