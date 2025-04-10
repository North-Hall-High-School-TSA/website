import About from "./components/about";
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
    <div className="w-full h-screen flex flex-col">
      <About />
</div>
    </>
  );
}

export default App;
