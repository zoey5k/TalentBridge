import { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  ArrowRight,
} from "lucide-react";
import {
  faqCategories,
  searchFAQs,
  getFAQById,
  getFollowUps,
  getWelcomeSuggestions,
  getFAQsByCategory,
} from "../data/faqData";
import talentBridgeLogo from "../assets/NewTalentBridgeLogo.png";
import "./AIAssistant.css";

export default function AIAssistant({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      const suggestions = getWelcomeSuggestions();
      setMessages([
        {
          type: "bot",
          text: t?.aiWelcome || "Welcome to TalentBridge Assistant. I can help you learn about our platform, features, Microsoft integrations, careers, and more. What would you like to know?",
          suggestions: suggestions.map((s) => ({
            id: s.id,
            question: s.question,
          })),
        },
      ]);
    }
  }, [isOpen, hasGreeted, t]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Handle asking a question (from input or suggestion click)
  const askQuestion = (question, faqId = null) => {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
    ]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let faq;

      if (faqId) {
        faq = getFAQById(faqId);
      } else {
        const results = searchFAQs(question);
        faq = results.length > 0 ? results[0] : null;
      }

      if (faq) {
        const followUps = getFollowUps(faq);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: faq.answer,
            faqId: faq.id,
            category: faq.category,
            suggestions: followUps.map((f) => ({
              id: f.id,
              question: f.question,
            })),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: t?.aiNoResult || "I don't have information about that specific topic. I can help with questions about TalentBridge's features, Microsoft integrations, recruitment process, pricing, security, careers, and future roadmap.",
            suggestions: getWelcomeSuggestions().map((s) => ({
              id: s.id,
              question: s.question,
            })),
          },
        ]);
      }

      setIsTyping(false);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    askQuestion(input);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    const categoryFaqs = faqCategories.find((c) => c.id === categoryId);
    if (categoryFaqs) {
      setMessages((prev) => [
        ...prev,
        {
          type: "user",
          text: `Show me ${categoryFaqs.label} questions`,
        },
      ]);

      setIsTyping(true);

      setTimeout(() => {
        const faqs = getFAQsByCategory(categoryId).slice(0, 5);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: `Here are some popular questions about ${categoryFaqs.label}. Click any to see the answer:`,
            suggestions: faqs.map((f) => ({
              id: f.id,
              question: f.question,
            })),
          },
        ]);
        setIsTyping(false);
      }, 500);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`ai-fab ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <div className="ai-fab-pulse" />
        <img src={talentBridgeLogo} alt="Talent Bridge" className="ai-fab-logo" />
      </button>

      {/* Chat Window */}
      <div className={`ai-chat-window ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="ai-chat-header">
          <div className="ai-chat-header-info">
            <div className="ai-chat-avatar">
              <img src={talentBridgeLogo} alt="Talent Bridge" className="ai-chat-avatar-logo" />
            </div>
            <div>
              <h4>{t?.aiTitle || "TalentBridge Assistant"}</h4>
              <span className="ai-status">
                <span className="ai-status-dot" />
                {t?.aiOnline || "Online"}
              </span>
            </div>
          </div>
          <button
            className="ai-chat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="ai-chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-message ai-message-${msg.type}`}>
              {msg.type === "bot" && (
                <div className="ai-message-avatar">
                  <img src={talentBridgeLogo} alt="Talent Bridge" className="ai-message-avatar-logo" />
                </div>
              )}
              <div className="ai-message-content">
                <p>{msg.text}</p>

                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="ai-suggestions">
                    {msg.suggestions.map((sug) => (
                      <button
                        key={sug.id}
                        className="ai-suggestion-chip"
                        onClick={() => askQuestion(sug.question, sug.id)}
                      >
                        {sug.question}
                        <ArrowRight size={13} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="ai-message ai-message-bot">
              <div className="ai-message-avatar">
                <img src={talentBridgeLogo} alt="Talent Bridge" className="ai-message-avatar-logo" />
              </div>
              <div className="ai-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Category Quick Access */}
        {messages.length <= 1 && (
          <div className="ai-categories">
            {faqCategories.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                className={`ai-category-chip ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form className="ai-chat-input" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t?.aiPlaceholder || "Ask about TalentBridge..."}
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>

        {/* Footer */}
        <div className="ai-chat-footer">
          <span>{t?.aiPowered || "Powered by TalentBridge Knowledge Base"}</span>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="ai-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}