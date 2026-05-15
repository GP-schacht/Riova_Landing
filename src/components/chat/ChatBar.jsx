import { useState } from 'react';

export default function ChatBar({ onSend, disabled }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-gray-200 bg-white px-4 py-3"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un mensaje..."
        disabled={disabled}
        className="flex-1 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-[#2c3e2d] focus:ring-1 focus:ring-[#2c3e2d] disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="rounded-full bg-[#2c3e2d] px-5 py-2 text-sm text-white transition hover:bg-[#1f2e20] disabled:opacity-40"
      >
        Enviar
      </button>
    </form>
  );
}
