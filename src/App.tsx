import Navbar from "./components/navbar";
import About from "./components/about";
import TimeLine from "./components/timeline";
import Contact from "./components/contact";
import information from "./data";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <Navbar />
        <Hero full_name={information.about.full_name} title={information.about.title}/>
        <About
          puesto={information.about.title}
          paragrap={information.about.paragraphs}
        />
        <TimeLine jobs={information.jobs} />
        <Contact />
      </div>
    </>
  );
}

export default App;