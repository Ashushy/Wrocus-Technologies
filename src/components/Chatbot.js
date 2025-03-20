"use client"
import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: "user", content: userInput };
    setMessages([...messages, userMessage]);
    setUserInput("");

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_message: userInput }),
      });

      const data = await response.json();
      const botMessage = { role: "bot", content: data.reply };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white p-4 flex items-center justify-center rounded-t-lg">
          <MessageCircle className="mr-2" />
          <h2 className="text-lg font-semibold bg-gray-red-300">Wrocus Chatbot</h2>
        </div>

        {/* Chat Messages */}
        <div ref={chatRef} className="h-80 overflow-y-auto p-4 bg-gray-100 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.role === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-300 text-gray-800 mr-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center p-3 border-t bg-white">
          <input
            type="text"
            className="flex-1 p-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-3 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 transition-transform"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
