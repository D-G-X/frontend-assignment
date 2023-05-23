import Navbar from "./components/Navbar";
import SectionTwo from "./components/SectionTwo";
import "./App.css"
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";

function App() {
  return (
    <>
      <div className="bg-[#f4f7ff]">
        <Navbar />
        <SectionOne />
      </div>
      <div className="bg-white mt-14"> 
        <SectionTwo />
      </div>
      <div className="bg-white mt-10">
        <SectionThree />
      </div>
    </>
  );
}

export default App;
