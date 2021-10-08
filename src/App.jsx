import GalliRouter from "./routes";
import Navbar from "./components/Navbar";
import './styles/output.css'

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <GalliRouter />
    </div>
  );
}

export default App;
