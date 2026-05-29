import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/layout/navbar.jsx';
import Footer from '../components/layout/footer.jsx';
import ChatMessage from '../components/chat/ChatMessage.jsx';
import ChatBar from '../components/chat/ChatBar.jsx';
import context from '../contexts/context.md?raw';

const SYSTEM_PROMPT = context ;

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'bot', message: '¡Hola! Soy RioBot, estoy para ayudarte con todo lo que necesites saber sobre Riova o el rio Caimito' },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text) => {
    const userMsg = { role: 'user', message: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...[...messages, userMsg].map((m) => ({  
              role: m.role === 'user' ? 'user' : 'assistant',
              content: m.message,
            })),
          ],
        }),
      });

      const data = await res.json();
      const botReply = data.choices?.[0]?.message?.content ?? 'Lo siento, no pude procesar tu mensaje.';
      setMessages((prev) => [...prev, { role: 'bot', message: botReply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', message: 'Error al conectar con el servidor.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <Navbar />
      <main className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-[#2c3e2d] mb-4">Chat con Vilma</h1>

        <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-[65vh] border border-gray-200 rounded-2xl p-4 bg-white">
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role} message={msg.message} />
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-500 rounded-2xl rounded-bl-md px-4 py-2.5 text-sm">
                Escribiendo...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <ChatBar onSend={handleSend} disabled={loading} />
      </main>
      <Footer />
    </div>
  );
}