import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import Notes from "./components/Notes/Notes";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="main">
          <AddNote />
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;
