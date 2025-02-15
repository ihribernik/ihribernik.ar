const Navbar = () => {
  return (
    <>
      <nav className="bg-yellow-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Titulo
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-gray-300">
                Timeline
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
