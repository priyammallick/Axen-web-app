import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your AI mental performance coach. I'm here to help you with mental training strategies, pre-competition anxiety, focus techniques, and more. How can I support your mental game today?",
    timestamp: new Date(),
  },
];

const sampleResponses = [
  "That's a great question! Mental preparation before competition is crucial. I recommend starting with a 5-minute breathing exercise to calm your nerves, followed by positive visualization of your performance.",
  "Pre-game anxiety is completely normal. Try the Box Breathing exercise we have in the Exercises section. It helps regulate your nervous system and brings you into a focused, calm state.",
  "Building mental resilience takes consistent practice. I suggest creating a daily routine that includes visualization, affirmations, and mindfulness exercises. The key is consistency over intensity.",
  "Focus during training can be improved by setting small, achievable goals for each session. Break down your practice into focused intervals with brief mental reset breaks.",
  "Confidence comes from preparation and self-awareness. Spend time reviewing your strengths in the Motivation section, and remind yourself of past successes before competitions.",
];

export function AICoach() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="p-8 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          AI Mental Coach
        </h1>
        <p className="text-[#6B7280] text-lg">
          Get personalized guidance for your mental training
        </p>
      </div>

      {/* Chat Container */}
      <Card className="rounded-2xl border-0 shadow-md flex-1 flex flex-col">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <CardTitle>Mental Performance Coach</CardTitle>
            <span className="ml-auto w-2 h-2 bg-[#34D399] rounded-full" />
            <span className="text-sm text-[#6B7280]">Online</span>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-[70%] p-4 rounded-2xl ${
                    message.role === "user"
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-[#F5F7FA] text-[#1F2937]"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.role === "user" ? "text-white/60" : "text-[#6B7280]"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 bg-[#34D399] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-[#F5F7FA] p-4 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask me about mental training, focus, anxiety management..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 h-12 rounded-xl bg-[#F5F7FA] border-0"
              />
              <Button
                onClick={handleSend}
                className="h-12 px-6 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
