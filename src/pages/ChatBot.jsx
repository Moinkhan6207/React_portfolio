import { useState } from "react";
import "../styles/chatbot.css";

function ChatBot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi 👋, Want to know about me?" },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(true); // 👈 chatbot ko open/close karne ke liye

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);

        let reply = "";
        const lower = input.toLowerCase();

        if (lower.includes("who are you")) {
            reply = "I am Md Mainuddin, a passionate React Developer 🚀";
        } else if (lower.includes("skills")) {
            reply = "I work with React.js, Node.js, Express.js, MongoDB and practice DSA 💻";
        } else if (lower.includes("projects")) {
            reply = "Sure! Check out my Projects page 🔗";
        } else if (lower.includes("contact")) {
            reply = "You can reach me at 📧 mdmainuddin1289@gmail.com";
        } else {
            reply = "Sorry, I can only answer about Md Mainuddin's portfolio 😅";
        }

        const botMessage = { sender: "bot", text: reply };
        setMessages((prev) => [...prev, botMessage]);
        setInput("");
    };

    if (!isOpen) {
        return (
            <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
                💬 Chat
            </button>
        );
    }

    return (
        <div className="chatbot">
            {/* Close Button */}
            <div className="chatbot-header">
                <span>ChatBot</span>
                <button className="close-btn" onClick={() => setIsOpen(false)}>❌</button>
            </div>

            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatBot;
