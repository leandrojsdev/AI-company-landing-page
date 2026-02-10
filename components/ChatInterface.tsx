import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';
import { generateIRResponse } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: ChatSender.BOT, text: "Welcome to Argentum Intelligence. I am the Investor Relations Agent. How may I assist you with your due diligence today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Call Gemini API
    const responseText = await generateIRResponse(input);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: ChatSender.BOT,
      text: responseText
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botMsg]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-slate-100 hover:bg-white text-black px-6 py-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-105 animate-fade-in"
        >
        <span className="font-medium tracking-wide">Investor Assistant</span>
        <div className="bg-black text-white p-2 rounded-full">
          <Sparkles size={18} />
        </div>
      </button>
      )}

      {/* Chat Window */}
      <div className={`w-[90vw] md:w-[400px] h-[500px] bg-black/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-4 pointer-events-none absolute'
      }`}>
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-200 font-medium">Argentum IR Agent</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.sender === ChatSender.USER 
                    ? 'bg-slate-200 text-black rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800 border border-slate-700 p-3 rounded-xl rounded-tl-none flex gap-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-800 bg-black/50">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about revenue, growth..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-slate-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="bg-slate-200 hover:bg-white text-black p-2 rounded-lg transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-[10px] text-slate-500 mt-2 text-center">
            Powered by Gemini 3 Flash. AI responses may vary.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;