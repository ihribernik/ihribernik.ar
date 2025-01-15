import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form action="#" method="POST" className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

