import About from "./components/about";
import Accomplishments from "./components/accomplishments";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
     <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow w-full">
        <Home />
      </div>
    </div>
    <div className="w-full h-full flex flex-col py-8 bg-gray-50">
      <About />
    </div>
    <div className="w-full h-screen flex flex-col">
      <Accomplishments />
    </div>
    </>
  );
}

export default App;
