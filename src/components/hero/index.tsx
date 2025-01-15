type Props = {
  full_name: string;
  title: string;
};

const Hero = ({ full_name, title }: Props) => {
  return (
    <header className="bg-yellow-100 py-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Hola, soy {full_name}</h1>
        <p className="text-lg text-gray-700 mb-6">{title}</p>
        <a
          href="/tu-cv.pdf"
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Descargar CV
        </a>
      </div>
    </header>
  );
};

export default Hero;

