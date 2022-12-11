import react, {useState} from "react";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  
  return (
    <div className="App">
      <Header />
      <Tasklist />
      <Footer />
    </div>
  );
}

export default App;