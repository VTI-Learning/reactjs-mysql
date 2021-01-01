import logo from './logo.svg';
import './App.css';

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD Application</h1>
      </header>
      <div className="form-container p-1">
        <form className="form">
          <div className="form-section">
            <label className="text-light">Name</label>
            <input type="text" name="movieName"/>
          </div>
          <div className="form-section">
            <label className="text-light">Description</label>
            <input type="text" name="movieDescription"/>
          </div>
          <button className="button-input m-1">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
