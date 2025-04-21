import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatMessage } from '../../types';
import { chatResponses, fallbackResponse } from '../../data/chatbotResponses';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hi there! I\'m your virtual assistant. How can I help you plan your stay in Azerbaijan?',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user message
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        text: input,
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      
      // Simulate bot typing
      setTimeout(() => {
        const botResponse = getBotResponse(input);
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botResponse,
          timestamp: new Date().toISOString(),
        };
        
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Find a matching response based on keywords
    for (const response of chatResponses) {
      for (const keyword of response.keywords) {
        if (input.includes(keyword.toLowerCase())) {
          return response.response;
        }
      }
    }
    
    // Fallback response if no keywords match
    return fallbackResponse;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Button */}
      <button
        onClick={handleToggleChat}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-primary-500 rotate-90' : 'bg-accent-500 hover:bg-accent-600'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <MessageCircle className="text-white w-6 h-6" />
        )}
      </button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Header */}
            <div className="bg-primary-500 text-white p-3">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                <h3 className="font-medium">Azerbaijan Travel Assistant</h3>
              </div>
              <p className="text-xs text-primary-100 mt-1">
                Ask me about accommodations, food, or travel tips
              </p>
            </div>
            
            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3">
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1 border border-gray-300 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="bg-primary-500 text-white p-2 rounded-r-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;