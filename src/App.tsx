import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Timeline from "./components/timeline";
import information from "./data/index";

function App() {
  return (
    <>
      <Header />
      <About
        paragraphs={information.about.paragraphs}
        actual_job={information.about.actual_job}
      />
      <Main />
      <Timeline jobs={information.timeline.jobs} />
      <Footer
        contact={information.footer.contact}
        socialMediaButtons={information.footer.socialMediaButtons}
      />

    </>
  );
}

export default App;
