import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {sent ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#C9D755]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">¡Mensaje enviado!</h3>
            <p className="text-sm text-gray-500">Nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 bg-[#5CA8A1] text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Contáctanos</h2>
            <p className="text-sm text-gray-500 mb-6">Completa el formulario y te responderemos pronto.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full bg-[#5CA8A1] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-60"
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}