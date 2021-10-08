import './styles/output.css'
import GalliRouter from "./routes";
import Navbar from "./components/Navbar";
import ProfileNavbar from "./components/ProfileNavbar";

const App = () => {

  return (
    <div className="App">
      {/* <ProfileNavbar /> */}
      <Navbar />
      <GalliRouter />
    </div>
  );
}

export default App;
