import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const QUICK = [
  "Book an appointment",
  "Office hours",
  "Do you speak Mandarin?",
  "Where are you located?",
];

const REPLIES: Record<string, string> = {
  "Book an appointment":
    "We'd love to see you! Please call (604) 568-3175 or visit our Contact page to book.",
  "Office hours":
    "Mon–Fri 9:00am–6:00pm, Sat 9:00am–5:00pm. Closed Sunday.",
  "Do you speak Mandarin?":
    "Yes — our team provides care in both English and Mandarin.",
  "Where are you located?":
    "2933 West Broadway, Vancouver, BC — in the heart of Kitsilano.",
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! 👋 Welcome to U-Dental. How can we help you today?" },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      const reply =
        REPLIES[text] ||
        "Thanks for your message! Our team will follow up shortly. For urgent inquiries please call (604) 568-3175.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 600);
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us"
        className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-40 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-elevated grid place-items-center hover:bg-charcoal transition"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-36 lg:bottom-24 right-4 lg:right-6 z-40 w-[calc(100vw-2rem)] max-w-sm rounded-2xl bg-card border border-border shadow-elevated overflow-hidden animate-scale-in flex flex-col max-h-[70vh]">
          <div className="bg-primary text-primary-foreground px-4 py-3">
            <p className="font-bold text-sm">U-Dental Assistant</p>
            <p className="text-xs opacity-90">Typically replies in a few minutes</p>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-cream">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === "bot"
                    ? "bg-white border border-border text-foreground"
                    : "bg-primary text-primary-foreground ml-auto"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="px-3 py-2 border-t border-border bg-card flex flex-wrap gap-1.5">
            {QUICK.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-xs rounded-full border border-border px-2.5 py-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                {q}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 p-2 border-t border-border bg-card"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 px-3 py-2 text-sm rounded-full bg-background border border-border focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              aria-label="Send"
              className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-charcoal transition"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
